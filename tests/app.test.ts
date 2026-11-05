import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { createApp } from "../src/app.js";
import type { AddressInfo } from "node:net";

const app = createApp();
let baseUrl = "";
let server: ReturnType<typeof app.listen>;

before(async () => {
  server = app.listen(0, "127.0.0.1");
  await new Promise<void>((resolve) => server.once("listening", resolve));
  const address = server.address() as AddressInfo;
  baseUrl = "http://127.0.0.1:" + address.port;
});

after(async () => {
  await new Promise<void>((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve());
  });
});

test("home page renders the NEXUS-AI overview and noindex policy", async () => {
  const response = await fetch(baseUrl);
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /NEXUS-AI/);
  assert.match(html, /noindex,follow/);
  assert.equal(response.headers.get("x-robots-tag"), "noindex, follow");
  assert.equal(response.headers.get("x-powered-by"), null);
  assert.match(response.headers.get("content-security-policy") ?? "", /default-src 'self'/);
});

test("Persian home page is RTL and exposes policy navigation", async () => {
  const response = await fetch(baseUrl + "/?lang=fa");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /lang="fa" dir="rtl"/);
  assert.match(html, /شرایط استفاده/);
  assert.match(html, /سیاست حریم خصوصی/);
  assert.match(html, /href="\/terms\?lang=fa"/);
  assert.match(html, /href="\/privacy\?lang=fa"/);
});

test("English and Persian legal routes render the correct document", async () => {
  const routes = [
    ["/terms", /Terms of Service/],
    ["/privacy", /Privacy Policy/],
    ["/terms?lang=fa", /شرایط استفاده از خدمات/],
    ["/privacy?lang=fa", /سیاست حریم خصوصی/]
  ] as const;

  for (const [route, expectedContent] of routes) {
    const response = await fetch(baseUrl + route);
    const html = await response.text();
    assert.equal(response.status, 200, route);
    assert.ok((response.headers.get("content-type") ?? "").includes("text/html"), route);
    assert.match(html, expectedContent, route);
    assert.match(html, /noindex,follow/, route);
  }
});

test("legal pages contain the current effective date and describe explicit GitHub confirmation", async () => {
  const terms = await (await fetch(baseUrl + "/terms")).text();
  const privacy = await (await fetch(baseUrl + "/privacy")).text();
  assert.match(terms, /Effective date: 5 November 2026/);
  assert.match(terms, /explicit confirmation command/);
  assert.match(terms, /main branch/);
  assert.match(privacy, /OpenRouter/);
  assert.match(privacy, /process memory/);
});

test("public stylesheet is served", async () => {
  const response = await fetch(baseUrl + "/styles.css");
  assert.equal(response.status, 200);
  assert.ok((response.headers.get("content-type") ?? "").includes("text/css"));
});

test("health endpoint returns JSON", async () => {
  const response = await fetch(baseUrl + "/healthz");
  const body = await response.json();
  assert.equal(response.status, 200);
  assert.deepEqual(body, { status: "ok", service: "nexus-ai-website" });
});

test("unknown routes return 404", async () => {
  const response = await fetch(baseUrl + "/not-a-real-page");
  assert.equal(response.status, 404);
});

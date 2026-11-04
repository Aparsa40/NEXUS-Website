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
});

test("Persian language variant is RTL", async () => {
  const response = await fetch(baseUrl + "/?lang=fa");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /lang="fa" dir="rtl"/);
  assert.match(html, /سیاست حریم خصوصی/);
});

test("legal routes render in English and Persian", async () => {
  for (const route of ["/terms", "/privacy", "/terms?lang=fa", "/privacy?lang=fa"]) {
    const response = await fetch(baseUrl + route);
    assert.equal(response.status, 200, route);
    assert.ok((response.headers.get("content-type") ?? "").includes("text/html"));
  }
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

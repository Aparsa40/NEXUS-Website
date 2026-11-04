import { Router } from "express";
import { renderHomePage, renderLegalPage } from "../views/pages.js";

export const pagesRouter = Router();

function getLanguage(value: unknown): "en" | "fa" {
  return value === "fa" ? "fa" : "en";
}

pagesRouter.get("/", (request, response) => {
  response.status(200).type("html").send(renderHomePage(getLanguage(request.query.lang)));
});
pagesRouter.get("/terms", (request, response) => {
  response.status(200).type("html").send(renderLegalPage("terms", getLanguage(request.query.lang)));
});
pagesRouter.get("/privacy", (request, response) => {
  response.status(200).type("html").send(renderLegalPage("privacy", getLanguage(request.query.lang)));
});
pagesRouter.get(["/healthz", "/api/health"], (_request, response) => {
  response.status(200).json({ status: "ok", service: "nexus-ai-website" });
});

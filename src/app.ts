import express, { type Express } from "express";
import helmet from "helmet";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pagesRouter } from "./routes/pages.js";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

export function createApp(): Express {
  const app = express();
  app.disable("x-powered-by");
  app.set("trust proxy", 1);

  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        baseUri: ["'self'"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        formAction: ["'self'"],
        frameAncestors: ["'none'"],
        imgSrc: ["'self'", "data:", "https://trustseal.enamad.ir"],
        objectSrc: ["'none'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "https://fonts.googleapis.com"]
      }
    },
    crossOriginEmbedderPolicy: false
  }));

  app.use(express.static(path.resolve(currentDirectory, "../public")));
  app.use(pagesRouter);
  app.use((_request, response) => {
    response.status(404).type("html").send(
      "<!doctype html><html lang='en'><meta charset='utf-8'><title>Not found · NEXUS</title><body><main><h1>404 — Page not found</h1><p><a href='/'>Return to NEXUS</a></p></main></body></html>"
    );
  });
  return app;
}

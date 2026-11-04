import { createApp } from "./app.js";

const port = Number.parseInt(process.env.PORT ?? "3000", 10);
if (!Number.isInteger(port) || port < 1 || port > 65_535) {
  throw new Error("PORT must be a valid TCP port.");
}

const app = createApp();
app.listen(port, "0.0.0.0", () => {
  console.info("NEXUS-AI website listening on port " + port);
});

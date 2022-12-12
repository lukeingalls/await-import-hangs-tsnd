import url from "url";

(async () => {
  const path = url.pathToFileURL("./log.ts");
  const logger = await import(path.href);
  logger.default();
})();

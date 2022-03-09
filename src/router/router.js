import acountRouter from "./acount.js";
function router(app) {
  app.use("/hello", acountRouter);
}

export default router;

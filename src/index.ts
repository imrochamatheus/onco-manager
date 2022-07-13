import "express-async-errors";
import express from "express";
import router from "./routes";
import handleAppErrorMiddleware from "./middlewares/handleAppErrorMiddleware";

const app = express();

app.use(express.json());
app.use(router);
app.use(handleAppErrorMiddleware);

app.listen(process.env.PORT || 3000, () =>
  console.log("server listening on port " + (process.env.PORT || 3000))
);

export default app;

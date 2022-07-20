import "express-async-errors";
import express from "express";
import router from "./routes";
import handleAppError from "./middlewares/handleAppError.mdw";

const app = express();
//comments

app.use(express.json());
app.use(router);
app.use(handleAppError);

app.listen(process.env.PORT || 3000, () =>
  console.log("server listening on port " + (process.env.PORT || 3000))
);

export default app;

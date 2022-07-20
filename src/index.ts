import "express-async-errors";
import express from "express";
import router from "./routes";
import handleAppError from "./middlewares/handleAppError.mdw";

const app = express();
//comments

app.use(express.json());
app.use(router);
app.use(handleAppError);

export default app;

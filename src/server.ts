import app from "./index";

app.listen(process.env.PORT || 3000, () =>
  console.log("server listening on port " + (process.env.PORT || 3000))
);

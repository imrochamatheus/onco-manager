import app from ".";
import * as dotenv from "dotenv";

import { AppDataSource } from "./data-source";

dotenv.config();

const init = async () => {
  const PORT = process.env.PORT || 3000;

  await AppDataSource.initialize().catch((error) =>
    console.error("Error during data-source initialization", error)
  );

  if (AppDataSource.isInitialized) {
    app.listen(PORT, () => console.log("App is running on port " + PORT));
  }
};

init();

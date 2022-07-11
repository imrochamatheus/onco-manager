import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource =
  process.env.NODE_ENV === "test"
    ? new DataSource({
        type: "sqlite",
        database: "memory",
        entities: ["src/entities/**.entity.ts"],
        synchronize: true,
      })
    : new DataSource({
        type: "postgres",
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
        synchronize: false,
        logging: true,
      });

import { config } from "dotenv";
import * as path from "path";

export default () => {
  config({
    path: path.resolve(__dirname, "..", "..", "..", "..", ".env"),
  });

  const { PORT } = process.env;

  process.env.PORT = PORT ?? "3000";

  return {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
  };
};

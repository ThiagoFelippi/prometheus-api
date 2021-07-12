import { MongoHelper } from "../infra/db/mongo";
import envs from "./config/enviroments";

const { PORT, MONGO_URL } = envs();

MongoHelper.connect(MONGO_URL)
  .then(async () => {
    const app = (await import("./config/app")).default;
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
  })
  .catch(console.error);

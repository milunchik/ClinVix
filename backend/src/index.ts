import "reflect-metadata";
import { AppDataSource } from "./utils/data-source";
import express from "express";
import router from "./routes/routes";
import AuthRouter from "./routes/auth.routes";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(router);
app.use(AuthRouter);

AppDataSource.initialize().finally(() => {
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
});

import "reflect-metadata";
import { AppDataSource } from "./utils/data-source";
import express from "express";
import AuthRouter from "./routes/auth.routes";
import DocRouter from "./routes/doctor.routes";
const cookieSession = require("cookie-session");
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cookieSession({
    keys: ["kefnkdk"],
  })
);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(AuthRouter);
app.use(DocRouter);

AppDataSource.initialize().finally(() => {
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
});

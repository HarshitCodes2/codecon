import express from "express";
import cors from "cors";
import controller from "./routes/controller";
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", controller);

app.listen(process.env.PORT, () =>
  console.log("Listening at port : " + process.env.PORT)
);

import "reflect-metadata";
import express from "express";
import "./database";
import { router } from "./Router";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3200, () => console.log("The server is running"));

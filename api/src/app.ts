import bodyParser from "body-parser";
import express from "express";
import "./data";

export const app = express();

app.use(bodyParser.json());

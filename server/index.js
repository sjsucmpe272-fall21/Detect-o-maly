import express from "express";
import cors from "cors";
import { frontendIP, frontendPort } from "./serverConfig.js";
const session = require('express-session');

const app = express();

app.use(
	cors({ origin: `http://${frontendIP}:${frontendPort}`, credentials: true })
);

app.use(express.json());
app.use(
	express.urlencoded({

		extended: false,
	})
);

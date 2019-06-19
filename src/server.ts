import dotenv from "dotenv";
import { App } from "./app";
import { TestController } from "./controllers/test.controller";

// initialize configuration
dotenv.config();

const port = process.env.SERVER_PORT;

const app = new App(
    [
        new TestController(),
    ],
    port,
);

app.listen();

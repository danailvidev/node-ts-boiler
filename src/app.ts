import express = require("express");
import * as bodyParser from "body-parser";

export class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: any, port: any) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers: any) {
        controllers.forEach((controller: any) => {
            this.app.use("/", controller.router);
        });
    }
}


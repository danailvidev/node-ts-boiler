import * as express from "express";

export class TestController {
    public path = "/test";
    public router = express.Router();

    private tests = [
        {
            author: "Marcin",
            content: "Dolor sit amet",
            title: "Lorem Ipsum",
        }
    ];

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
    }

    public getAllPosts = (request: express.Request, response: express.Response) => {
        response.send(this.tests);
    }
}

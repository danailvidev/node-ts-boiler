import express = require('express');
import dotenv from "dotenv";

// initialize configuration
dotenv.config();

const port = process.env.SERVER_PORT;

const app: express.Application = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

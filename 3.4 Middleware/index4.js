import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;
let bandname = "";

function createBandName(req, res, next) {
    console.log(req.body);
    bandname = req.body["street"] + req.body["pet"];
    next();
}

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit", createBandName, (req, resp) => {
    resp.send(`<h1> Your Band Name is:</h1><h2>${bandname}</h2>`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

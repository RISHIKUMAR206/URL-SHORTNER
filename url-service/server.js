const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let store = {};

app.post("/shorten", (req, res) => {
    const { longUrl } = req.body;
    const id = Math.random().toString(36).substring(7);

    store[id] = longUrl;

    res.json({ shortId: id });
});

app.get("/:id", (req, res) => {
    const url = store[req.params.id];

    if (url) {
        // IMPORTANT FIX
        return res.redirect(301, url);
    }

    res.status(404).send("Not found");
});

app.listen(5001, () => console.log("URL service running"));

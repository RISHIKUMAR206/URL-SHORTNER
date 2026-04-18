const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/shorten", async (req, res) => {
    const response = await axios.post("http://url-service:5001/shorten", req.body);
    res.json(response.data);
});

// 🔥 FINAL REDIRECT FIX
app.get("/:id", async (req, res) => {
    try {
        const response = await axios.get(
            `http://url-service:5001/${req.params.id}`,
            {
                maxRedirects: 0,
                validateStatus: null
            }
        );

        if (response.status === 301 || response.status === 302) {
            return res.redirect(response.headers.location);
        }

        res.send("Not found");
    } catch (err) {
        res.send("Error");
    }
});

app.listen(5000, () => console.log("Gateway running"));

const express = require("express");
const app = express();

app.get("/stats", (req,res)=>{
    res.json([
        {shortId:"abc", clicks:10},
        {shortId:"xyz", clicks:5}
    ]);
});

app.listen(5002, ()=>console.log("Analytics running"));

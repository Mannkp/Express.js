const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("<h1 style='font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; color: navy; '>This page is Loaded using Router </h1> ")
})

router.get("/jiyaProject", (req, res) => {
    res.statusCode = 200;
    res.render("index", {text : " Mann is a hero!"});
})

router.get("/download", (req, res) => {
    res.status(200).download("./server.js");
})

module.exports = router;

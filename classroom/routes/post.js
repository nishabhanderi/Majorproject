const express = require("express");
 const router = express.Router();

//Index 
router.get("/",(req, res) => {
    res.send("GET for posts");
});

//show 
router.get("/:id",(req, res) => {
    res.send("GET for posts id");
});

//POST 
router.post("/",(req, res) => {
    res.send("post for posts id");
});
 
//Delete 
router.delete("/:id",(req, res) => {
    res.send("DELETE for posts id");
});

module.exports = router;
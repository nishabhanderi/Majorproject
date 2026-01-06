
 const express = require("express");
 const router = express.Router();

//Index - users
router.get("/",(req,res)=>{
    res.send("GET for users")
});

//show - users
router.get("/:id",(req, res) => {
    res.send("GET for show user id");
});

//POST - users
router.post("/",(req, res) => {
    res.send("post for show users ");
});
//Delete - user
router.delete("/:id",(req, res) => {
    res.send("DELETE for show users");
});
module.exports = router;
 
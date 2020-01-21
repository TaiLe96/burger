var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");

// Create all our routes and setup locgic within those routes where reequired.
router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create([
        "name",
        "devoured"
    ],[
        req.body.name, req.body.devoured
    ], function(result){
        res.json({ id: result.insertId });
    });
});

router.put("api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    burger.update({
        devoured: req.body.sleepy
    }, condition, function(result){
        if (result.changedRows == 0){
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});

module.exports = router;
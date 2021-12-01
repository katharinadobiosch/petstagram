const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requiredLogin = require("../middleware/requiredLogin");
const Post = mongoose.model("Post");

router.get("/allposts", (req, res) => {
    // NO CONDITIONS, BECAUSE WE WANT TO FIND ALL POSTS
    Post.find()
        // POPULATE TO MAKE USERNAME VISIBLE
        .populate("postedBy", "_id username")
        .then((posts) => {
            res.json({ posts });
        })
        .catch((err) => {
            console.log(err);
        });
});

router.post("/createpost", requiredLogin, (req, res) => {
    const { title, body } = req.body;

    // IF TITLE AND BODY ARE EMPTY, SEND ERROR
    if (!title || !body) {
        res.status(422).json({ error: "Please fill out all fields" });
    }

    // PREVENT TO SAVE PASSWORD IN DATABASE
    req.user.password = undefined;

    // console.log(req.user);
    // res.send("ok");
    const post = new Post({
        title,
        body,
        postedBy: req.user,
    });
    post.save()
        .then((result) => {
            res.json({ post: result });
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get("/myposts", requiredLogin, (req, res) => {
    // FIND POSTS FROM THE USER THAT IS LOGGED IN
    Post.find({ postedBy: req.user._id })
        .populate("postedBy", "_id username")
        .then((myPost) => {
            res.json({ myPost });
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;

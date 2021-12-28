const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requiredLogin = require("../middleware/requiredLogin");
const Post = mongoose.model("Post");

router.get("/allposts", requiredLogin, (req, res) => {
    // NO CONDITIONS, BECAUSE WE WANT TO FIND ALL POSTS
    Post.find()
        // POPULATE TO MAKE USERNAME VISIBLE
        .populate("postedBy", "_id username")
        .populate("comments.postedBy", "_id username")
        // LATEST POST ON TOP
        .sort("-createdAt")
        .then((posts) => {
            res.json({ posts });
        })
        .catch((err) => {
            console.log(err);
        });
});

router.post("/newpost", requiredLogin, (req, res) => {
    // const { title, body, image } = req.body;

    const { body, image } = req.body;
    console.log(body, image);

    // IF TITLE AND BODY ARE EMPTY, SEND ERROR
    // if (!title || !body || !image) {
    if (!body || !image) {
        res.status(422).json({ error: "Please fill out all fields" });
    }

    // PREVENT TO SAVE PASSWORD IN DATABASE
    req.user.password = undefined;

    // console.log(req.user);
    // res.send("ok");
    const post = new Post({
        // title,
        body,
        image,
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

//UPDATING LIKES, UPDATE REQUEST
router.put("/like", requiredLogin, (req, res) => {
    Post.findByIdAndUpdate(
        req.body.postId,
        {
            $push: { likes: req.user._id },
        },
        {
            new: true,
        }
    ).exec((err, result) => {
        if (err) {
            return res.status(422).json({ error: err });
        } else {
            res.json(result);
        }
    });
});

router.put("/unlike", requiredLogin, (req, res) => {
    Post.findByIdAndUpdate(
        req.body.postId,
        {
            $pull: { likes: req.user._id },
        },
        {
            new: true,
        }
    ).exec((err, result) => {
        if (err) {
            return res.status(422).json({ error: err });
        } else {
            res.json(result);
        }
    });
});

router.put("/comment", requiredLogin, (req, res) => {
    const comments = {
        text: req.body.text,
        postedBy: req.user._id,
    };
    Post.findByIdAndUpdate(
        req.body.postId,
        {
            $push: { comments: comments },
        },
        {
            new: true,
        }
    )
        // POPULATE TO MAKE USERNAME VISIBLE

        .populate("comments.postedBy", "_id username")
        .populate("postedBy", "_id username")
        .exec((err, result) => {
            if (err) {
                return res.status(422).json({ error: err });
            } else {
                res.json(result);
            }
        });
});

// DELETE MY COMMENT

// MY CODE
router.delete("/deletemycomment/:commentId", requiredLogin, (req, res) => {
    Post.findOne({ _id: req.params.commentId })
        .populate("commentedBy", "_id username")
        .exec((err, comment) => {
            if (err || !comment) {
                return res.status(422).json({ error: err });
            }
            if (
                comment.commentedBy._id.toString() === req.user._id.toString()
            ) {
                comment.remove().then((result) => {
                    res.json({ message: "deleted successfully" }).catch(
                        (err) => {
                            console.log(err);
                        }
                    );
                });
            }
        });
});

// router.delete("/deletemycomment/:commentId", auth, async (req, res) => {
//     try {
//         // console.log(req.params.postId);
//         // console.log(req.params.commentId);
//         let post = await Post.findOne({ _id: req.params.postId })
//             .populate("comments.commentedBy", "_id username")
//             .populate("postedBy", "_id username");
//         if (!post) {
//             return res.status(404).json({ error: "Post not found" });
//         }
//         post.comments = await post.comments.filter((comment) => {
//             return comment._id != req.params.commentId;
//         });

//         const result = await post.save();
//         return res.json(result);
//     } catch (err) {
//         console.error("Error", err);
//     }
// });

router.delete("/deletemypost/:postId", requiredLogin, (req, res) => {
    Post.findOne({ _id: req.params.postId })
        .populate("postedBy", "_id")
        .exec((err, post) => {
            if (err || !post) {
                return res.status(422).json({ error: err });
            }
            if (post.postedBy._id.toString() === req.user._id.toString()) {
                post.remove()
                    .then((result) => {
                        res.json({ message: "successfully deleted" });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        });
});

module.exports = router;

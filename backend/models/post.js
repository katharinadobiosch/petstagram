const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: true,
        },
        // title: {
        //     type: String,
        //     required: true,
        // },
        body: {
            type: String,
            required: true,
        },
        likes: [{ type: ObjectId, ref: "User" }],
        comments: [
            {
                text: String,
                postedBy: { type: ObjectId, ref: "User" },
                commentedBy: { type: ObjectId, ref: "User" },
            },
        ],
        postedBy: {
            type: ObjectId,
            ref: "User",
        },
        follower: [{ type: ObjectId, ref: "User" }],
        following: [{ type: ObjectId, ref: "User" }],
    },
    // LATEST POST ON TOP
    { timestamps: true }
);

mongoose.model("Post", postSchema);

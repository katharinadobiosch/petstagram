const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
    image: {
        type: String,
        default: "no photo",
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    postedBy: {
        type: ObjectId,
        ref: "User",
    },
});

mongoose.model("Post", postSchema);
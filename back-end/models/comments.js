const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;


const commentSchema = new mongoose.Schema({
    _userId: {
        type: ObjectId,
        ref: "users",
        required: true,
    },

    _postId: {
        type: ObjectId,
        ref: "posts",
        required: true,
    },

    text: {
        type: String,
        maxLength: 500,
        default: ""
    },

}, {timestamps: true})


const Comments = mongoose.model("comments", commentSchema);

module.exports = Comments;
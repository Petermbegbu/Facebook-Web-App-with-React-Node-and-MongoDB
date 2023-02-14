const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;


const postSchema = new mongoose.Schema({
    _userId: {
        type: ObjectId,
        ref: "users",
        required: true,
    },

    desc: {
        type: String,
        maxLength: 500,
        default: ""
    },

    img: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },

    likes: {
        type: Array,
        default: []
    }

}, {timestamps: true});


const Posts = mongoose.model("posts", postSchema);

module.exports = Posts;
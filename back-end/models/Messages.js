const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;



const messageSChema = new mongoose.Schema({
    _chatMemberId: {
        type: ObjectId,
        ref: "chatMembers",
        required: true
    },

    _senderId: {
        type: ObjectId,
        ref: "users",
        required: true
    },

    text: {
        type: String,
        required: true
    }

}, {timestamps: true})


const Messages = mongoose.model("messages", messageSChema);

module.exports = Messages;
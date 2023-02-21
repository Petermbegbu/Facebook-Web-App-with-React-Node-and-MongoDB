const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;



const messageSChema = new mongoose.Schema({
    _conversationId: {
        type: ObjectId,
        ref: "conversations",
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
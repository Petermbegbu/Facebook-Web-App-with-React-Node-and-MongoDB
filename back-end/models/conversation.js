const mongoose = require("mongoose");


const conversationSchema = new mongoose.Schema({
    membersIds: {
        type: Array
    }
}, {timestamps: true})


const Conversations = mongoose.model("conversations", conversationSchema);

module.exports = Conversations;
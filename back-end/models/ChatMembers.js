const mongoose = require("mongoose");


const chatMemberSchema = new mongoose.Schema({
    membersIds: {
        type: Array
    }
}, {timestamps: true})


const ChatMembers = mongoose.model("chatmembers", chatMemberSchema);

module.exports = ChatMembers;
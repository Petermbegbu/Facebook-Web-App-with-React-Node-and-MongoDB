const Conversations = require("../models/conversation");


//create conversation
module.exports.createConversation = async (req, res) => {
    const {senderId, receiverId} = req.body

    try{
        const conversation = await Conversations.create({membersIds: [senderId, receiverId]});

        res.status(200).json(conversation);
    } catch (err) {
        res.status(500).json(err);
    }

}


//Get all chat members list
module.exports.getConversations = async (req, res) => {
    const {id} = req.params; // id of current user

    try{
        const conversations = await Conversations.find({
            membersIds: {$in: [id]}
        })

        res.status(200).json(conversations);
    } catch (err) {
        res.status(500).json(err);
    }
}
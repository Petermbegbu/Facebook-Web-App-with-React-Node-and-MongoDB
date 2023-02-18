const ChatMembers = require("../models/ChatMembers");


//create chat members
module.exports.createMember = async (req, res) => {
    const {senderId, receiverId} = req.body

    try{
        const chatMember = await ChatMembers.create({membersIds: [senderId, receiverId]});

        res.status(200).json(chatMember);
    } catch (err) {
        res.status(500).json(err);
    }

}


//Get all chat members list
module.exports.getMembers = async (req, res) => {
    const {id} = req.params; // id of current user

    try{
        const chatMembers = await ChatMembers.find({
            membersIds: {$in: [id]}
        })

        res.status(200).json(chatMembers);
    } catch (err) {
        res.status(500).json(err);
    }
}
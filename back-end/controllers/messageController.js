const Messages = require("../models/Messages");


//Add message
module.exports.createMessage = async (req, res) => {

    try{
        const message = await Messages.create(req.body);

        res.status(200).json(message);
    } catch (err) {
        res.status(500).json(err);
    }
}


//Get messages
module.exports.getMessages = async (req, res) => {
    const conversationId = req.params.id;

    try{
        const messages = await Messages.find({
            _conversationId: conversationId
        }); //Returns all messages with the _conversationId = conversationId

        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json(err);
    }
}
const Messages = require("../models/Messages");
const Users = require("../models/User");


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

        const messageDetails = await Promise.all(
            messages.map( async (message) => {
                const {username, profilePicture} = await Users.findById(message._senderId);
                
                return {message, username, profilePicture}
            })
        ) 

        res.status(200).json(messageDetails);
    } catch (err) {
        res.status(500).json(err);
    }
}
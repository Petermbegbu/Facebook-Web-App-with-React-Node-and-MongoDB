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
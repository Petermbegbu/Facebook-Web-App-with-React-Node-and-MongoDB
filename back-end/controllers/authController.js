const User = require("../models/User");

module.exports.signup = async (req, res) => {

    try {
        //Create and Save new user
        const user = await User.create(req.body);
    
        res.status(200).send(user);
    } catch (err) {
        //Return error message
        res.json({err});
    }
   
}
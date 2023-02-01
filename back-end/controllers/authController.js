const User = require("../models/User");
const bcrypt = require("bcrypt");


module.exports.signup = async (req, res) => {

    try {
        //Create and Save new user
        const user = await User.create(req.body);
        //Note that i used userSchema.pre() to hash the password before saving to the database.

        res.status(200).json(user);
    } catch (err) {
        //Return error message
        res.status(500).json(err);
    }

}

module.exports.signin = async (req, res) => {
    //destructure email and password
    const {email, password} = req.body;

    try {
        //search to see if the user exist
        const user = await User.findOne({email});

        if(user){
            //Compare the password user entered with the hashesd one existing in our database
            const passwordValid = await bcrypt.compare(password, user.password); //This returns true of false

            if(passwordValid){
                res.status(200).json(user);
            } else {
                res.status(404).json("Wrong Password!!");
            }
        } else {
            res.status(404).json("User not found!!");
        }

    } catch (err) {
        res.status(500).json(err);
    }

}
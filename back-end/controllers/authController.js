const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//Create token function
const createToken = (id) => {
    //Token expires in 5 hours
    const token = jwt.sign({id}, process.env.JWT_SECRET_KEY, { expiresIn: 5 * 60 * 60 }); //day * hr * min * sec
    return token;
}


module.exports.signup = async (req, res) => {

    try {
        //Create and Save new user
        const user = await User.create(req.body);
        //Note that i used userSchema.pre() to hash the password before saving to the database.

        res.status(200).json(user);
        //res.status(200).send("SIgned In");
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
                const token = createToken(user._id);

                //cookie expires in 5hrs
                res.cookie("myCookieToken", token, {httpOnly: true, maxAge: 5 * 60 * 60 * 1000 });
                
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


module.exports.logout = (req, res) => {
    //we can't delete the cookies in the server but we can set it to empty string and then
    //set the maxAge to a short time like 1 second; 
    res.cookie("myCookieToken", "", {maxAge: 1 * 1000});
    res.status(200).json({message: true});
}
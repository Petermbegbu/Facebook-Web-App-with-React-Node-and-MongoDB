const bcrypt = require("bcrypt");
const Users = require("../models/User");


module.exports.updateUser = async (req, res) => {
    const id = req.params.id;
    const {userId} = req.body;
    let {password} = req.body;
    let (isAdmin) = req.user;
 

    if(id === userId || isAdmin) {
        try {
            if(password){
                const salt = await bcrypt.genSalt(10);
                password = await bcrypt.hash(password, salt);
            }

            //update the req.body
            req.body.password = password;

            //update the database
            const user = await Users.findByIdAndUpdate(id, {$set: req.body}, { runValidators: true }); 
            //Note runValidators:true enables the model schema restrictions like minlength, maxlength etc. 

            res.status(200).send("Account has been created!!");
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }

    } else {
        res.status(403).send("You can only update your account!!");
    }
    
}


module.exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    const {userId} = req.body;

    if(id === userId) {
        try{
            await Users.findByIdAndDelete(id);
            res.status(200).send("Account has been deleted");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).send("You can only update your account!!");
    }
    
}


module.exports.getUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await Users.findById(id)
            .select("-password -createdAt -updatedAt") //Excludes the fields from the selection
        
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}


module.exports.follow = async (req, res) => {
    const id = req.params.id;  //Id of another user you want to follow
    const {userId} = req.body; //Id of current user

    if (id !== userId) {
        try {
            const friendUser = await Users.findById(id);      //get the user you want to follow
            const currentUser = await Users.findById(userId);  //get the current user

            //check to see if you are already following the user you want to follow
            if(currentUser.followings.includes(id) && friendUser.followers.includes(userId)) {
                res.status(403).send("You are already following this user");
            } else {
                await currentUser.updateOne({$push: {followings: id}});      //push to the array
                await friendUser.updateOne({$push: {followers: userId}});   //push to the array

                res.status(200).send("You are now following this user");
            }
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).send("you can't follow your self");
    }

}


module.exports.unfollow = async (req, res) => {
    const id = req.params.id;  //Id of another user you want to unfollow
    const {userId} = req.body; //Id of current user

    if (id !== userId) {
        try {
            const friendUser = await Users.findById(id);      //get the user you want to unfollow
            const currentUser = await Users.findById(userId);  //get the current user

            //check to see if you are following the user
            if(currentUser.followings.includes(id) && friendUser.followers.includes(userId)) {
                await currentUser.updateOne({$pull: {followings: id}});      //pull from the array
                await friendUser.updateOne({$pull: {followers: userId}});   //pull from the array

                res.status(200).send("You have unfollowed this user");
            } else {
                res.status(403).send("You have already unfollowed this user");
            }
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).send("you can't unfollow your self");
    }

}


module.exports.followings = async (req, res) => {
    const {id} = req.params;

    try {
        const user = await Users.findById(id);
        const followingsList = await Promise.all(
            user.followings.map(friendId => {
                return Users.findById(friendId);
            })
        )

        const followings = followingsList.map(friend => {
            const {_id, username, profilePicture} = friend;

            return {_id, username, profilePicture}
        })

        res.status(200).json(followings);
    } catch (err) {
        res.status(500).json({err})
    }
}
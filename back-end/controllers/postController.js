const Posts = require("../models/Post");
const Users = require("../models/User");

//create a post
module.exports.createPost = async (req, res) => {
    try {
        const post = await Posts.create(req.body);

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
}


//Get post
module.exports.getPost = async (req, res) => {
    const {id} = req.params;

    try {
        const post = await Posts.findById(id);

        res.status(200).json(post);

    } catch (err) {
        res.status(500).json(err);
    }
}


//Get all user posts and friends posts
module.exports.getTimelinePosts = async (req, res) => {
    //What we want to do right here is to concatenate all current user posts and all followed friends posts

    const {_userId} = req.body;

    try {
        const currentUser = await Users.findById(_userId);

        const currentUserPosts = await Posts.find({_userId: currentUser._id});  //All posts for the current user

        const friendsPosts = await Promise.all( 
            currentUser.followings.map( friendId => {
                return Posts.find({_userId: friendId});
            })    
        ); //All followed friends posts. Note we use Promise.all because we have more than one promise in the map loop

        const timelinePosts = [...currentUserPosts, ...friendsPosts];

        res.status(200).json(timelinePosts);
    } catch (err) {
        res.status(500).json(err);
    }
}



//Update post
module.exports.updatePost = async (req, res) => {
    const {id} = req.params;
    const {_userId} = req.body;

    try{
        const post = await Posts.findById(id);

        if(post._userId == _userId) {
            await post.updateOne({$set: req.body});
            res.status(200).send("The post has been updated");
        } else {
            res.status(403).send("You can only update your post");
        }

    } catch (err) {
        res.status(500).json(err);
    }
}


//Delete post
module.exports.deletePost = async (req, res) => {
    const {id} = req.params;
    const {_userId} = req.body;

    try{
        const post = await Posts.findById(id);

        if(post._userId == _userId) {
            await post.deleteOne();
            res.status(200).send("The post has been deleted");
        } else {
            res.status(403).send("You can only delete your post");
        }

    } catch (err) {
        res.status(500).json(err);
    }
}


//like or dislike post
module.exports.likePost = async (req, res) => {
    const {id} = req.params;
    const {_userId} = req.body;

    try {
        const post = await Posts.findById(id);

        if(!post.likes.includes(_userId)){
            await post.updateOne({$push: {likes: _userId}})
            res.status(200).send("The post has been liked");
        } else {
            await post.updateOne({$pull: {likes: _userId}})
            res.status(200).send("The post has been disliked");
        }

    } catch (err) {
        res.status(500).json(err);
    }
}
const Comments = require("../models/comments");
const Users = require("../models/User");

//create comment
module.exports.addComment = async (req, res) => {
    const {data} = req.body;

    try{
        const comment = await Comments.create(data)

        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }

}


module.exports.getComments = async (req, res) => {
    const {postId} = req.params;
    
    try{
        const comments = await Comments.find({_postId: postId})

        const commentDetails = await Promise.all(
            comments.map( async (comment) => {
                const {username, profilePicture} = await Users.findById(comment._userId);
                
                return {comment, username, profilePicture}
            })
        ) 

        res.status(200).json(commentDetails);
    } catch (err) {
        res.status(500).json(err);
    }
}
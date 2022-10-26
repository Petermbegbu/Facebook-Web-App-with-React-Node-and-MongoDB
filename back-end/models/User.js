const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 15,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
        min: 6
    },

    profilePicture: {
        type: String,
        default: ""
    },

    coverPicture: {
        type: String,
        default: ""
    },

    followers: {
        type: Array,
        default: []
    },

    followings: {
        type: Array,
        default: []
    },

    isAdmin: {
        type: Boolean,
        default: false
    }

}, {timestamps: true})


//This function will be called before a user is saved to the database;
//This is for password hashing;
UserSchema.pre("save", async function(next) {
    //Note that "this" keyword refers to the User model
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);

    next();
})



const User = mongoose.model("user", UserSchema);

module.exports = User;
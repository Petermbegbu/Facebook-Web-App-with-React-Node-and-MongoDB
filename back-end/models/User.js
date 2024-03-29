const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {isEmail} = require("validator");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Minimum length of username is 3 characters"],
        max: 15,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: [isEmail, "Please enter a valid Email"]
    },

    password: {
        type: String,
        required: true,
        minlength: [6, "Minimum length of password is 6 characters"]
    },

    gender: {
        type: String,
        default: ""
    },

    profilePicture: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        }
    },

    coverPicture: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        }
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
    },

    about: {
        type: String,
        default: ""
    },

    city: {
        type: String,
        default: ""
    },

    country: {
        type: String,
        default: ""
    },

    relationship: {
        type: String,
        default: ""
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



const Users = mongoose.model("users", UserSchema);

module.exports = Users;
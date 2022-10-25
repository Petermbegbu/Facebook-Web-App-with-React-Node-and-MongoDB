const mongoose = require("mongoose");
require("dotenv").config();


mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("Database is Connected"))
    .catch((error) => console.log("Database Error", error))

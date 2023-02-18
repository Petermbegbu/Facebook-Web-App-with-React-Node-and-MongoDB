const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");
const messageRoute = require("./routes/messageRoute");
const chatMemberRoute = require("./routes/chatMemberRoute");


//Database Connection
require("./database/mongodbConnect")

//Middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

//HTTP Request routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/message", messageRoute);
app.use("/api/chatMember", chatMemberRoute);


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Backend server is running on port ${PORT}`));
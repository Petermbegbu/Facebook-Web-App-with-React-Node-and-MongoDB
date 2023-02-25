const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");
const messageRoute = require("./routes/messageRoute");
const conversationRoute = require("./routes/conversationRoute");
const socketio = require("./socketio");

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
app.use("/api/conversation", conversationRoute);

//socketio request
socketio(io);

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Backend server is running on port ${PORT}`));
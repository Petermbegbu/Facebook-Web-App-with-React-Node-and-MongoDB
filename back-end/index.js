const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");

//Database Connection
require("./database/mongodbConnect")

//Middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Backend server is running on port ${PORT}`));
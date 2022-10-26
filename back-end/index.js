const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");

//Database Connection
require("./database/mongodbConnect")

//Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

app.use("/api", authRoute);
app.use("/api", userRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Backend server is running on port ${PORT}`));
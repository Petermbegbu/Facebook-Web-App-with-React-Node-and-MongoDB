const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

//Database Connection
require("./database/mongodbConnect")


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Backend server is running on port ${PORT}`));
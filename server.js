const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// const dotenv = require("dotenv");
const app = express();
require("dotenv").config();  

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connetction succesfull");
})

const usersRouter = require("./routes/users.js");
app.use("/user",usersRouter);

//then we run this port     
app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})


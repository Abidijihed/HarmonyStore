const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const {ProductRouter}=require("./router/ProductRouter")

app.use(
  cors({
    origin: "*",
    // origin:"http://www.localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);


app.use(express.json());
app.use(cookieParser());
app.use("/",ProductRouter)

module.exports = app;
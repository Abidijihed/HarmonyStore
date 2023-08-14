const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require('body-parser');
require("dotenv").config();
const {ProductRouter}=require("./router/ProductRouter")
const {userRoter}=require("./router/UsersRouter")
const {addToCardRouter}=require("./router/addToCardRouter")
const {paymentOrder}=require("./router/paymentOrder")
app.use(
  cors({
    origin: "*",
    // origin:"http://www.localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use("/",ProductRouter)
app.use("/",userRoter)
app.use("/",addToCardRouter)
app.use('/',paymentOrder)
module.exports = app;
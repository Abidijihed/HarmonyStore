const router = require("express").Router()
const controllerPayment=require("../controllers/payment")

router.post("/payments/payment",controllerPayment.CreatePayment)

module.exports={paymentOrder:router}
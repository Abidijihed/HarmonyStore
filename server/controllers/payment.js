const API_KEY = '64ccc6d74760b71467c919e6:zX5KfpZ9hQkcncL4SWU';
const axios=require("axios");
const {connection} = require("../dataBaseConfig/config");
const produtController=require('./products')
const crypto = require('crypto');
const middleware = require('../midelwar/auth.js');
const utils=require('../midelwar/utils.js')
const session=require ('./session.js')
module.exports={
CreatePayment:(async (req,res)=>{

  const orderItems = req.body.data;
  const paymentType = true;
  const user_id = req.body.id;
  const liverison=req.body.liverison
  try {
    const response=await axios.post(
      'https://api.konnect.network/api/v2/payments/init-payment',req.body,{
        headers:{
          'x-api-key':API_KEY
        }
      }
    )
    res.json(response.data);
    axios.get("https://api.konnect.network/api/v2/payments/"+response.data.paymentRef)
    .then((res)=>{
       if(res.data){
        produtController.CreateOrderItems({orderItems,user_id,liverison,paymentType})
       }
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while initiating payment.' });
  }

})
}
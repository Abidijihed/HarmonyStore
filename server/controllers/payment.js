const API_KEY = '64ccc6d74760b71467c919e6:zX5KfpZ9hQkcncL4SWU';
const axios=require("axios");
const {connection} = require("../dataBaseConfig/config");
const crypto = require('crypto');
const middleware = require('../midelwar/auth.js');
const utils=require('../midelwar/utils.js')
const session=require ('./session.js')
module.exports={
CreatePayment:(async(req,res)=>{
 await axios.post(
          'https://api.konnect.network/api/v2/payments/init-payment',req.body,{
            headers:{
              'x-api-key':API_KEY
            }
       }).then((response)=>{
            console.log(response)
        // const query=`INSERT INTO payment (user_id,email,firstName,lastName,paymentRef,amount) VALUES (${req.body.id},"${req.body.email}","${req.body.firstName}","${lastName}","${response.data.paymentRef}",${req.body.amount})`
        //    connection.query(query,(err,result)=>{
        //     if (err){
        //       res.status(500).send(err)
        //     }
            res.status(200).send(response)
          //  })
       }).catch((error)=>res.status(500).send(error))    
})
}
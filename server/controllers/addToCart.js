const {connection}=require("../dataBaseConfig/config")

module.exports={
    AddToCard:((req,res)=>{  
          const query=`INSERT INTO carts (user_id, product_id) VALUES (${req.body.user_id},${req.body.product_id})`
          connection.query(query,(err,result)=>{
            err ? res.status(500).send(err):res.status(201).send('product added')
         })  
     }),

    GetAllProduct:((req,res)=>{
      const query=`select * from carts where user_id=${req.params.user_id}`
      connection.query(query,(err,result)=>{
        console.log(result)
        err ? res.status(500).send(err) : res.status(200).send(result)
      })
    })
    
}
const {connection}=require("../dataBaseConfig/config")

module.exports={
    CreateProduct:((req,res)=>{
        const query=`insert into product (username,image) values ("${req.body.username}","${req.body.image}")`
        connection.query(query,(err,result)=>{
            err ? res.status(500).send(err):res.status(200).send("product created")
        })
    })
}
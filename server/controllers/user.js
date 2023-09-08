const {connection}=require("../dataBaseConfig/config")
const crypto = require('crypto');
const middleware = require('../midelwar/auth.js');
const utils=require('../midelwar/utils.js')
const session=require ('./session.js')

module.exports={
    CreateUser:((req,res)=>{
     
    let passwordHashed=crypto.createHash('sha256').update(req.body.Password, 'utf8').digest('hex')
    let query1=`SELECT * from users where Email="${req.body.Email}"`
     connection.query(query1,(err,results)=>{
  if(err){
    res.status(500).send(err)
  }else if((results.length>0 &&results[0].Email===req.body.Email)) {
    res.status(203).send("user exist")
  }else if(!results.length && results===undefined){
    res.status(204).send("chek somthing went wrong!")
  }else{
    let query=`INSERT INTO users(FirstName,LastName,Email,Address,PhoneNumber,Password,image,country,Zip,role) VALUES("${req.body.FirstName}","${req.body.LastName}","${req.body.Email}","${req.body.Address}","${req.body.PhoneNumber}","${passwordHashed}","${req.body.image}","${req.body.country}","${req.body.Zip}","${req.body.role}")`
    connection.query(query,(err,results)=>{
      if(err){
        res.status(500).send(err,'tttt')
      }else{
        connection.query(query1,(err,result)=>{
          var session=utils.RandomString(32)
          middleware.CreateSession(req,res,result[0].id,session)
          // res.status(200).send(result)

        })
        
      }
    
    })
    
  }
   
    })
}),
LoginUser :(req,res)=>{
  var passwordHashed = crypto.createHash('sha256').update(req.body.Password, 'utf8').digest('hex')
  
  // var repeatepasswordHshed=crypto.createHash('sha256').update(req.body.repeatepassword, 'utf8').digest('hex')
  const query=`SELECT * from users where Email="${req.body.Email}"`
  connection.query(query,(err,results)=>{
    if(err){
      res.status(500).send(err)
    } else if(results.length>0 && results[0].Password===passwordHashed ){
     var session=utils.RandomString(32)
      middleware.CreateSession(req,res,results[0].id,session)
    }else if(results.length===0 || results[0].Password!==passwordHashed  ){
           res.status(200).send('somthing went wrong')
    }else{
      res.status(404).send("not fund")
    }
  })
},
logout:(req,res)=>{
  session.delete(req.cookies.HarmonyStore)
  .then((result)=>{
res.status(200).send('user loged out')      
 })
  .catch((err)=>{
    res.status(500).send('server err')
  })

},
getoneuser:((req,res)=>{
  const query=`select * from users where id=${req.params.id}`
  connection.query(query,(err,result)=>{
    err ?res.status(500).send(err):res.status(200).send(result)
  })
}),
updateUser: (req, res) => {
  const { FirstName, LastName, Email, Address, phoneNumber, country, Zip, City } = req.body;

  // Construct the SQL query to update user information
  const query = `UPDATE users SET FirstName="${FirstName}", LastName="${LastName}", Email="${Email}", Address="${Address}", PhoneNumber="${phoneNumber}", country="${country}", Zip="${Zip}", City="${City}" WHERE id=${req.params.id}`;

  // Execute the query with user data
  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: error });
    } else {
      res.status(200).json({ message: 'User updated successfully.' });
    }
  });
},

newsletterUser:((req,res)=>{
  const query=`insert into newsletter(email) values("${req.body.email}")` 
  connection.query(query,(err,result)=>{
   err ? res.status(500).send(err):res.status(200).send("user subscribe")
  }) 
})
}







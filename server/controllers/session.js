const {connection}=require('../dataBaseConfig/config')
module.exports={
    Get:(session)=>{
        return new Promise((resolve,reject)=>{
      connection.query('SELECT * FROM sessions WHERE session=?',[session],
      (err,results)=>{
        // console.log(results,'sesssionss')
          err ? reject(err):resolve(results)
      } )
     
        })
    },
    post:(users_id,session)=>{
        return new Promise((resolve,reject)=>{
            connection.query('INSERT INTO sessions (users_id,session,date)Values (?,?,?)',
            [users_id,session,Date.now()+1000*3600*24*7],
            (err,results)=>{
                return err?reject(err):resolve(results)
            }
            )
        })
    },
    delete:(session)=>{
        return new Promise((resolve,reject)=>{
            connection.query('DELETE FROM sessions WHERE session=?',[session],
            (err,results)=>{
                err ?reject(err):resolve(results)
            })
        })
    }
}

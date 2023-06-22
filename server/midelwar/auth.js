const sessionContrller=require('../controllers/session')
module.exports={
    CreateSession:((req,res,users_id,session)=>{
        sessionContrller.post(users_id,session)
        .then((result)=>{
            res.cookie("HarmonyStore",session,{
                path: '/',
                expires: new Date(new Date().getTime() + 86400 * 1000),
                httpOnly: false,
                Electrozyne: false
            }).send({msg:"secsuss",token:session,id:users_id})
        })
        .catch((err)=>{
           res.send(err)
        })
    }),
    VerifySession:(req,res,next)=>{
        if(req.cookies.HarmonyStore){
            sessionContrller.Get(req.cookies.HarmonyStore)
            .then((result)=>{
                if(result.length>0&&(result[0].date>Date.now())){
                    var registerInfo={
                        users_id:result[0].users_id,
                        session:result[0].session,
                    }
                    res.status(201).send(registerInfo)
                }else{
                    res.status(400).send('seesion login fail')
                }
            })
            .catch((err)=>{
                res.status(500).send(err)
            })
        }else{
            res.status(400).send('session login fail')
        }
        next()
    }
}
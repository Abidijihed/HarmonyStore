const router =require('express').Router()
const controllerUser=require('../controllers/user')

router.post('/api/Create_user',controllerUser.CreateUser)
router.post('/api/login',controllerUser.LoginUser)
router.get('/api/getone_user/:id',controllerUser.getoneuser)
router.put('/api/update_user/:id',controllerUser.updateUser)
router.get('/api/logout',controllerUser.logout)

module.exports={userRoter:router}
const router =require('express').Router()
const controllerUser=require('../controllers/user')
const session=require('../controllers/session')
router.post('/api/Create_user',controllerUser.CreateUser)
router.post('/api/login',controllerUser.LoginUser)
router.get('/api/getone_user/:id',controllerUser.getoneuser)
router.put('/api/update_user/:id',controllerUser.updateUser)
router.get('/api/logout',controllerUser.logout)
router.post("/api/newsletter",controllerUser.newsletterUser)


router.post('/request-password-reset',session.requestPasswordReset)
router.put('/api/password/reset/:token',session.resetPassword)

module.exports={userRoter:router}
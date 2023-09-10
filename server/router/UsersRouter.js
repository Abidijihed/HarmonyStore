const router =require('express').Router()
const multer = require("multer");
const emailController = require("../controllers/mail");
const upload = multer({ storage: multer.memoryStorage() });

const controllerUser=require('../controllers/user')
const session=require('../controllers/session')
const maler=require('../controllers/mail')
router.post('/api/Create_user',controllerUser.CreateUser)
router.post('/api/login',controllerUser.LoginUser)
router.get('/api/getone_user/:id',controllerUser.getoneuser)
router.put('/api/update_user/:id',controllerUser.updateUser)
router.get('/api/logout',controllerUser.logout)
router.post("/api/newsletter",controllerUser.newsletterUser)


router.post('/request-password-reset',session.requestPasswordReset)
router.put('/api/password/reset/:token',session.resetPassword)
router.post("/api/send/email", upload.single("attachment"), emailController.nodmail);

module.exports={userRoter:router}
const router=require("express").Router()
const ProductController=require("../controllers/Product")
 router.post('/api/product',ProductController.CreateProduct)

 module.exports={ProductRouter:router}
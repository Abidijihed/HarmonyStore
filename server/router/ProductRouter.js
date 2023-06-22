const router=require("express").Router()
const ProductController=require("../controllers/products")
 router.post('/api/product',ProductController.CreateProduct)

 module.exports={ProductRouter:router}
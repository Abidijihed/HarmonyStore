const router=require("express").Router()
const ProductController=require("../controllers/products")
 router.post('/api/product',ProductController.CreateProduct)
// hh
 module.exports={ProductRouter:router}
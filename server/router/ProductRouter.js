const router=require("express").Router()
const ProductController=require("../controllers/products")
 router.post('/api/Create_product',ProductController.CreateProduct)
 router.get('/api/get_All_product',ProductController.getAllProduct)

 module.exports={ProductRouter:router}
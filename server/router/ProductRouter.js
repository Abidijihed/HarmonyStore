const router=require("express").Router()
const ProductController=require("../controllers/products")

 router.post('/api/Create_product',ProductController.CreateProduct)
 router.get('/api/get_All_product',ProductController.getAllProduct)
 router.put("/api/add_to_card/:id",ProductController.AddToCard)
 router.put("/api/update/product/:id",ProductController.UpdateProduct)
 router.delete("/api/delete/product/:id",ProductController.DeleteProduct)
router.get('/api/get/product/added',ProductController.getProductadded)
router.put('/api/update/Stockquantity/:id',ProductController.UpdateStockquantity)

 module.exports={ProductRouter:router}
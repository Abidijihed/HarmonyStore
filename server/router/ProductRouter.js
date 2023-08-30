const router=require("express").Router()
const ProductController=require("../controllers/products")

 router.post('/api/Create_products',ProductController.CreateProduct)
 router.get('/api/get_All_products',ProductController.getAllProduct)
 router.put("/api/update_product/:id",ProductController.UpdateProduct)
 router.delete("/api/delete_product/:id",ProductController.DeleteProduct)
 router.get('/api/get_one_product/:id',ProductController.GetoneProduct)


 router.post("/api/createOrderItems",ProductController.CreateOrderItems)
router.get('/api/get_user_order/:id',ProductController.GetUserOrder)
// router.put('/api/update/Stockquantity/:id',ProductController.UpdateStockquantity)

 module.exports={ProductRouter:router}
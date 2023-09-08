const router=require("express").Router()
const ProductController=require("../controllers/products")

 router.post('/api/Create_products',ProductController.CreateProduct)
 router.get('/api/get_All_products',ProductController.getAllProduct)
 router.put("/api/update_product/:id",ProductController.UpdateProduct)
 router.delete("/api/delete_product/:id",ProductController.DeleteProduct)
 router.get('/api/get_one_product/:id',ProductController.GetoneProduct)
 router.get('/api/search',ProductController.SEARCHSEG)

 router.post("/api/createOrderItems",ProductController.CreateOrderItems)
router.get('/api/get_user_order/:id',ProductController.GetUserOrder)
router.get('/api/get_all_users_order',ProductController.GetAllOrderUsers)
router.put('/api/update-order-status/:id', ProductController.updateOrderStatus)



router.post('/api/create_images',ProductController.AddImages)
router.get('/api/get_images/:id',ProductController.getimages)
router.put("/api/update_images/:id",ProductController.updateimages)
router.delete("/api/delete_images/:id",ProductController.deleteimages)
 module.exports={ProductRouter:router}
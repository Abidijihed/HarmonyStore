const router=require("express").Router()
const controllerCard=require('../controllers/addToCart')

router.post('/api/add-to-cart', controllerCard.AddToCard);
router.get('/api/get-to-cart/:user_id', controllerCard.GetAllProduct);

module.exports={addToCardRouter:router}

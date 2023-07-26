const router=require("express").Router()
const controllerCard=require('../controllers/addToCart')

router.post('/api/add-to-cart', controllerCard.AddToCard);

module.exports={addToCardRouter:router}

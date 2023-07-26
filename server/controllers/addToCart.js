const {connection}=require("../dataBaseConfig/config")

module.exports={
    AddToCard:(async(req,res)=>{
        const { user_id, product_id, quantity } = req.body;
        try {
          const [result] = await connection.execute(
            'INSERT INTO carts (user_id, product_id, quantity) VALUES (?, ?, ?)',
            [user_id, product_id, quantity]
          );
          connection.end();
          res.status(201).json({ message: 'Product added to cart successfully', cart_id: result.insertId });
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Failed to add product to cart' });
        }
      
    })
}
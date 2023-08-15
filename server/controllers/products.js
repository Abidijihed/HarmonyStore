const { connection } = require("../dataBaseConfig/config")

module.exports = {
  CreateProduct: ((req, res) => {
    const query = `INSERT INTO products(product_name,description,price,price_promo,quantity_in_stock,image_url,category,Product_material) VALUES("${req.body.product_name}","${req.body.description}",${req.body.price},${req.body.price_promo},${req.body.quantity_in_stock},"${req.body.image_url}","${req.body.category}","${req.body.Product_material}")`;
    connection.query(query, (err, result) =>
      err ? res.status(500).send(err) : res.status(201).send("poste done")
    )
  }),
  getAllProduct: (req, res) => {
    const query = "select * from products";
    connection.query(query, (err, result) => {
      err ? res.status(500).send(err) : res.status(201).send(result);
    });
  },
  UpdateProduct: (req, res) => {
    const {
      Product_material,
      product_name,
      description,
      price,
      quantity_in_stock,
      price_promo,
      image_url,
      category,
    } = req.body;
  
    const query = `UPDATE products SET product_name="${product_name}", Product_material="${Product_material}", description="${description}", price="${price}", quantity_in_stock="${quantity_in_stock}", price_promo="${price_promo}", image_url="${image_url}", category="${category}" WHERE id=${req.params.id}`;
  
    connection.query(query, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send("Product updated");
      }
    });
  },
  
  DeleteProduct: (req, res) => {
    const query = `DELETE FROM products WHERE id=${req.params.id}`;
    connection.query(query, (err, result) => {
      err ? res.status(500).send(err) : res.status(200).send("product deleted");
    });
  },
  AddToCard: ((req, res) => {
  
    const query = `UPDATE products SET check_add_or_not=${req.body.updateCheck} WHERE id=${req.params.id}`
    connection.query(query, (err, result) => {
       err ? res.status(500).send(err) : res.status(201).send("product added")
    })
  }),
  getProductadded:((req,res)=>{
    const query = 'SELECT * FROM products WHERE check_add_or_not = 1';
    connection.query(query, (error, results) => {
      error ? res.status(500).send(error):res.status(200).send(results)
    })
  }),
  UpdateStockquantity:((req, res) => {
  console.log(req.body,req.params.id)
  const query = `UPDATE products SET stockquantity = ${req.body.stockQuantity} WHERE id =${req.params.id}`;

  connection.query(query,(error, results) => {
    if (error) {
      console.error('Error updating stock quantity:', error);
      return res.status(500).json({ error: 'Failed to update stock quantity' });
    }
    return res.json({ message: 'Stock quantity updated successfully' });
  });
  })
}

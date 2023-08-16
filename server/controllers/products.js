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
  CreateOrderItems:((req,res)=>{
    console.log(req.body,'hello')
    const orderItems = req.body;

    if (!orderItems || !Array.isArray(orderItems) || orderItems.length === 0) {
      return res.status(400).json({ error: 'Invalid order items data' });
    }
  
    const insertQuery = 'INSERT INTO order_items (total_amount, product_id, quantity, price_per_unit, total_price) VALUES ?';
    const values = orderItems.map(item => [
      item.total_amount,
      item.id,
      item.quantity,
      item.price,
      item.total_price
    ]);
  
    // Update quantityinstock in products table
    const updateQuery = 'UPDATE products SET quantity_in_stock = quantity_in_stock - ? WHERE id = ?';
  
    connection.beginTransaction(err => {
      if (err) {
        console.error('Transaction error: ', err);
        return res.status(500).json({ error: 'An error occurred while processing the request' });
      }
  
      connection.query(insertQuery, [values], (insertErr, insertResult) => {
        if (insertErr) {
          connection.rollback(() => {
            console.error('Insert error: ', insertErr);
            return res.status(500).json({ error: 'An error occurred while processing the request' });
          });
        }
  
        const updatePromises = orderItems.map(item => {
          return new Promise((resolve, reject) => {
            connection.query(updateQuery, [item.quantity, item.id], (updateErr, updateResult) => {
              if (updateErr) {
                reject(updateErr);
              } else {
                resolve(updateResult);
              }
            });
          });
        });
  
        Promise.all(updatePromises)
          .then(() => {
            connection.commit(commitErr => {
              if (commitErr) {
                connection.rollback(() => {
                  console.error('Commit error: ', commitErr);
                  return res.status(500).json({ error: 'An error occurred while processing the request' });
                });
              }
              return res.status(200).json({ message: 'Order items created successfully' });
            });
          })
          .catch(updateErr => {
            connection.rollback(() => {
              console.error('Update error: ', updateErr);
              return res.status(500).json({ error: 'An error occurred while processing the request' });
            });
          });
      });
    });
  })
}

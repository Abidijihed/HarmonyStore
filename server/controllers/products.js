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
  CreateOrderItems: async (req, res,infoorder) => {
    const orderItems = req.body.data?req.body.data:infoorder.data;
    const paymentType = req.body.paymenttype?req.body.paymenttype:infoorder.paymentType;
    const user_id = req.body.id?req.body.id:infoorder.id;
    const liverison=req.body.liverison?req.body.liverison:infoorder.liverison
  
    if (!orderItems || !Array.isArray(orderItems) || orderItems.length === 0) {
      return res.status(400).json({ error: 'Invalid order items data' });
    }
  
    const insertQuery = 'INSERT INTO order_items (total_amount, product_id, quantity, price_per_unit, total_price) VALUES ?';
    const values = orderItems.map((item) => [
      item.total_amount>200?item.total_amount:item.total_amount+liverison,
      item.id,
      item.quantity,
      item.price,
      item.total_price,
    ]);
  
    // Update quantityinstock in products table
    const updateQuery = 'UPDATE products SET quantity_in_stock = quantity_in_stock - ? WHERE id = ?';
  
    connection.beginTransaction((err) => {
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
  
        const updatePromises = orderItems.map((item) => {
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
            const insertOrderQuery = 'INSERT INTO orders (user_id, order_items_id, payement_done, status) VALUES (?, ?, ?, ?)';
            const paymentDone = paymentType === true ? 1 : 0;
  
            const insertedOrderItemId = insertResult.insertId;
  
            const orderInsertPromises = orderItems.map(() => {
              return new Promise((resolve, reject) => {
                connection.query(
                  insertOrderQuery,
                  [user_id, insertedOrderItemId, paymentDone, 'pending'],
                  (orderErr, orderResult) => {
                    if (orderErr) {
                      reject(orderErr);
                    } else {
                      resolve(orderResult);
                    }
                  }
                );
              });
            });
  
            Promise.all(orderInsertPromises)
              .then(() => {
                connection.commit((commitErr) => {
                  if (commitErr) {
                    connection.rollback(() => {
                      console.error('Commit error: ', commitErr);
                       res.status(500).json({ error: 'An error occurred while processing the request' });
                    });
                  }
                   res.status(200).send({ message: 'Order items and orders created successfully' });
                });
              })
              .catch((orderInsertErr) => {
                connection.rollback(() => {
                  console.error('Order insert error: ', orderInsertErr);
                   res.status(500).json({ error: 'An error occurred while processing the request' });
                });
              });
          })
          .catch((updateErr) => {
            connection.rollback(() => {
              console.error('Update error: ', updateErr);
               res.status(500).json({ error: 'An error occurred while processing the request' });
            });
          });
      });
    });
  },

  GetoneProduct:((req,res)=>{
    const query=`select * from products where id=${req.params.id}`
    connection.query(query,(err,result)=>{
      err ? res.status(500).send(err):res.status(200).send(result)
    })
  }),
  GetUserOrder: ((req, res) => {
    const userId = req.params.id; // Assuming you're passing the userId in the URL parameters
    const query = `
      SELECT
        p.product_name,
        oi.total_amount,
        oi.quantity,
        oi.price_per_unit,
        oi.total_price,
        o.payement_done,
        o.status
      FROM
        products p
      JOIN
        order_items oi ON p.id = oi.product_id
      JOIN
        orders o ON oi.id = o.order_items_id
      WHERE
        o.user_id = ?
    `;
  
    connection.query(query, [userId], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  }),
  GetAllOrderUsers:((req,res)=>{
    const query=`
    SELECT
  p.product_name,
  oi.total_amount,
  oi.quantity,
  oi.price_per_unit,
  oi.total_price,
  o.payement_done,
  o.status,
  o.id AS order_id,
  u.FirstName,
  u.Email,
  u.id AS user_id
FROM
  products p
JOIN
  order_items oi ON p.id = oi.product_id
JOIN
  orders o ON oi.id = o.order_items_id
JOIN
  users u ON o.user_id = u.id`

    connection.query(query,(err,result)=>{
      err ? res.status(500).send(err) : res.status(200).send(result)
    })
  }),
  updateOrderStatus :  (req, res) => {
    const orderId = req.params.id;
    const newStatus = req.body.newStatus; // Make sure you have this value in the request body
  
    try {
      const updateQuery = 'UPDATE orders SET status = ? WHERE id = ?';
       connection.query(updateQuery, [newStatus, orderId]);
  
      res.status(200).json({ message: 'Order status updated successfully' });
    } catch (error) {
      res.status(500).send({ error: 'An error occurred while updating the order status' });
    }
  },
  AddImages:((req,res)=>{
    const query=`insert into product_images (product_image,products_id) values("${req.body.product_image}",${req.body.products_id})`
    connection.query(query,(err,result)=>{
      err ? res.status(500).send(err) : res.status(200).send("image added")
    })
  }),
  getimages:((req,res)=>{
    const query=`select * from product_images where products_id=${req.params.id}`
    connection.query(query,(err,result)=>{
      err ? res.status(500).send(err) : res.status(200).send(result)
    })
  }),
  deleteimages:((req,res)=>{
    const query=`delete from product_images where id=${req.params.id}`
    connection.query(query,(err,result)=>{
      err ? res.status(500).send(err) : res.status(200).send('image deleted')
    })
  }),
  updateimages:((req,res)=>{
    const query=`update product_image set product_image="${req.body.product_image}" where id=${req.params.id}`
    connection.query(query,(err,result)=>{
      err ? res.status(500).send(err) : res.status(200).send('image updated')
    })
  }),
  SEARCHSEG:((req, res) => {
    const searchTerm = req.query.q; // Get the search query from the request query parameters
  
    // Construct the SQL query to search for products by name or description
    const query = `SELECT * FROM products WHERE product_name LIKE ? OR description LIKE ?`;
    const searchValue = `%${searchTerm}%`;
  
    // Execute the query with the search term
    connection.query(query, [searchValue, searchValue], (error, results) => {
      if (error) {
        console.error('Error searching for products: ' + error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json(results);
      }
    })
  })
  
}

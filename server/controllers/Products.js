const {connection}=require("../dataBaseConfig/config")

module.exports={
    CreateProduct:((req,res)=>{
        const query = `INSERT INTO products(product_name,description,Origin_price,quantity,Promo_price,reference, product_image,availibility,catigory,check_add_or_not) VALUES("${req.body.product_name}","${req.body.description}",${req.body.Origin_price},${req.body.quantity},${req.body.Promo_price},"${req.body.reference}","${req.body.product_image}","${req.body.availibility}","${req.body.catigory}",${false})`;
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
        var {
          product_name,
          description,
          Origin_price,
          quantity,
          Promo_price,
          reference,
          product_image,
          availibility,
          catigory,
        } = req.body;
    
        const query = `UPDATE products SET product_name="${product_name}",description="${description}",Origin_price="${Origin_price}",quantity="${quantity}",Promo_price="${Promo_price}",reference="${reference}",product_image="${product_image}",availibility="${availibility}",catigory="${catigory}" WHERE id=${req.params.id}`;
        connection.query(query, (err, result) => {
          err ? res.status(500).send(err) : res.status(201).send("product updated");
        });
      },
      DeleteProduct: (req, res) => {
        const query = `DELETE FROM products WHERE id=${req.params.id}`;
        connection.query(query, (err, result) => {
          err ? res.status(500).send(err) : res.status(200).send("product deleted");
        });
      },

}
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
function ValidateOrder({ show, handleClose }) {
  const [totalPrice, setTotalPrice] = useState(0); // State to hold the total price
  const [products, setProducts] = useState([]); // State to hold the products

  const fetchProducts = () => {
    axios.get("http://localhost:5700/api/get/product/added")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  useEffect(() => {
    if(show){
      fetchProducts()

    }
  }, [show]);
 

  const handleQuantityChange = (productId, quantity) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity };
      }
      return product;
    });
    setProducts(updatedProducts);
    calculateTotalPrice(updatedProducts);
  };

  const calculateTotalPrice = (products) => {
    const totalPrice = products.reduce(
      (total, product) =>
        total + product.quantity * (product.Promo_price > 0 ? product.Promo_price : product.Origin_price),
      0
    );
    setTotalPrice(totalPrice);
  };
  const handleCheckout = () => {
    // Make an API call to update the stock quantity of each product
    const updatePromises = products.map((product) => {
      return axios.put(`http://localhost:5700/api/update/Stockquantity/${product.id}`, {
        stockQuantity: product.stockquantity - product.quantity,
      });
    });

    Promise.all(updatePromises)
      .then(() => {
        console.log("Stock quantities updated successfully");
        handleClose();
      })
      .catch((error) => {
        console.error("Error updating stock quantities:", error);
        // Handle error or show an error message to the user
      });
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {products.map((product) => (
            <div key={product.id}>
              <h4>{product.product_name}</h4>
              <p>Price: {product.Promo_price>0?product.Promo_price:product.Origin_price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>peace_price: {product.Promo_price>0?product.quantity*product.Promo_price:product.quantity*product.Origin_price}</p>
              <Button
                variant="outline-secondary"
                onClick={() =>
                  handleQuantityChange(product.id, product.quantity>1?product.quantity - 1:product.quantity=1)
                }
              >
                -
              </Button>
              <Button
                variant="outline-secondary"
                onClick={() =>
                  handleQuantityChange(product.id, product.quantity + 1)
                }
              >
                +
              </Button>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <p>Total Price: {totalPrice}</p>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCheckout}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ValidateOrder;

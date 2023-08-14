import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
function ValidateOrder({ show, handleClose }) {
  const navigate=useNavigate()
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const fetchProductsFromLocalStorage = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setProducts(cartItems);
    calculateTotalPrice(cartItems);
  };

  useEffect(() => {
    if (show) {
      fetchProductsFromLocalStorage();
    }
  }, [show]);

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setProducts(updatedProducts);
    calculateTotalPrice(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };

  const calculateTotalPrice = (products) => {
    const totalPrice = products.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
    setTotalPrice(totalPrice);
  };

  const handleCheckout = () => {
    // Update stock quantities if needed
    navigate("/checkout")
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {/* Modal content */}
        {products.map((product) => (
          <div key={product.id} style={{justifyContent:"center",display:"flex",flexWrap:"wrap"}}>
            <Card style={{ width: "16rem" , height: "320px"}}>
              <Card.Img variant="top" src={product.image_url} style={{height: "150px",width: "255px"}} />
                  <Card.Body>
                <Card.Title>{product.product_name}</Card.Title>
                <Card.Text>
                  <p>Price: {product.price}</p>
                </Card.Text>
                <span>Quantity</span>
               <div style={{display:"flex"}}>
               <Button
                  variant="outline-secondary"
                  onClick={() =>
                    handleQuantityChange(
                      product.id,
                      product.quantity > 1
                        ? product.quantity - 1
                        : product.quantity
                    )
                  }
                >
                  -
                </Button>
                <p>{product.quantity}</p>
                <Button
                  variant="outline-secondary"
                  onClick={() =>
                    handleQuantityChange(product.id, product.quantity + 1)
                  }
                >
                  +
                </Button>
               </div>
               <div>
               Subtotal: {product.quantity * product.price}
               </div>
              </Card.Body>
            </Card>
          </div>
        ))}
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

import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ValidateOrder({ show, handleClose }) {
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
      (total, product) =>
        total +
        product.quantity * product.price,
      0
    );
    setTotalPrice(totalPrice);
  };

  const handleCheckout = () => {
    // Update stock quantities if needed
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {/* Modal content */}
        {products.map((product) => (
          <div key={product.id}>
            {console.log(typeof(product.Promo_price),typeof(product.quantity),typeof(product.Promo_price))}
            <h4>{product.product_name}</h4>
            <p>Price: {product.price}</p>
            
            <p>Subtotal: {product.quantity * product.price}</p>
            <Button
              variant="outline-secondary"
              onClick={() =>
                handleQuantityChange(product.id, product.quantity > 1 ? product.quantity - 1 : product.quantity)
              }
            >
              -
            </Button>
            <p>Quantity: {product.quantity}</p>
            <Button
              variant="outline-secondary"
              onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
            >
              +
            </Button>
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

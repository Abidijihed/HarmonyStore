import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
function ValidateOrder({ show, handleClose }) {
  const [products, setProducts] = useState([]); // State to hold the products
  const [totalPrice, setTotalPrice] = useState(0); // State to hold the total price

  // Function to fetch products from the server
//   const fetchProducts = () => {
//    axios.get("http://localhost:5700/api/get/product/added")
//    .then((res)=>{
//     setProducts(res.data);

//    })
//   };
// useEffect(() => {
//     fetchProducts()
// }, []);
  // Function to handle quantity change
  const handleQuantityChange = (productId, quantity) => {
    axios.get("https://www.harmonystore01.com/api/get/product/added")
    .then((res)=>{
    // Update the quantity of the product in the state
    const updatedProducts = res.data.map((product) => {
      if (product.id === productId) {
       
        return { ...product, quantity };
      }
      return product;
    });
    setProducts(updatedProducts);
    calculateTotalPrice(updatedProducts);
})
  };
useEffect(()=>{
    handleQuantityChange()
},[])
  // Function to calculate the total price
  const calculateTotalPrice = (products) => {
    const totalPrice = products.reduce(
      (total, product) => total + product.quantity * (product.Promo_price>0?product.Promo_price:product.Origin_price),
      0
    );
    setTotalPrice(totalPrice);
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
              <p>peace_price: {product.Promo_price>0?product.quantity*product.Promo_price:product.quantity*product.Promo_price}</p>
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
          <Button variant="primary" onClick={handleClose}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ValidateOrder;

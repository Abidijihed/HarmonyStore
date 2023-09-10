import React, { useEffect, useState } from 'react';
import { Button, Divider } from '@material-ui/core';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import './StepOneValidateOrder.css'; // Import your CSS stylesheet

function StepOneValidateOrder({ handleNext }) {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const fetchProductsFromLocalStorage = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setProducts(cartItems);
    calculateTotalPrice(cartItems);
  };

  useEffect(() => {
    if (products) {
      fetchProductsFromLocalStorage();
    }
  }, [products]);

  const handelproductorder = () => {
    const updatedProducts = products.map((product) => {
      const updatedTotalPrice = product.quantity * product.price;
      return {
        ...product,
        total_amount: totalPrice,
        total_price: updatedTotalPrice,
      };
    });

    setProducts(updatedProducts);
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
    handleNext();
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setProducts(updatedProducts);
    calculateTotalPrice(updatedProducts);
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
  };

  const calculateTotalPrice = (products) => {
    const totalPrice = products.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
    setTotalPrice(totalPrice);
  };

  const handleRemoveProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    calculateTotalPrice(updatedProducts);
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Panier</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th className="produit-column">Produit</th>
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image_url} alt={product.name} className="product-image" />
              </td>
              <td>{product.name}</td>
              <td>
                {product.price} {product.currency}
              </td>
              <td>
                <Button
                  variant="outlined"
                  onClick={() =>
                    handleQuantityChange(
                      product.id,
                      product.quantity > 1 ? product.quantity - 1 : product.quantity
                    )
                  }
                >
                  -
                </Button>{' '}
                {product.quantity}{' '}
                <Button
                  variant="outlined"
                  onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                >
                  +
                </Button>
              </td>
              <td>
                {product.quantity * product.price} {product.currency}
              </td>
              <td>
                <button
                  style={{ background: 'none', border: 'none' }}
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  <AiOutlineDelete style={{ fontSize: '20px', color: 'red' }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-total">
        Prix Total: {totalPrice} {products[0]?.currency}
      </div>

      <div className="cart-buttons">
        <Button
          className="continue-button"
          onClick={() => navigate('/products')}
        >
          Continuez Votre Achat
        </Button>
        <Button
          className="confirm-button"
          onClick={handelproductorder}
        >
          Confirmer Votre Achat
        </Button>
      </div>
    </div>
  );
}

export default StepOneValidateOrder;

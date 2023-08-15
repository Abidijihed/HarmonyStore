import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from '@material-ui/core';

function StepOneValidateOrder() {
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
  
    const fetchProductsFromLocalStorage = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setProducts(cartItems);
      calculateTotalPrice(cartItems);
    };
  
    useEffect(() => {
      if (products) {
        fetchProductsFromLocalStorage();
      }
    }, [products]);
  
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
    }
  
  return (
    <>
    {products.map((product)=>{
        return(
        <>
        <Row className="justify-content-center">

        <Col xs={12} md={6} lg={4} className="mb-3"> 
            <img src={product.image_url} style={{width:"400px",height:"300px"}}/> 
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-3">
          <div className="text-center">
            <h4>{product.name}</h4>
            <h3>{product.Product_material}</h3>
            </div>
            <div style={{marginTop:"15px",color:"red"}} className="text-center">
                <span>{product.currency}{" "}{product.price}.00</span><br/>
            </div>
           <div style={{float: "right",marginTop: "33px"}}>
              <span style={{margin:"0% 0% 0% 35%"}}>Quantity</span>
                 <div style={{display:"flex",marginLeft:"5%"}}>
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
                  <p style={{margin:"10px",fontFamily:"sans-serif",fontSize:"15px"}}>{product.quantity}</p>
                  <Button
                    variant="outline-secondary"
                    onClick={() =>
                      handleQuantityChange(product.id, product.quantity + 1)
                    }
                  >
                    +
                  </Button>
                 </div>
           </div>
          
        </Col>
        
      </Row>
      
      </>)
    })}
         <div>
            <Button>Ajouter Produit</Button>
            <Button>Confirmer Votre Achat</Button>
          </div>
    </>
  );
}

export default StepOneValidateOrder;

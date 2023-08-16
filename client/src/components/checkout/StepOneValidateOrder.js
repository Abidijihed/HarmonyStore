import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from '@material-ui/core';
import axios from 'axios';

function StepOneValidateOrder({handleNext}) {
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
    const handelproductorder = () => {
      const updatedProducts = products.map(product => {
        const updatedTotalPrice = product.quantity * product.price;
        return {
          ...product,
          total_amount: totalPrice,  // Set total_amount for the order
          total_price: updatedTotalPrice
        };
      });
    
      // Update the products array with calculated values
      setProducts(updatedProducts);
    
      // Save the updated products array to local storage
      localStorage.setItem('cart', JSON.stringify(updatedProducts));
      const data=JSON.parse(localStorage.getItem('cart'))
      axios.post('https://www.harmonystore01.com/api/createOrderItems',data)
      .then((res)=>{
        if(res.data.message==="Order items created successfully"){
          handleNext()
        }
      })
    }
  return (
    <>
    {products.map((product)=>{
        return(
        <>
        <Row className="justify-content-center">

        <Col xs={12} md={6} lg={4} className="mb-3" style={{border:"1px solid",margin:"2px"}}id='stepone' > 
            <img src={product.image_url} style={{width:"100%",height:"300px"}}/> 
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-3" style={{padding:"20px",border:"1px solid",margin:"2px"}} id='stepone1'>
          <div className="text-center">
            <h4>{product.name}</h4>
            <h3>{product.Product_material}</h3>
            </div>
            <div style={{marginTop:"15px",color:"#B76E79",fontWeight:700}} className="text-center">
                <span>Prix:{" "}{product.price}{" "}{product.currency}</span><br/>
            </div>
           <div style={{float: "right",marginTop: "33px"}}>
              <span style={{margin:"0% 0% 0% 35%"}}>Quantity</span>
                 <div style={{display:"flex",marginLeft:"5%"}}>
                 <Button
                 style={{background:"#708090",color:"white"}}
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
                  <h2 style={{margin:"10px",fontWeight: 700}}>{product.quantity}</h2>
                  <Button
                  style={{background:"#708090",color:"white"}}
                    variant="outline-secondary"
                    onClick={() =>
                      handleQuantityChange(product.id, product.quantity + 1)
                    }
                  >
                    +
                  </Button>
                 </div>
           </div>
           <div style={{float: "left",marginTop: "60px",color:"#B76E79",fontWeight:700 }}>
               Subtotal:{" "}{product.quantity * product.price}{" "}{product.currency}
               </div>
          
        </Col>
        
      </Row>
      
      </>)
    })}
         <div style={{display:"flex",justifyContent:"space-around"}}>
            <Button style={{backgroundColor:"#708090", border:"none",borderRadius:"3%",padding:"5px"}}>Ajouter Produit</Button>
            <Button style={{backgroundColor:"#708090", border:"none",borderRadius:"3%",padding:"5px"}} onClick={handelproductorder} >Confirmer Votre Achat</Button>
          </div>
          <div style={{color:"#B76E79",fontWeight:900,display:"flex",justifyContent:"center",fontSize:"20px"}}>
            Pix Total:{" "}{totalPrice}{" "}{products[0]?.currency}
          </div>
    </>
  );
}

export default StepOneValidateOrder;

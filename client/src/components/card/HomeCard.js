import React from "react";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
export default function HomeCard({product}) {
  const navigate=useNavigate()
  return (
   <div>
     <Card style={{ width: '18rem',cursor:'pointer' }} onClick={()=>navigate(`/productinfo/${product?.id}`)} >
    <Card.Img variant="top" src={product.image_url} style={{height: "234px"}}/>
    <Card.Body>
      <Card.Title>{product.product_name}</Card.Title>
      <Card.Text>
      {product.description}
      </Card.Text>
     <Card.Text style={{display:"flex",justifyContent:'center'}}>
     {product.price_promo>0?<span style={{color: "red",textDecoration:"line-through",}}>{product.price}{" "} TND</span>:null}<br/>
          Prix: {product.price_promo>0?product.price_promo: product.price}{" "}TND
     </Card.Text>
     <Card.Text style={{display:"flex",justifyContent:'center'}}>
     {product.quantity_in_stock>=1?<span style={{color: "green"}}>En Stock</span>:<span style={{color: "red"}}>Épuisé</span>}<br/>
          
     </Card.Text>
    </Card.Body>
  </Card>
  </div>
        
  );
}

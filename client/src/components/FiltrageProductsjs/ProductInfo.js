import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Add_images, get_images, get_one_product } from '../../redux/action/ProductAction';
import { BiCartAdd } from 'react-icons/bi';
import axios from 'axios';
import { Col, Row } from 'reactstrap';
import { Typography } from '@material-ui/core';
import { get_current } from '../../redux/action/UserAction';

export default function ProductInfo({getlen}) {
  const [productImage, setProductImage] = useState([]);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate=useNavigate()
  useEffect(() => {
    dispatch(get_one_product(id));
  }, [dispatch, id]);
  useEffect(() => {
      const id = localStorage.getItem("id");
        dispatch(get_current(id))
    }, [dispatch]);
    
    const user=useSelector((state)=>state.UserReducer.users)
  const oneproduct = useSelector((state) => state.UserReducer.oneproduct);
  useEffect(() => {
    dispatch(get_images(oneproduct?.id));
  }, [dispatch]);
  const images1=useSelector((state)=>console.log(state.UserReducer))
  // State to track the currently selected thumbnail
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    setSelectedThumbnail(index);
  };
  const images = [
    'https://i.pinimg.com/236x/b0/2a/26/b02a26627db3d8c26c53d4823d1b0b59.jpg',
    'https://i.pinimg.com/564x/14/27/01/142701ebdf4690c97a301efedf606213.jpg',
    'https://i.pinimg.com/564x/42/d8/9f/42d89f4064254bea9cb2498df4bc7126.jpg',
  ];
  const [priceCurrency, setPriceCurrency] = useState("TND");
  const [exchangeRate, setExchangeRate] = useState(1);
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/TND"
        );
        const rates = response.data.rates;
        const selectedRate = rates[priceCurrency];
        setExchangeRate(selectedRate);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRate();
  }, [priceCurrency]);
  const convertCurrency = (price, currency) => {
    const convertedPrice = price * exchangeRate;
    return convertedPrice.toFixed(2);
  };
  const handleAddToCart = () => {

    const convertedPrice =
      priceCurrency === "TND"
        ? oneproduct?.price_promo > 0
          ? oneproduct?.price_promo
          : oneproduct?.price
        : convertCurrency(
            oneproduct?.price_promo > 0 ? oneproduct?.price_promo : oneproduct?.price,
            priceCurrency
          );
    const cartItem = {
      id: oneproduct?.id, // Replace with the actual ID of the oneproduct
      name: oneproduct?.product_name,
      image_url:oneproduct?.image_url,
      Product_material:oneproduct?.Product_material,
      price: convertedPrice,
      currency: priceCurrency, // Store the selected currency
      quantity: 1, // Default quantity
    };

    // Get existing cart from local storage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    // Check if the product is already in the cart
    const existingCartItem = existingCart.find((item) => item.id === cartItem.id);

    if (existingCartItem) {
      // If the product is already in the cart, update its quantity
      existingCartItem.quantity += 1;
    } else {
      // If the product is not in the cart, add it to the cart
      existingCart.push(cartItem);
    }

    // Store the updated cart in local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Dispatch an action to update the cart in Redux state if needed
      getlen()
    // You can also provide user feedback that the product was added to the cart
    // For example, show a notification or change the color of the cart icon
  };
  const handleCurrencyChange = (currency) => {
    setPriceCurrency(currency);
  };
  const handleAddimage= async(event) => {
    // event.preventDefault();
    const formData = new FormData();
    formData.append("file", productImage);
    formData.append("upload_preset", "HarmonyStore");
   await axios.post("https://api.cloudinary.com/v1_1/dij3lejgg/upload", formData)
    .then((res)=>{
     dispatch(Add_images(res.data.secure_url,oneproduct?.id))
    })}
  return (

    <div style={{ margin: '10% 5% 5% 5%' }}>
      <Row>
        <Col sm={8} style={{boxShadow: '2px 4px 4px', padding: '5px' }}>
        <img
            src={oneproduct.image_url}
            alt={oneproduct.product_name}
            style={{
              width: '100%', // Adjust the width as needed
              height: '300px', // Adjust the height as needed
              transition: 'transform 0.2s', // Add smooth transition on hover
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
       {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${oneproduct.product_name} Thumbnail ${index}`}
                onClick={() => handleThumbnailClick(index)}
                style={{
                  width: '80px', // Adjust the width of thumbnails
                  height: '80px', // Adjust the height of thumbnails
                  border: selectedThumbnail === index ? '2px solid blue' : 'none',
                  margin: '8px',
                  cursor: 'pointer',
                }}
              />
            ))}
        </Col>
        <Col sm={4} id="productinfoo">
        
        <div style={{ textAlign: 'center' }}>
          <h1>{oneproduct.product_name}</h1>
          <p>{oneproduct.description}</p>
         
          
          <Typography style={{fontSize:"14px"}} component="div" >
          {oneproduct.price_promo>0?<span style={{color: "red",textDecoration:"line-through",}}>{convertCurrency(oneproduct.price)}{" "}{priceCurrency}</span>:null}<br/>
          prix: {convertCurrency(oneproduct.price_promo>0?oneproduct.price_promo: oneproduct.price, priceCurrency)}{" "}
          {priceCurrency}
        </Typography>
        
          <button
          className="changecurency"
          onClick={() => handleCurrencyChange("USD")}
        >
          USD
        </button>

        <button
          className="changecurency"
          onClick={() => handleCurrencyChange("EUR")}
        >
          EUR
        </button>

        <button
          className="changecurency"
          onClick={() => handleCurrencyChange("TND")}
        >
          TND
        </button>
        </div>
        </Col>
        <Row>
          <Col style={{display:'flex',justifyContent:'center',marginTop:'15px'}}>
          <button onClick={()=>navigate('/products')} style={{ border: "none", marginLeft:"4%", background: "#708090",
        padding: "2px",
        borderRadius: "3%" }} >Continue Shopping</button>
          <button
        onClick={handleAddToCart}
        style={{ border: "none", marginLeft:"4%", background: "#708090",
        padding: "2px",
        borderRadius: "3%" }}
      >
        Ajouter au Panier
        <BiCartAdd
          variant="contained"
         
          fontSize="35px"
        />
      </button>
          </Col>
          </Row>
      </Row>
      <input type='file' onChange={(e) => setProductImage(e.target.files[0])}/>
      <button onClick={handleAddimage}>add images</button>
    </div>
   
  );
}

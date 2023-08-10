import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { BiCartAdd } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { add_to_card } from "../../redux/action/ProductAction";
const useStyles = makeStyles({
  root: {
    maxWidth: 180,
    height:270,
    margin: "6px",
  },
  media: {
    height: 0,
    paddingTop: "45.25%", // 16:9
  },
});

const JewelryCard = ({ product ,getlen}) => {
  const classes = useStyles();
  const [priceCurrency, setPriceCurrency] = useState("TND");
  const [exchangeRate, setExchangeRate] = useState(1);

  // const [check, seTcheck] = useState(product.check_add_or_not);
  const dispatch = useDispatch();
  const handleAddToCart = () => {

    const convertedPrice =
      priceCurrency === "TND"
        ? product.price_promo > 0
          ? product.price_promo
          : product.price
        : convertCurrency(
            product.price_promo > 0 ? product.price_promo : product.price,
            priceCurrency
          );

    const cartItem = {
      id: product.id, // Replace with the actual ID of the product
      name: product.product_name,
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
    dispatch(add_to_card(existingCart));
getlen()
    // You can also provide user feedback that the product was added to the cart
    // For example, show a notification or change the color of the cart icon
  };
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

  const handleCurrencyChange = (currency) => {
    setPriceCurrency(currency);
  };

  const convertCurrency = (price, currency) => {
    const convertedPrice = price * exchangeRate;
    return convertedPrice.toFixed(2);
  };
  // const check_add_or_not = product.check_add_or_not;
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image_url}
       
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.product_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography style={{fontSize:"14px"}} component="div" >
          {product.price_promo>0?<span style={{color: "red",textDecoration:"line-through",}}>{product.price}</span>:null}<br/>
          prix: {convertCurrency(product.price_promo>0?product.price_promo: product.price, priceCurrency)}{" "}
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
      </CardContent>
      <button
        onClick={handleAddToCart}
        style={{ border: "none", marginLeft: "38%", background: "none" }}
      >
        Add Product 
        <BiCartAdd
          variant="contained"
         
          fontSize="35px"
        />
      </button>
    </Card>
  );
};

export default JewelryCard;

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { FaDollarSign, FaEuroSign } from "react-icons/fa";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "25px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});

const JewelryCard = ({ product }) => {
  const classes = useStyles();
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

  const handleCurrencyChange = (currency) => {
    setPriceCurrency(currency);
  };

  const convertCurrency = (price, currency) => {
    const convertedPrice = price * exchangeRate;
    return convertedPrice.toFixed(2);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.product_image}
        title="Bijoux"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.product_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" component="div" sx={{ mt: 2 }}>
          Price: {convertCurrency(product.Origin_price, priceCurrency)}{" "}
          {priceCurrency}
        </Typography>

        <FaDollarSign
          sx={{ mt: 2 }}
          onClick={() => handleCurrencyChange("USD")}
          fontSize="25px"
        />
        <FaEuroSign
          sx={{ mt: 2 }}
          fontSize="25px"
          onClick={() => handleCurrencyChange("EUR")}
        />

        <Button variant="contained" sx={{ mt: 2 }}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default JewelryCard;

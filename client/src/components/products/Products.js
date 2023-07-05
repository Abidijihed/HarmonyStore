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
    maxWidth: 335,
    margin: "6px",
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
  const [check, seTcheck] = useState(product.check_add_or_not);
  const dispatch = useDispatch();
  const handeladdtocard = (id) => {
    const updateCheck = !check;
    dispatch(add_to_card(id, { updateCheck }));
    seTcheck(product.check_add_or_not)
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
  const check_add_or_not = product.check_add_or_not;
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
        onClick={() => handeladdtocard(product.id)}
        style={{ border: "none", marginLeft: "38%", background: "none" }}
      >
        <BiCartAdd
          variant="contained"
          sx={{ mt: 2 }}
          fontSize="35px"
          style={{ color: check_add_or_not === 1 ? "green" : "black" }}
        />
      </button>
    </Card>
  );
};

export default JewelryCard;

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeCard from "./card/HomeCard";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  GiCrystalEarrings,
  GiDiamondRing,
  GiDoorRingHandle,
  GiEmeraldNecklace,
  GiPrimitiveNecklace,
  GiTiara,
  GiWatch,
} from "react-icons/gi";
import VideoBanner from "./carousel/Banner";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "30px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  searchButton: {
    marginLeft: theme.spacing(2),
  },
  comingSoonWrapper: {
    // backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "calc(100vh - 64px)", // minus the height of the navbar
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  comingSoonContent: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    textAlign: "center",
  },
}));
export default function Home({ products,getlen }) {
  const classes = useStyles();
const navigate=useNavigate()
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [Email,setEmail]=useState('')
  const images = [
    'https://i.pinimg.com/236x/b0/2a/26/b02a26627db3d8c26c53d4823d1b0b59.jpg',
    'https://i.pinimg.com/564x/14/27/01/142701ebdf4690c97a301efedf606213.jpg',
    'https://i.pinimg.com/564x/42/d8/9f/42d89f4064254bea9cb2498df4bc7126.jpg',
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
setTimeout(() => {
  nextSlide()
}, 3000);
  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

  //   return () => clearInterval(interval);
  // }, []);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const theme = extendTheme({
    // Your custom theme configuration goes here
  });
const hadelsuscribe=()=>{
  setEmail("")
}
  return (
    <>
      {/* <div id="carousa">
        <DarkVariantExample />
      </div> */}
      <div>
        <VideoBanner />
      </div>
      <div>
        {" "}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "3%",
          }}
        >
          <h1>Bienvenue à HarmonyStore</h1>
        </div>
        <div style={{ marginTop: "30px" }}>
          <Row id="thisRow">
            <Col sm={4} id="category">
              <div>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }} className="categorytitle">
                    Boucles d'oreilles.
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography   onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Dormeuses d'or")}`
                      )
                    } style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Dormeuses d'or
                    </Typography>
                    <Divider />
                    <Typography onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Dormeuses d'argent")}`
                      )
                    } style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                    Dormeuses d'argent
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }} className="categorytitle">
                    Bagues
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography   onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Bagues d'or")}`
                      )
                    } style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Bagues d'or
                    </Typography>
                    <Divider />
                    <Typography onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Bagues d'argent")}`
                      )
                    } style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                    Bagues d'argent
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                     <Typography sx={{ width: "33%", flexShrink: 0 }} className="categorytitle">
                     Couronnes royales
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography   onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Couronnes royales d'or")}`
                      )
                    } style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Couronnes royales d'or
                    </Typography>
                    <Divider />
                    <Typography onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Couronnes royales d'argent")}`
                      )
                    } style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                    Couronnes royales d'argent
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                     <Typography sx={{ width: "33%", flexShrink: 0 }} className="categorytitle">
                     Montres
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography   onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Montres")}`
                      )
                    } style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Montres
                    </Typography>
                    <Divider />
                    <Typography onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Montres")}`
                      )
                    } style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                    Montres
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                  >
                     <Typography sx={{ width: "33%", flexShrink: 0 }} className="categorytitle">
                     Colliers
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography   onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Colliers d'or")}`
                      )
                    } style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Colliers d'or
                    </Typography>
                    <Divider />
                    <Typography onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Colliers d'argent")}`
                      )
                    } style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                    Colliers d'argent
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                  >
                     <Typography sx={{ width: "33%", flexShrink: 0 }} className="categorytitle">
                     Bracelets
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography   onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Bracelets d'or")}`
                      )
                    } style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Bracelets d'or
                    </Typography>
                    <Divider />
                    <Typography onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Bracelets d'argent")}`
                      )
                    } style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                    Bracelets d'argent
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7bh-content"
                    id="panel7bh-header"
                  >
                     <Typography sx={{ width: "33%", flexShrink: 0 }} className="categorytitle">
                    Bagues
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography   onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Bagues d'or")}`
                      )
                    } style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Bagues d'or
                    </Typography>
                    <Divider />
                    <Typography onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Bagues d'argent")}`
                      )
                    } style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                    Bagues d'argent
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Col>
            <Col sm={5}>
            <Carousel>
      {images.map((imageUrl, index) => (
        <div key={index}>
          <img
            src={images[activeIndex]}
            alt={`Image ${index}`}
            style={{ height: '345px' }}
          />
        </div>
      ))}
    </Carousel>
            </Col>
            {/* <Col>
      <img src="https://im2.ezgif.com/tmp/ezgif-2-b07d620f05.gif" alt="GIF" style={{width:'100%',height:'342px',padding:"10px"}} />
    </Col> */}
          </Row>
        </div>
        <div className="promotion">
          <h1 id="promo">Exclusive Products</h1>
          <div className="jewerllyicons">
            <div style={{ display: "block" }}>
              <div className="jewerllypro"  onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Dormeuses d'or")}`
                      )}>
                <GiCrystalEarrings />
              </div>

              <h3
                style={{
                  color: "black",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                Earrings
              </h3>
            </div>
            <div style={{ display: "block" }}>
              <div className="jewerllypro" onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Dormeuses d'or")}`
                      )}>
                <GiDiamondRing />
              </div>
              <h3
                style={{
                  color: "black",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                Rings
              </h3>
            </div>
            <div style={{ display: "block" }}>
              <div className="jewerllypro" onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Dormeuses d'or")}`
                      )}>
                <GiTiara />
              </div>
              <h3
                style={{
                  color: "black",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                Tiaras
              </h3>
            </div>
            <div style={{ display: "block" }}>
              <div className="jewerllypro"onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Dormeuses d'or")}`
                      )}>
                <GiWatch />
              </div>
              <h3
                style={{
                  color: "black",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                Watchs
              </h3>
            </div>
            <div style={{ display: "block" }}>
              <div className="jewerllypro" onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Dormeuses d'or")}`
                      )}>
                <GiEmeraldNecklace />
              </div>
              <h3
                style={{
                  color: "black",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                Necklaces
              </h3>
            </div>
            <div style={{ display: "block" }}>
              <div className="jewerllypro" onClick={() =>
                      navigate(
                        `/product/${encodeURIComponent("Bracelets d'or")}`
                      )}>
                <GiPrimitiveNecklace />
              </div>
              <h3
                style={{
                  color: "black",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                Braclets
              </h3>{" "}
            </div>
          </div>
          <div
            className="row justify-content-center"
            style={{ marginTop: "5%" }}
          >
            <div className="col-12 col-md-5 mb-4">
              <img
                src="https://i.pinimg.com/564x/17/62/6c/17626c0b40da8101e5474f9b6c6ac8f7.jpg"
                alt="Exclusive Products"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-5 position-relative">
              <img
                src="https://i.pinimg.com/564x/43/82/eb/4382ebd52bd2707a92e6d286f42f80d3.jpg"
                alt="Exclusive Products"
                className="img-fluid"
              />
              <span
                id="offsp"
                className="position-absolute top-50 start-50 translate-middle"
              >
                20% OFF
              </span>
              <button
                id="shopbutt"
                className="position-absolute bottom-0 start-50 translate-middle-x"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="productpromotion">
          <h3 id="pep">PRODUIT EN PROMOTION</h3>
        
        <div className="mycardshome">
          {products.map((el) => {
            return (
              <ChakraProvider theme={theme}>
                <HomeCard key={el.id} product={el}getlen={getlen} />
              </ChakraProvider>
            );
          })}
        </div>
        </div>
      </div>

      <div className="card1">
        <div className="image1">
          <img
            src="https://i.pinimg.com/564x/e7/d9/40/e7d940ef5d3b2ca52e359bc78b038d56.jpg"
            alt="img"
          />
        </div>
        <div className="subscribe1">
          <h3 id="title3">
            Découvrez les Dernières Tendances en Bijoux et Accessoires
          </h3>
          <p>
            Restez à la mode avec les tendances en bijoux et accessoires les
            plus en vogue. Abonnez-vous à notre newsletter Bijoux&Accessoires.
          </p>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            autocomplete="off"
          />
          <button type="button" onClick={hadelsuscribe} >Subscribe</button>
        </div>
      </div>
      <Row>
        <Col>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12766.899372957596!2d10.3395141!3d36.8730045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b59295202219%3A0x666111cb4f0596a6!2sharmony%20Store!5e0!3m2!1sfr!2stn!4v1693234238802!5m2!1sfr!2stn"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </Row>

    </>
  );
}

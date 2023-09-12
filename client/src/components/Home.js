import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import HomeCard from "./card/HomeCard";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  GiCrystalEarrings,
  GiDiamondRing,
  GiEmeraldNecklace,
  GiPrimitiveNecklace,
  GiWatch,
} from "react-icons/gi";
import VideoBanner from "./carousel/Banner";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrDeliver } from "react-icons/gr";
import {AiFillGift} from 'react-icons/ai'
import axios from "axios";
import Swal from "sweetalert2";
export default function Home({ products, getlen, search }) {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const theme = extendTheme({
    // Your custom theme configuration goes here
  });
  const hadelsuscribe = () => {
    axios
      .post("https://www.harmonystore01.com/api/newsletter", { Email: Email })
      .then((res) => {
        if (res.data === "user subscribe") {
          Swal.fire({
            position: "center",
            icon: "success",
            title:
              "Bienvenue à notre service d'abonnement ! Nous vous tiendrons informé prochainement avec les dernières actualités.",
            showConfirmButton: false,
            timer: 1500,
          });
          setEmail("");
        }
      });
   
  };
  return (
    <>
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
        <div className="productpromotion">
          <h3 id="pep" style={{ fontFamily: "fantasy", color: "red" }}>
            PRODUIT EN PROMOTION
          </h3>

          <div className="mycardshome">
            {products
              .filter(
                (el) =>
                  el.product_name
                    .toUpperCase()
                    .includes(search.toUpperCase()) ||
                  el.Product_material.toUpperCase().includes(
                    search.toUpperCase()
                  ) ||
                  el.category.toUpperCase().includes(search.toUpperCase())
              )
              .map((el) => {
                return (
                  <ChakraProvider theme={theme}>
                    <HomeCard key={el.id} product={el} getlen={getlen} />
                  </ChakraProvider>
                );
              })}
          </div>
        </div>
        <div
          style={{
            marginTop: "30px",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Row style={{ display: "flex", justifyContent: "center" }} id="infott">
            <Col md={3}>
              <span>
                <GrDeliver style={{ fontSize: "50px" }} />
              </span>
              <h6 style={{ fontFamily: "fantasy" }}>Livraison à domicile</h6>
              <div>Achat plus de 200 TND 100% Gratuites</div>
            </Col>
            <Col md={3}>
              <RiSecurePaymentLine style={{ fontSize: "50px" }} />
              <h6 style={{ display: "flex", fontFamily: "fantasy" }}>
              paiement sécurisé{" "}
              </h6>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: "30px" }}></div>
        <div className="promotion">
          <h1 id="promo">Exclusive Products</h1>
          <div className="jewerllyicons">
            <div style={{ display: "block" }}>
              <div
                className="jewerllypro"
                onClick={() =>
                  navigate(`/product/${encodeURIComponent("Bijoux Femme")}`)
                }
              >
                <GiCrystalEarrings />
              </div>

              <h3
                style={{
                  color: "black",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                Bijoux Femme
              </h3>
            </div>
            <div style={{ display: "block" }}>
              <div
                className="jewerllypro"
                onClick={() =>
                  navigate(`/product/${encodeURIComponent("Bijoux Homme")}`)
                }
              >
                <GiDiamondRing />
              </div>
              <h3
                style={{
                  color: "black",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                Bijoux Homme
              </h3>
            </div>
            <div style={{ display: "block" }}>
              <div
                className="jewerllypro"
                onClick={() =>
                  navigate(`/product/${encodeURIComponent("Montres")}`)
                }
              >
                <GiWatch />
              </div>
              <h3
                style={{
                  color: "black",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                Montres
              </h3>
            </div>
            <div style={{ display: "block" }}>
              <div
                className="jewerllypro"
                onClick={() =>
                  navigate(`/product/${encodeURIComponent("CHICHKHAN")}`)
                }
              >
                <GiEmeraldNecklace />
              </div>
              <h3
                style={{
                  color: "black",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                Chichkhan
              </h3>
            </div>
            <div style={{ display: "block" }}>
              <div
                className="jewerllypro"
                onClick={() =>
                  navigate(`/product/${encodeURIComponent("Bijoux Enfant")}`)
                }
              >
                <GiPrimitiveNecklace />
              </div>
              <h3
                style={{
                  color: "black",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                Bijoux Enfant
              </h3>{" "}
            </div>
            <div style={{ display: "block" }}>
              <div
                className="jewerllypro"
                onClick={() =>
                  navigate(`/product/${encodeURIComponent("Idées Cadeaux")}`)
                }
              >
                <AiFillGift />
              </div>
              <h3
                style={{
                  color: "black",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                Idées Cadeaux
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
              onClick={()=>navigate('/products')}
                id="shopbutt"
                className="position-absolute bottom-0 start-50 translate-middle-x"
              >
                Shop Now
              </button>
            </div>
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
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            autocomplete="off"
          />
          <button id="phonebutt" type="button" onClick={hadelsuscribe}>
            Subscribe
          </button>
        </div>
      </div>
      {/* <Row>
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
      </Row> */}
    </>
  );
}

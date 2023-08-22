import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Typography  from "@mui/material/Typography";

 import {
   FaFacebook,
   FaInstagram,
   FaTiktok,
   FaCcMastercard,
   FaCcVisa,
   FaCcStripe
 } from 'react-icons/fa';
import {RiSecurePaymentLine} from 'react-icons/ri'
 import {BsFillTelephoneFill}from 'react-icons/bs'
 import {AiFillHome,
     AiOutlineMail}from 'react-icons/ai'
     import './App.css'
export default function Footer() {
  return (
    <div className="footer">
         <Row className="justify-content-center">
        <Col xs="auto">
          {/* Social media icons go here */}
          <h1>Social media</h1>
        <div className='socialmedia'>
        <a
        className='socialmmmm'
             href="https://www.facebook.com/HarmonyStore01?mibextid=ZbWKwL"
             target="_blank"
             rel="noopener noreferrer"
           >
             <FaFacebook fontSize="24px" />
           </a>
           <a
           className='socialmmmm'
             href="https://instagram.com/harmony_store01?igshid=MzNlNGNkZWQ4Mg=="
             target="_blank"
             rel="noopener noreferrer"
           >
             <FaInstagram fontSize="24px" />
           </a>
           <a
           className='socialmmmm'
             href="http://tiktok.com/@harmonystore01"
             target="_blank"
             rel="noopener noreferrer"
           >
             <FaTiktok fontSize="24px" />
           </a>
        </div>
        </Col>
      </Row>
      <Row className="justify-content-between align-items-center">
        <Col xs={12} md={4}>
          <h1>Contact</h1>
             <Typography variant="body1" gutterBottom>
           <BsFillTelephoneFill /> +216 54 154 220
         </Typography>
         <Typography variant="body1" gutterBottom>
           <AiOutlineMail /> Malek2013malek@hotmail.fr
         </Typography>
         <Typography variant="body1" gutterBottom>
           <AiFillHome /> Impasse bir sidi tayeb sidi bou said 2026
         </Typography>
          <div className="contact-info">
            {/* Your contact information goes here */}
          </div>
        </Col>
        <Col xs={12} md={4}>
          {/* Middle section */}
          <div className="footer-links">
            {/* Contact Us and About Us links go here */}
            <Typography variant="body1" paragraph>
           <a className='socialmmmm' href="/contact">Contact Us</a>
         </Typography>
         <Typography variant="body1" paragraph>
           <a className='socialmmmm' href="/about">About Us</a>
         </Typography>
          </div>
        </Col>
        <Col xs={12} md={4}>
          {/* Right section */}
          <h2 style={{display:'flex'}}>Payment secure <RiSecurePaymentLine/></h2>
          <div className="payment-methods">
            <div>
            <img className='imagepay' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png' alt='mastercard'/>
            </div>
            <div>
            <img className='imagepay'  src='https://img.freepik.com/icones-gratuites/visa_318-202971.jpg'alt='visa'/>
            </div>
            <div>
            <img   src='https://kapitalis.com/tunisie/wp-content/uploads/2022/10/La-Poste-MasterCard.jpg' alt='e-dinar' />
            </div>
            {/* Payment method icons and secure payment text go here */}
          </div>
        </Col>
      </Row>
    </div>
  );
}


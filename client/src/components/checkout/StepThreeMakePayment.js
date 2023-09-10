import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { get_current } from '../../redux/action/UserAction';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function StepThreeMakePayment() {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const WALLET_ID = '64ccc6d74760b71467c919e9';
  const [receiverWalletId, setReceiverWalletId] = useState(WALLET_ID);
  const [token, setToken] = useState('TND');
  const [datacart, setData] = useState([]); // Initialize datacart as an empty array
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('immediate');
  const [exchangeRate, setExchangeRate] = useState(1);
  const [delevrycharge,setDelevrycharge]=useState(7)

  useEffect(() => {
    const id = localStorage.getItem('id');
    dispatch(get_current(id));
  }, [dispatch]);

  const user = useSelector((state) => state.UserReducer.users);

  useEffect(async() => {
    const data = JSON.parse(localStorage.getItem('cart'));
    // let charge=7

    if (data && data.length > 0) {
      const cartToken = data[0]?.currency || 'TND';
      const response = await axios.get(
      "https://api.exchangerate-api.com/v4/latest/TND"
    );
    const rates = response.data.rates;
    const selectedRate = rates[cartToken];
    setExchangeRate(selectedRate);
      
      let convertedAmount = data[0]?.total_amount>200?data[0]?.total_amount:data[0]?.total_amount+(delevrycharge*selectedRate);

      if (cartToken === 'EUR' || cartToken === 'USD') {
        // charge=charge*100
        convertedAmount *= 100;
      } else if (cartToken === 'TND') {
        // charge=charge*100
        convertedAmount *= 1000;
      }
      // setDelevrycharge(charge)
      setToken(cartToken);
      setAmount(convertedAmount || 0);
      setData(data);
    }
  }, []);
 const handelorder=(paymenttype)=>{
  const id=localStorage.getItem('id')
  const data=JSON.parse(localStorage.getItem('cart'))
  axios.post('https://www.harmonystore01.com/api/createOrderItems',{data,liverison:delevrycharge*exchangeRate,paymenttype,id})
  .then((res)=>{
    if(res.data.message==="Order items and orders created successfully"){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Votre commande a etait envoyer',
        showConfirmButton: false,
        timer: 1500
      })
      
      localStorage.removeItem('cart')
      
      navigate("/monorder")
      setTimeout(() => {
        window.location.reload()
      }, 2000);
    }
  })
 }
  const makepayment = async () => {
    const id=localStorage.getItem('id')
  const data=JSON.parse(localStorage.getItem('cart'))
    try {
      await axios
        .post('https://www.harmonystore01.com/payments/payment', {
          receiverWalletId: receiverWalletId || WALLET_ID,
          token: token,
          amount: amount,
          type: type,
          firstname: user?.FirstName,
          lastname: user?.LastName,
          email: user?.Email,
        },{data,liverison:delevrycharge*exchangeRate,id})
        .then((response) => {
          window.location.href = response.data.payUrl;
        });
        // handelorder(paymenttype)
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  }

  return (
    <div>
    <div className="user-card">
      <h1>{user?.FirstName}</h1>
      <h2>{user?.LastName}</h2>
      <p>Email: {user?.Email}</p>
    </div>
    <div className="product-table">
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price per Unit</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {datacart.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.quantity * product.price}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">Total Amount:</td>
            <td>{datacart[0]?.total_amount}{" "}{token}</td>
          </tr>
          <tr>
            <td colSpan="3">Delivery Charge :</td>
            <td>{datacart[0]?.total_amount>200?"Livraison gratuite":delevrycharge*exchangeRate}{" "}{token}</td>
          </tr>
          <tr>
            <td colSpan="3">Total Payment:</td>
            <td>{datacart[0]?.total_amount>200?datacart[0]?.total_amount:datacart[0]?.total_amount+(delevrycharge*exchangeRate)} {" "}{token} </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="payment-buttons">
    <button onClick={() => makepayment(true)}>Pay Online</button>
  <button onClick={() => handelorder(false)}>Pay a la livraison</button>
    </div>
  </div>
  );
}


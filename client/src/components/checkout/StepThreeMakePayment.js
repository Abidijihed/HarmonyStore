import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { get_current } from '../../redux/action/UserAction';

export default function StepThreeMakePayment() {
  const dispatch = useDispatch();
  const WALLET_ID = '64ccc6d74760b71467c919e9';
  const [receiverWalletId, setReceiverWalletId] = useState(WALLET_ID);
  const [token, setToken] = useState('TND');
  const [datacart, setData] = useState([]); // Initialize datacart as an empty array
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('immediate');

  useEffect(() => {
    const id = localStorage.getItem('id');
    dispatch(get_current(id));
  }, [dispatch]);

  const user = useSelector((state) => state.UserReducer.users);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart'));
    if (data && data.length > 0) {
      const cartToken = data[0]?.currency || 'TND';
      let convertedAmount = data[0]?.total_amount;

      if (cartToken === 'EUR' || cartToken === 'USD') {
        convertedAmount *= 100;
      } else if (cartToken === 'TND') {
        convertedAmount *= 1000;
      }

      setToken(cartToken);
      setAmount(convertedAmount || 0);
      setData(data);
    }
  }, []);

  const makepayment = async () => {
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
        })
        .then((response) => {
          window.location.href = response.data.payUrl;
        });
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  }

  return (
    <div>
      <h1>{user?.FirstName}</h1>
      <h2>{datacart[0]?.total_amount}</h2>
      <button onClick={makepayment}>make payment</button>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

export default function MyOrder() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem('id');
    axios.get('https://www.harmonystore01.com/api/get_user_order/' + id)
      .then((res) => {
        setOrder(res.data);
      });
  }, [order]);

  return (
    <div className="container text-center mt-5">
      <h2>Your Orders</h2>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price Per Unit</th>
            <th>Total Amount</th>
            <th>Payment Done</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {order.reverse().map((item, index) => (
            <tr key={index}>
              <td>{item.product_name}</td>
              <td>{item.quantity}</td>
              <td>{item.price_per_unit}</td>
              <td>{item.total_amount}</td>
              <td>{item.payement_done ? 'Yes' : 'No'}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}


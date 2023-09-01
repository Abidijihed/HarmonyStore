import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import Swal from 'sweetalert2';

export default function UserOrder() {
  const [order, setOrder] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('https://www.harmonystore01.com/api/get_all_users_order');
      setOrder(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  const handleStatusChange = async (id, newStatus) => {
    // Show a confirmation dialog using Swal
    const result = await Swal.fire({
      title: 'Confirm Status Update',
      text: 'Are you sure you want to update the order status?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      try {
        // Send PUT request to update order status
        const response = await axios.put(`/api/update-order-status/${id}`, { newStatus });

        // Show success message
        Swal.fire('Success', 'Order status updated successfully', 'success');
           setTimeout(() => {
            window.location.reload()
           }, 1500);
        // Optionally, you can refresh the data or update the UI accordingly
        // For example: dispatch a Redux action to update the order status
      } catch (error) {
        // Handle error and show error message using Swal
        Swal.fire('Error', 'An error occurred while updating the order status', 'error');
      }
    }
    await fetchOrders();

  };


  return (

    <div className="container text-center mt-5">
        
      <h2>Your Orders</h2>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
          <th>FirstName</th>
          <th>Email</th>
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
            <td>{item.FirstName}</td>
            <td>{item.Email}</td>
              <td>{item.product_name}</td> 
              <td>{item.quantity}</td>
              <td>{item.price_per_unit}</td>
              <td>{item.total_amount}</td>
              <td>{item.payement_done ? 'Yes' : 'No'}</td>
              <td>
              <select
  value={item.status}
  onChange={(e) => handleStatusChange(item.order_id, e.target.value)}
>
  <option value="pending">Pending</option>
  <option value="processing">Processing</option>
  <option value="shipped">Shipped</option>
  <option value="delivered">Delivered</option>
  <option value="canceled">Canceled</option>
</select>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}


import React, { useState } from 'react';
import { Button, Card, CardContent, TextField } from '@material-ui/core';
import axios from 'axios'; // Import Axios
import { useNavigate, useParams } from 'react-router-dom';

function ResetPassword() {
    const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
const {resetToken}=useParams()
  const handleResetPassword = () => {
    // Check if the newPassword and confirmPassword match
    if (newPassword !== confirmPassword) {
      // Handle password mismatch error, display an error message to the user if needed
      console.error('Passwords do not match');
      return;
    }

    // Make an API call to reset the password
    axios.put(`https://www.harmonystore01.com/api/password/reset/${resetToken}`, { newPassword,confirmPassword }) // Adjust the API endpoint and token accordingly
      .then((response) => {
        // Assuming your server returns a success message
        if (response.status === 200) {
          // If the password is successfully reset, you can navigate the user to a login page
          navigate('/login'); // Navigate to the login page or wherever you want
        } else {
          // Handle errors or display a message to the user
          // You can update your UI to show an error message here
        }
      })
      .catch((error) => {
        // Handle errors or display a message to the user
        // You can update your UI to show an error message here
        console.error('Error resetting password:', error);
      });
  };

  return (
    <Card>
      <CardContent>
        <h1 className="text-center">Réinitialisation du mot de passe</h1>
        <TextField
          type="password"
          label="Nouveau mot de passe"
          fullWidth
          margin="normal"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <TextField
          type="password"
          label="Confirmez le mot de passe"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleResetPassword}
        >
          Réinitialiser le mot de passe
        </Button>
      </CardContent>
    </Card>
  );
}

export default ResetPassword;

import React, { useState } from 'react';
import { Button, Card, CardContent, TextField } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true); // State to track email validation
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleResetPasswordRequest = () => {
    // Validate the email before making the API call
    if (!validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }

    // Reset the email validation state
    setIsEmailValid(true);

    // Make an API call to request a password reset email
    axios
      .post('https://www.harmonystore01.com/request-password-reset', { email }) // Adjust the API endpoint accordingly
      .then((response) => {
        // Assuming your server returns a success message with the reset token
        if (response.status === 200) {
          const token = response.data.resetToken; // Get the reset token from the response
          // If the request is successful, navigate the user to the password reset page with the token in the URL
          navigate(`/password-reset/seccess`);
        } else {
          // Handle errors or display a message to the user
          // You can update your UI to show an error message here
        }
      })
      .catch((error) => {
        // Handle errors or display a message to the user
        // You can update your UI to show an error message here
        console.error('Error requesting password reset:', error);
      });
  };

  return (
    <Card>
      <CardContent>
        <h1 className="text-center">Mot de passe oublié ?</h1>
        <p>
          Veuillez entrer une adresse email valide ci-dessous pour recevoir le lien de réinitialisation du mot de passe.
        </p>
        <TextField
          type="email"
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!isEmailValid} // Set error state based on email validation
          helperText={!isEmailValid ? 'Veuillez entrer une adresse email valide.' : ''}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleResetPasswordRequest}
        >
          Envoyer le lien de réinitialisation
        </Button>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          Vous n'avez pas encore de compte ? <Link to="/signup">Inscrivez-vous</Link>
        </p>
      </CardContent>
    </Card>
  );
}

export default ForgetPassword;

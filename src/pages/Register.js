import React, { useState } from 'react';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [Pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePinChange = (event) => {
    setPin(event.target.value);
  }

  const handleConfirmPinChange = (event) => {
    setConfirmPin(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Pin !== confirmPin) {
      alert("Pins do not match!");
      return;
    }
    console.log(`Email: ${email}, Pin: ${Pin}`);
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Pin:
          <input type="Pin" value={Pin} onChange={handlePinChange} />
        </label>
        <br />
        <label>
          Confirm Pin:
          <input type="Pin" value={confirmPin} onChange={handleConfirmPinChange} />
        </label>
        <br />
        <button type="submit">Register</button>
        <div>
        <a href='/'>Login Page</a>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;

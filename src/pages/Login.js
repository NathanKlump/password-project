import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [Pin, setPin] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePinChange = (event) => {
    setPin(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Pin: ${Pin}`);
  }

  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Sign In</h1>
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
        <button type="submit">Sign In</button>
        <div>
        <a href='/register' >Register Page</a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;

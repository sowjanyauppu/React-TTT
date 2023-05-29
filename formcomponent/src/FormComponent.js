import React, { useState } from 'react';

function FormComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateName = () => {
    if (name.trim() === '') {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const validateEmail = () => {
    const emailParts = email.split('@');
    const emailPartsLength = emailParts.length;

    if (emailPartsLength !== 2 || emailParts[0].trim() === '' || emailParts[1].trim() === '') {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateName();
    validateEmail();

    if (name.trim() !== '' && email !== '' && emailError === '') {
      alert(`Name: ${name}\nEmail: ${email}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={validateName}
        />
        {nameError && <span className="error">{nameError}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
        />
        {emailError && <span className="error">{emailError}</span>}
      </div>
      <button type="submit" disabled={name.trim() === '' || email === '' || emailError !== ''}>
        Submit
      </button>
    </form>
  );
}

export default FormComponent;

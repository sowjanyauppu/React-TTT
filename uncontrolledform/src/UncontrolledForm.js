import React, { useRef } from 'react';

function UncontrolledForm() {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageTextareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameValue = nameInputRef.current.value;
    const emailValue = emailInputRef.current.value;
    const messageValue = messageTextareaRef.current.value;

    console.log('Name:', nameValue);
    console.log('Email:', emailValue);
    console.log('Message:', messageValue);

    // Reset the form
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailInputRef} />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" ref={messageTextareaRef}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;

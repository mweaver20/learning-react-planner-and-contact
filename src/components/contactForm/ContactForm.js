import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  duplicate,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label for="name">Name:</label>
        <input type="text"  name="name" value={name} onChange={setName} required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email"  name="email" value={email} onChange={setEmail} required />
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input type="tel"  name="phone" value={phone} onChange={setPhone} required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="Please enter a valid phone number (e.g. xxx-xxx-xxxx)" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};


import React, { useState } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const duplicateCheck = (names) => {
    return new Promise((resolve) => {
      const found = contacts.some(contact => contact.name === names);
      setDuplicate(found);
      console.log("duplicate state:" + duplicate);
      resolve(found);
    });
  };

  const clearForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    console.log("form cleared");
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isDuplicate = await duplicateCheck(name);
      if(!isDuplicate) {
        await addContact(name, phone, email);
        clearForm();
      } else { 
        console.log("Duplicate contact, form not submitted");
      }
    } catch (e) {
      console.error("handleSubmit error: " + e);
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name} 
          setName={handleNameChange}
          phone={phone} 
          setPhone={handlePhoneChange}
          email={email} 
          setEmail={handleEmailChange}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};

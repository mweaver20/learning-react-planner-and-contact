import React from "react";

export const ContactPicker = ({ contacts, value, onChange, name }) => {
  return (
    <select aria-label="contact picker" onChange={onChange} value={value} name={name} >
      <option value={""} key={-1}>Select a contact</option>
      {
        contacts.map((contact, index) => {
          return (
            <option value={contact} key={contact} >{contact}</option>
          );
        })
      }
    </select>

  );
};

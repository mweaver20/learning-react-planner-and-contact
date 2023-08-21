import React, { useMemo, useState, useEffect } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};



export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const [todayString, setTodayString] = useState('');

  useEffect(() => {
    setTodayString(getTodayString());
  }, []);

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <>
      <form onSubmit={handleSubmit} >
      <div>
      <label htmlFor="title">Title:</label>
        <input type="text"  name="title" value={title} onChange={setTitle} required />
      </div>

      <div>
      <label htmlFor="contact">Contact:</label>
        <ContactPicker 
          contacts={contactNames} 
          value={contact} 
          onChange={setContact} 
          name="contacts"/>
      </div>

      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          value={date}
          onChange={setDate}
          min={todayString}
          required
        />
      </div>

      <div>
      <label htmlFor="time">Time:</label>
        <input type="time" value={time} onChange={setTime} required />
      </div>
      <button type="submit">submit</button>
      </form>
    </>
  );
};

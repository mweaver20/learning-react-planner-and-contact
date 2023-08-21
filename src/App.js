import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointment, setAppointment] = useState([]);

  const addContact =  (name, phone, email) => {
    return new Promise((resolve) => {
      const newContact = {
        name: name,
        phone: phone,
        email: email
      };
      setContacts([...contacts, newContact]);
      console.log("new contact created: " + newContact);
      resolve(newContact);
      console.log("resolved");
    })
    
  };

  const createAppointment = (name, contact, date, time) => {
    const appointment = {
      name: name,
      contact: contact,
      date: date,
      time: time
    }
    setAppointment((prev) => [...prev, appointment]);
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

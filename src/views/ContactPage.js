import React from "react";
import { Header } from "../components/Header/Header";
import Contact from "../components/Contact/Contact";
import ContactsForm from '../components/Contact/ContactsForm';
import Map from '../components/Contact/Map';
import { useJsApiLoader } from "@react-google-maps/api";
import { Footer } from "../components/Footer/Footer";

const API_KEY = process.env.REACT_APP_API_KEY

const defaultCenter = {
  lat: 59.955413,
  lng: 30.337844
};

const ContactPage = () => {
  const { isLoaded } = useJsApiLoader ({
    id: 'google-map-script',
    key: API_KEY
});

  return (
    <div>
      <Header />
         <div className='container'>
           <div className="container_contact">
           <h1 className='contact__name'>Контакты</h1>
          <div className="contact__row">
           <div className='contact__items'>
           <Contact />
         </div>
         {isLoaded ? <Map center= {defaultCenter}/> : <h2>Loading</h2>}
          </div>
      <ContactsForm />
           </div>
    </div>
   <Footer/>
  </div>
)};

export default ContactPage;

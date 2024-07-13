import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Concrete from './concretes';
import Home from './home';
import Seat from './seat';
import Banglore from './banglore';
import Kochi from './kochi';
import Sports from './sports';
import Theater from './theater';
import Thismonth from './thismonth';
import Thisweek from './thisweek';
import Nextmonth from './nextmonth';
import Chennai from './chennai';
import PaymentGateway from './paymentgateway';
import Success from './succes';
function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route exact path="/" element={<Home/>} />
   <Route path="/concerets" element={<Concrete/>}/>
   <Route path="/seat" element={<Seat/>}/>
   <Route path="/banglore" element={<Banglore/>}/>
   <Route path="/kochi" element={<Kochi/>}/>
   <Route path="/sports" element={<Sports/>}/>
   <Route path="/theater" element={<Theater/>}/>
   <Route path="/thismonth" element={<Thismonth/>}/>
   <Route path="/thisweek" element={<Thisweek/>}/>
   <Route path="/nextmonth" element={<Nextmonth/>}/>
   <Route path="/chennai" element={<Chennai/>}/>
  
   <Route path="/paymentgateway" element={<PaymentGateway/>}/>
   <Route path="/succes" element={<Success/>}/>




   </Routes>
   </BrowserRouter>
  );
}

export default App;

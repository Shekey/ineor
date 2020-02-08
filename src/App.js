import React from 'react';
import Hero from './components/hero';
import Form from './components/form';
import './scss/_all.scss';

let data = {
  "title":"book your barber",
  "subtitle": "Great Hair Doesn't Happend By Chance. It Happens By Appointment!",
  "subtitleSecondPart": "So Don't Wait And Book Your Appointment Now!",
  "barberTitle": "book your appointment"
}


function App() {
  return (
    <div className="App">
      <Hero title={data.title} subtitle={data.subtitle} subtitleSecondPart={data.subtitleSecondPart}/>
      <div className="main-content">
      <figure>
        <img src="./img/image.jpg" alt="Barber" />
      </figure>
      <Form title={data.barberTitle} />
      </div>
    </div>
  );
}

export default App;

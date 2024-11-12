import React from 'react';
import Home from '../scrolldown/Home';
import TopDestinations from './TopDestinations';
import Contact from '../scrolldown/Contact';


function ScrollDown() {
  return (
    <div className="scroll-down">
      <section id="home" style={{ height: 'auto'}}>
        <Home />
      </section>
      <section id="top-destinations" style={{ height: 'auto' }}>
        <TopDestinations />
      </section>
      <section id="contact" style={{ height: 'auto' }}>
        <Contact />
      </section>
    </div>
  );
}

export default ScrollDown;

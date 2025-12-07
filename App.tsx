import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trend from './components/Trend';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ServiceMenu from './components/ServiceMenu';
import Methodology from './components/Methodology';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Trend />
        <Services />
        <Portfolio />
        <ServiceMenu />
        <Methodology />
        <Booking />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
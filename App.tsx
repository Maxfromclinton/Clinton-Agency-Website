import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialStrip from './components/SocialStrip';
import Trend from './components/Trend';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import BookGallery from './components/BookGallery';
import ServiceMenu from './components/ServiceMenu';
import Methodology from './components/Methodology';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <SocialStrip />
        <Certifications />
        <Trend />
        <Services />
        <Portfolio />
        <BookGallery />
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

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Lecturers } from './components/Lecturers';
import { Program } from './components/Program';
import { Pricing } from './components/Pricing';
import { Partners } from './components/Partners';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Registration } from './components/Registration';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#001B3D] text-white font-sans selection:bg-[#7AA2F7] selection:text-[#001B3D]">
      <Navbar />
      <Hero />
      <About />
      <Lecturers />
      <Program />
      <Pricing />
      <Partners />
      <Testimonials />
      <Gallery />
      <Registration />
      <Footer />
    </div>
  );
}

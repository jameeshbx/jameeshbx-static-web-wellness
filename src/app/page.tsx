import React from 'react';
import { Hero } from "./components/hero"
import { RecommendedSection } from "./components/Recommendedsection"
import Gallery from './components/Gallery';
import Email from './components/Email';
import TestimonialSection from './components/TestimonialSection';
import { CategorySection } from './components/categorysection';
import  CookieConsent  from './components/cookies'


const Home = () => {
  return (
    <div>
      <CookieConsent/>
      <Hero/>
      <CategorySection/>
      <Gallery/>      
      <RecommendedSection/>
      <TestimonialSection/>
      <Email/>
    </div>
  );
};

export default Home;


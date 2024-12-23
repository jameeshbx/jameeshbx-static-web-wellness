import React from 'react';
import { Hero } from "./components/hero"
import { RecommendedSection } from "./components/Recommendedsection"
import Gallery from './components/Gallery';
import Emailsection from './components/Emailsection';
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
     <Emailsection/>
      <TestimonialSection/>
    </div>
  );
};

export default Home;


import React from 'react';
import { Hero } from "./components/hero"
import { RecommendedSection } from "./components/Recommendedsection"
import Gallery from './components/Gallery';

import Testimonial from './components/Testimonial';
import  {CategorySection } from './components/categorysection';


import  CookieConsent  from './components/cookies'
import Emailsection from './components/Emailsection';


const Home = () => {
  return (
    <div>
      <CookieConsent/>
      <Hero/>
      <CategorySection/>
      <Gallery/>      
      <RecommendedSection/>
     <Emailsection/>
      <Testimonial/>
    </div>
  );
};

export default Home;


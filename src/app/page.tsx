import React from 'react';
import { Hero } from "./components/hero"
import Gallery from './components/Gallery';
import Email from './components/Email';
import { CategorySection } from './components/categorysection';

const Home = () => {
  return (
    <div>
      <Hero/>
      <CategorySection/>
      <Gallery/>
      <Email/>
    </div>
  );
};

export default Home;


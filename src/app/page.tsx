import React from 'react';
import { Hero } from "./components/hero"
import Email from './components/Email';
import { CategorySection } from './components/categorysection';

const Home = () => {
  return (
    <div>
      <Hero />
      <CategorySection />
      <Email />
    </div>
  );
};

export default Home;


import React from 'react';

import Feed from '../components/Feed'; // Adjust the import path if necessary
import Particles from "../components/particles";
const Home = () => {
  return (
    <div  >
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in bg-black"
        quantity={300} // Increase the quantity to 300 or any other value you prefer
        speed={0.5} // Increase the speed to 0.5 or any other value you prefer
      />
      <section className="w-full flex-center flex-col ">
        <h1 className='head_text text-center'>
          Discover & Share
          <br className='max-md:hidden' />
          <span className='orange_gradient text-center'> AI-Powered Prompts</span>
        </h1>
        <p className='desc text-center'>
          Prompttop is an open-source AI prompting tool for the modern world to
          discover, create, and share creative prompts
        </p>
      
        <Feed />
        <Particles
            className="absolute inset-0 -z-10 animate-fade-in bg-black"
            quantity={300} // Increase the quantity here as well
            speed={0.5} // Increase the speed here as well
          />
      </section>
    </div>
  );
};

export default Home;
  
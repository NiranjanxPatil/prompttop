import React from 'react';

import Feed from '../components/Feed'; // Adjust the import path if necessary
import Particles from "../components/particles";
const Home = () => {
  return (
   <div>
    <Particles
				className="absolute inset-0 -z-10 animate-fade-in "
				quantity={100}
			/>
   
      <section className="w-full flex-center flex-col ">
        <h1 className='head_text text-center'>
          Discover & Share
          <br className='max-md:hidden' />
          <span className='orange_gradient text-center'> AI-Powered Prompts</span>
        </h1>
        <p className='desc text-center'>
          Promptopia is an open-source AI prompting tool for the modern world to
          discover, create, and share creative promptss
        </p>
      
        <Feed />
        
      </section>
   </div>
  );
};

export default Home;

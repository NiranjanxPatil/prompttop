import React from 'react';

import Feed from '../components/Feed'; // Adjust the import path if necessary
import Particles from "../components/particles";
const Home = () => {
  return (
   <div>
   
   
      <section className="w-full flex-center flex-col ">
        <h1 className='head_text text-center'>
          Discover & Share
          <br className='max-md:hidden' />
          <span className='orange_gradient text-center'> AI-Powered Prompts</span>
        </h1>
        <p className='desc text-center'>
          Promptopia is an open-source AI prompting tool for the modern world to
          discover, create, and share creative prompts
        </p>
      
        <Feed />
        
      </section>
   </div>
  );
};

export default Home;

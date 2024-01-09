import React from 'react';

import Feed from '../components/Feed'; // Adjust the import path if necessary
import Particles from "../components/particles";
const Home = () => {
  <script
        src="https://beamanalytics.b-cdn.net/beam.min.js"
        data-token="cea78beb-0056-47f4-8382-00f1ed721ce1"
        async
      />
  return (
    <div>
      <script
        src="https://beamanalytics.b-cdn.net/beam.min.js"
        data-token="cea78beb-0056-47f4-8382-00f1ed721ce1"
        async
      />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in bg-black"
        quantity={200} 
        speed={1} 
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
          
      </section>
    </div>
  );
};

export default Home;
  
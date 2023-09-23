import React from 'react';
import Layout from '../components/Layout';
import Feed from '../components/Feed'; // Adjust the import path if necessary
import styles from '@styles/background.css';
import Particles from '@components/particles'; // Import the Particles component

const Home = () => {
  return (
    <Layout>
      <section className={`w-full flex-center flex-col ${styles.container}`}>
        <h1 className='head_text text-center'>
          Discover & Share
          <br className='max-md:hidden' />
          <span className='orange_gradient text-center'> AI-Powered Prompts</span>
        </h1>
        <p className='desc text-center'>
          Promptopia is an open-source AI prompting tool for the modern world to
          discover, create, and share creative promptsss
        </p>
        <Feed />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in  bg-slate-900"
          quantity={100}
          
        />
      </section>
    </Layout>
  );
};

export default Home;

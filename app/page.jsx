import React from 'react';
import Layout from '../components/Layout';
import Feed from '../components/Feed'; // Adjust the import path if necessary
import styles from '../styles/background.css';

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
      </section>
    </Layout>
  );
};

export default Home;

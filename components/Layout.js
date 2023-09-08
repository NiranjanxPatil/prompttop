// components/Layout.js

import React from 'react';
import Head from 'next/head';
import styles from '../styles/background.css';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Cool Background App</title>
      </Head>
      <div className={styles}>
        {children}
      </div>
    </>
  );
};

export default Layout;

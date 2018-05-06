import React from 'react';
import styles from './style.scss';
import logo from './logo.svg';

const Main = () => (
  <div className={styles.Main}>
    <div className={styles.MainHeader}>
      <img src={logo} className={styles.AppLogo} alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className={styles.MainIntro}>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default Main;

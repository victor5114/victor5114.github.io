import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

import styles from './index.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <p>
          This React project just works including
          <span className={styles.blueBg}>module</span>
          local styles.
        </p>
        <p>Visit Website in progress ...</p>
      </div>
    );
  }
}

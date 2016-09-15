import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

import styles from './index.scss';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.scroller = typeof document === 'object' &&
      document.getElementsByClassName('container')[0];

    this.state = {
      scroll: (typeof this.scroller === 'object' && this.scroller.scrollTop) || 0,
      height: (typeof document === 'object' && document.documentElement.clientHeight) || 800,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    // console.log(this.scroller);
    this.scroller.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleScroll);
  }

  componentWillUnmount() {
    this.scroller.removeEventListener('scroll', this.handleScroll);
    this.scroller = null;
    window.removeEventListener('resize', this.handleScroll);
  }

  handleScroll() {
    // Should see new state updated when we scroll
    // console.log(this.state);
    if (!this.running) {
      let scrollPos = this.scroller.scrollTop;
      let height = document.documentElement.clientHeight * 2;
      if (scrollPos < height) {
        this.running = true;
        window.requestAnimationFrame(() => {
          this.running = false;
          scrollPos = this.scroller.scrollTop;
          height = document.documentElement.clientHeight;
          this.setState({
            scroll: scrollPos,
            height,
          });
        });
      }
    }
  }

  render() {
    return (
      <div className="innerContent">
        <p>
          Some text with <span className={styles.blueBg}>emphazised</span> span
        </p>
      </div>
    );
  }
}

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

import styles from './index.scss';
import { getHeight } from './utils/window';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.scroller = typeof document === 'object' &&
      document.getElementById('content');

    this.state = {
      scroll: (typeof this.scroller === 'object' && this.scroller.scrollTop) || 0,
      height: (typeof document === 'object' && document.documentElement.clientHeight) || 800,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.scroller = this.scroller.firstChild;
    this.scroller.addEventListener('scroll', this.handleScroll, true);
    window.addEventListener('resize', this.handleScroll, true);
  }

  componentWillUnmount() {
    this.scroller.removeEventListener('scroll', this.handleScroll);
    this.scroller = null;
    window.removeEventListener('resize', this.handleScroll);
  }

  handleScroll() {
    if (!this.running) {
      const h = getHeight();
      let scrollPos = this.scroller.scrollTop;
      let height = h * 2;

      if (scrollPos < height) {
        this.running = true;
        window.requestAnimationFrame(() => {
          this.running = false;
          scrollPos = this.scroller.scrollTop;
          height = getHeight();
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
      <div className={styles.cardSurface} />
    );
  }
}

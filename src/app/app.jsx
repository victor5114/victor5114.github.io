import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

import { getHeight } from './utils/window';
// import { cardMove, l } from './utils/animation';

import './index.scss';

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
      let height = h * 3;

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
    // const ms = this.state.scroll;
    // const s = ms - (isMobile() ? 10 : 50);
    // const hei = this.state.height;
    // var r = prng(1234567890);

    return (
      <div className="content">
        <div className="cardSurface" >
          <div className="card">
            {/* <div className="cardFront" style={cardMove(ms, hei)}>
              <svg className="logo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124 142">
                <g transform="translate(562, 71)">
                  <g fill="#FF744C">
                    {/* L
                    <rect opacity="0.70" style={l(s - 30)} x="-562" y="37" width="94" height="32" />
                  </g>
                </g>
              </svg>
            </div> */}
          </div>
        </div>
        <div className="section_2">
          <span />
        </div>
      </div>
    );
  }
}

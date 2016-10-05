// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

import { getHeight, isMobile } from './utils/window';
import {
    cardMove,
    cardMoveBack,
    cardMoveEdge,
    prng,
    h, v, a,
} from './utils/animation';

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
      const height = getHeight();
      let scrollPos = this.scroller.scrollTop;
      let heightNormalize = height * 2;

      if (scrollPos < heightNormalize) {
        this.running = true;
        window.requestAnimationFrame(() => {
          this.running = false;
          scrollPos = this.scroller.scrollTop;
          heightNormalize = getHeight();
          this.setState({
            scroll: scrollPos,
            heightNormalize,
          });
        });
      }
    }
  }

  render() {
    const ms = this.state.scroll;
    const s = ms - (isMobile() ? 10 : 50);
    const hei = this.state.height;
    const r = prng(1234567890);

    return (
      <div className="content">
        <div className="cardSurface" >
          <div className="card">
            <div className="cardFront" style={cardMove(ms, hei)}>
              <svg className="logo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416.664 216.667">
                <g transform="translate(0, 0)">
                  <g opacity="0.95" fill="#5D79D7">
                    <line className="st0" x1="122.344" y1="95.477" x2="123.37" y2="26.867" />
                    <line className="st0" x1="117.515" y1="95.713" x2="84.483" y2="26.143" />
                    <line className="st0" x1="122.528" y1="95.713" x2="89.496" y2="26.143" />
                    <rect x="150.397" y="26.938" className="st1" width="8" height="70" />
                    <circle className="st2" cx="154.333" cy="8.5" r="7.5" />
                    <line className="st3" x1="188.755" y1="27.608" x2="188.755" y2="97.959" />
                    <line className="st3" x1="183.964" y1="27.725" x2="183.964" y2="97.959" />
                    <line className="st3" x1="204.292" y1="27.667" x2="204.292" y2="47.301" />
                    <line className="st3" x1="179" y1="27.725" x2="179" y2="97.959" />
                    <line className="st3" x1="204.292" y1="79.459" x2="204.292" y2="98.009" />
                    <line className="st3" x1="199.167" y1="27.667" x2="199.167" y2="47.301" />
                    <line className="st3" x1="199.167" y1="79.459" x2="199.167" y2="98.009" />
                    <line className="st3" x1="193.917" y1="27.608" x2="193.917" y2="47.359" />
                    <line className="st3" x1="193.917" y1="79.442" x2="193.917" y2="98.026" />
                    <rect x="220.482" y="27.938" className="st4" width="8" height="70" />
                    <line className="st5" x1="191.092" y1="0" x2="264.167" y2="0" />
                    <line className="st5" x1="215.417" y1="2.917" x2="273.167" y2="2.667" />
                    <polygon className="st6" points="263.26,2.601 252.039,18.624 193.703,14.517 199.808,2.611 " />
                    <line className="st5" x1="81.819" y1="26.143" x2="87.147" y2="26.143" />
                    <line className="st5" x1="116.926" y1="95.713" x2="122.059" y2="95.477" />
                    <line className="st3" x1="260.755" y1="27.608" x2="260.755" y2="97.959" />
                    <line className="st3" x1="255.964" y1="27.725" x2="255.964" y2="97.959" />
                    <line className="st3" x1="276.292" y1="27.667" x2="276.292" y2="47.301" />
                    <line className="st3" x1="251" y1="27.725" x2="251" y2="97.959" />
                    <line className="st3" x1="276.292" y1="79.459" x2="276.292" y2="98.009" />
                    <line className="st3" x1="271.167" y1="27.667" x2="271.167" y2="47.301" />
                    <line className="st3" x1="271.167" y1="79.459" x2="271.167" y2="98.009" />
                    <line className="st3" x1="265.917" y1="27.608" x2="265.917" y2="47.359" />
                    <line className="st3" x1="265.917" y1="79.442" x2="265.917" y2="98.026" />
                    <line className="st3" x1="281.833" y1="27.608" x2="281.833" y2="97.959" />
                    <line className="st3" x1="286.975" y1="27.608" x2="286.975" y2="97.959" />
                    <line className="st3" x1="292.117" y1="27.762" x2="292.117" y2="98.114" />
                    <line className="st7" x1="312.582" y1="27.608" x2="312.582" y2="98.959" />
                    <polygon className="st8" points="339.676,98.394 333.292,99.114 312.309,66.856 319.286,66.9 " />
                    <line className="st3" x1="58.755" y1="116.608" x2="58.755" y2="186.959" />
                    <line className="st3" x1="53.964" y1="116.725" x2="53.964" y2="186.959" />
                    <line className="st3" x1="74.292" y1="116.667" x2="74.292" y2="136.301" />
                    <line className="st3" x1="49" y1="116.725" x2="49" y2="186.959" />
                    <line className="st3" x1="74.292" y1="168.459" x2="74.292" y2="187.009" />
                    <line className="st3" x1="69.167" y1="116.667" x2="69.167" y2="136.301" />
                    <line className="st3" x1="69.167" y1="168.459" x2="69.167" y2="187.009" />
                    <line className="st3" x1="63.917" y1="116.608" x2="63.917" y2="136.359" />
                    <line className="st3" x1="63.917" y1="168.442" x2="63.917" y2="187.026" />
                    <line className="st3" x1="79.833" y1="116.608" x2="79.833" y2="186.959" />
                    <line className="st3" x1="84.975" y1="116.608" x2="84.975" y2="186.959" />
                    <line className="st3" x1="90.117" y1="116.762" x2="90.117" y2="187.114" />
                    <line className="st3" x1="10.755" y1="117.608" x2="10.755" y2="187.959" />
                    <line className="st3" x1="4.964" y1="117.725" x2="4.964" y2="187.959" />
                    <line className="st3" x1="0" y1="117.725" x2="0" y2="187.959" />
                    <path className="st9" d="M10.755,156.809v-39.083c10.793,0,19.542,8.749,19.542,19.542S21.547,156.809,10.755,156.809z" />
                    <line className="st0" x1="149.593" y1="187.627" x2="116.561" y2="118.057" />
                    <line className="st0" x1="144.541" y1="187.547" x2="111.51" y2="117.976" />
                    <line className="st0" x1="111.842" y1="186.959" x2="111.486" y2="117.233" />
                    <rect x="150.397" y="116.938" className="st10" width="8" height="70" />
                    <line className="st3" x1="188.755" y1="116.608" x2="188.755" y2="186.959" />
                    <line className="st3" x1="183.964" y1="116.725" x2="183.964" y2="186.959" />
                    <line className="st3" x1="204.292" y1="116.667" x2="204.292" y2="136.301" />
                    <line className="st3" x1="179" y1="116.725" x2="179" y2="186.959" />
                    <line className="st3" x1="204.292" y1="161.108" x2="204.292" y2="187.009" />
                    <line className="st3" x1="199.167" y1="116.667" x2="199.167" y2="136.301" />
                    <line className="st3" x1="199.167" y1="161.108" x2="199.167" y2="187.009" />
                    <line className="st3" x1="193.917" y1="116.608" x2="193.917" y2="136.359" />
                    <line className="st3" x1="193.917" y1="168.442" x2="193.917" y2="187.026" />
                    <line className="st3" x1="208.833" y1="161.108" x2="195.5" y2="161.108" />
                    <line className="st0" x1="259.593" y1="185.627" x2="226.561" y2="116.057" />
                    <line className="st0" x1="254.541" y1="185.547" x2="221.51" y2="115.976" />
                    <line className="st0" x1="221.842" y1="184.959" x2="221.486" y2="115.233" />
                    <rect x="285.599" y="115.849" className="st11" width="8" height="70" />
                    {/* <ellipse className="st12" cx="289.53" cy="205.058" rx="8.137" ry="7.608" /> */}
                    <line className="st0" x1="259.842" y1="185.959" x2="259.486" y2="116.233" />
                    <line className="st0" x1="356.593" y1="183.627" x2="323.561" y2="114.057" />
                    <line className="st0" x1="351.541" y1="183.547" x2="318.51" y2="113.976" />
                    <line className="st0" x1="318.842" y1="182.959" x2="318.486" y2="113.233" />
                    <rect x="318.833" y="145.957" className="st13" width="36.008" height="8" />
                    <line className="st0" x1="416.774" y1="182.454" x2="383.742" y2="112.884" />
                    <line className="st0" x1="411.541" y1="182.547" x2="378.51" y2="112.976" />
                    <line className="st0" x1="416.842" y1="182.959" x2="416.486" y2="113.233" />
                    <rect x="369.397" y="112.938" className="st10" width="8" height="70" />
                    <path className="st9" d="M312.167,66.842V27.759c10.793,0,19.542,8.749,19.542,19.542S322.959,66.842,312.167,66.842z" />
                    <line className="st3" x1="307.117" y1="27.608" x2="307.117" y2="99.114" />
                    <g>
                    <path className="st8" d="M333.292,99.114h6.954H333.292z" />
                    <path className="st8" d="M339.676,98.394l0.57,0.72L339.676,98.394z" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            {/* <div className="cardBottomEdge" style={cardMoveEdge(ms, hei)} /> */}
            <div className="cardBack" style={cardMoveBack(ms, hei)}>
              <em>Design Technologist</em><br /><br />
            </div>
          </div>
        </div>
        <div className="section_2">
          <span />
        </div>
      </div>
    );
  }
}

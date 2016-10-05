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
              <svg className="logo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124 142">
                <g transform="translate(562, 71)">
                  <g opacity="0.55" fill="#262628">

                    <rect style={v(s - 15, r)} x="-562" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 18, r)} x="-554.6" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 21, r)} x="-547.1" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 24, r)} x="-539.7" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 27, r)} x="-532.2" y="-69" width="2.5" height="138" />

                    <rect style={h(s - 50, r)} x="-446" y="-69" width="91" height="2.5" />
                    <rect style={h(s - 53, r)} x="-446" y="-61.6" width="91" height="2.5" />
                    <rect style={h(s - 56, r)} x="-446" y="-54.1" width="91" height="2.5" />
                    <rect style={h(s - 59, r)} x="-446" y="-46.7" width="91" height="2.5" />
                    <rect style={h(s - 62, r)} x="-446" y="-39.5" width="91" height="2.5" />
                    <rect style={h(s - 70, r)} x="-446" y="-16.5" width="85" height="2.5" />
                    <rect style={h(s - 73, r)} x="-446" y="-9.1" width="85" height="2.5" />
                    <rect style={h(s - 76, r)} x="-446" y="-1.6" width="85" height="2.5" />
                    <rect style={h(s - 79, r)} x="-446" y="5.8" width="85" height="2.5" />
                    <rect style={h(s - 82, r)} x="-446" y="13.3" width="85" height="2.5" />
                    <rect style={h(s - 90, r)} x="-446" y="37" width="94" height="2.5" />
                    <rect style={h(s - 93, r)} x="-446" y="44.4" width="94" height="2.5" />
                    <rect style={h(s - 96, r)} x="-446" y="51.9" width="94" height="2.5" />
                    <rect style={h(s - 99, r)} x="-446" y="59.3" width="94" height="2.5" />
                    <rect style={h(s - 102, r)} x="-446" y="66.5" width="94" height="2.5" />

                    <rect style={h(s - 132, r)} x="-312" y="-69" width="91" height="2.5" />
                    <rect style={h(s - 129, r)} x="-312" y="-61.6" width="91" height="2.5" />
                    <rect style={h(s - 126, r)} x="-312" y="-54.1" width="91" height="2.5" />
                    <rect style={h(s - 123, r)} x="-312" y="-46.7" width="91" height="2.5" />
                    <rect style={h(s - 120, r)} x="-312" y="-39.5" width="91" height="2.5" />
                    <rect style={h(s - 112, r)} x="-312" y="-16.5" width="85" height="2.5" />
                    <rect style={h(s - 109, r)} x="-312" y="-9.1" width="85" height="2.5" />
                    <rect style={h(s - 106, r)} x="-312" y="-1.6" width="85" height="2.5" />
                    <rect style={h(s - 103, r)} x="-312" y="5.8" width="85" height="2.5" />
                    <rect style={h(s - 100, r)} x="-312" y="13.3" width="85" height="2.5" />
                    <rect style={h(s - 92, r)} x="-312" y="37" width="94" height="2.5" />
                    <rect style={h(s - 89, r)} x="-312" y="44.4" width="94" height="2.5" />
                    <rect style={h(s - 86, r)} x="-312" y="51.9" width="94" height="2.5" />
                    <rect style={h(s - 83, r)} x="-312" y="59.3" width="94" height="2.5" />
                    <rect style={h(s - 80, r)} x="-312" y="66.5" width="94" height="2.5" />

                    <rect style={v(s - 110, r)} x="-113.1" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 113, r)} x="-120.6" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 116, r)} x="-128" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 119, r)} x="-135" y="-69" width="2.5" height="138" />

                    <rect style={v(s - 122, r)} x="-105.9" y="-69" width="2.7" height="79.5" />
                    <rect style={v(s - 125, r)} x="-98.1" y="-69" width="2.7" height="79.5" />
                    <rect style={v(s - 128, r)} x="-90.3" y="-69" width="2.7" height="79.5" />
                    <path style={v(s - 131, r)} d="M-80.9,-69h-1.6v79.5l1.6,0c0.4,0,0.7,0,1.1,0V-68.9C-80.1,-69,-80.4,-69,-80.9,-69z" />
                    <path style={v(s - 134, r)} d="M-74.7,-68.4V10c0.9-0.1,1.8-0.3,2.7-0.5V-67.9C-73,-68.1,-73.8,-68.3,-74.7,-68.4z" />
                    <path style={v(s - 137, r)} d="M-67,-66.4V8c0.9-0.3,1.8-0.7,2.7-1.1V-65.2C-65.2,-65.6,-66.1,-66,-67,-66.4z" />
                    <path style={v(s - 140, r)} d="M-59.2,-62.4V4c0.9-0.6,1.8-1.2,2.7-1.9V-60.5C-57.4,-61.2,-58.3,-61.8,-59.2,-62.4z" />
                    <path style={v(s - 143, r)} d="M-51.4,-55.7v53.1c0.9-1,1.8-2.1,2.7-3.3V-52.4C-49.6,-53.6,-50.5,-54.7,-51.4,-55.7z" />
                    <path style={v(s - 147, r)} d="M-43.6,-42.8c1.6,4.3,2.4,8.8,2.4,13.6c0,4.8-0.8,9.4-2.4,13.6" />

                    <polygon style={a(s - 140, r)} points="31,11 -16.9,-69 -19.9,-69 28,11" />
                    <polygon style={a(s - 144, r)} points="39.2,11 -8.7,-69 -11.7,-69 36.2,11" />
                    <polygon style={a(s - 148, r)} points="47.5,11 -0.4,-69 -3.4,-69 44.5,11" />
                    <polygon style={a(s - 152, r)} points="55.8,11 7.9,-69 4.9,-69 52.8,11" />
                    <polygon style={a(s - 156, r)} points="64,11 16.1,-69 13.1,-69 61,11" />

                    <rect style={v(s - 183, r)} x="137" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 187, r)} x="144.4" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 191, r)} x="151.9" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 195, r)} x="159.3" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 199, r)} x="166.8" y="-69" width="2.5" height="138" />

                    <path style={v(s - 200, r)} d="M273.6,-26v52c0.8,1.9,1.6,3.8,2.5,5.6V-31.6C275.2,-29.8,274.4,-27.9,273.6,-26z" />
                    <path style={v(s - 202, r)} d="M281,-39.9v79.9c0.8,1.2,1.6,2.3,2.5,3.4V-43.4C282.6,-42.2,281.8,-41.1,281,-39.9z" />
                    <path style={v(s - 204, r)} d="M288.4,-49V49c0.8,0.9,1.6,1.7,2.5,2.5v-103C290,-50.7,289.2,-49.9,288.4,-49z" />
                    <path style={v(s - 206, r)} d="M295.7,-55.7v111.5c0.8,0.6,1.7,1.3,2.5,1.9V-57.6C297.4,-57,296.6,-56.4,295.7,-55.7z" />
                    <path style={v(s - 208, r)} d="M303.1,-60.9v121.7c0.8,0.5,1.7,1,2.5,1.4V-62.3C304.8,-61.8,303.9,-61.3,303.1,-60.9z" />
                    <path style={v(s - 210, r)} d="M311.3,-65.1v130.1c0.8,0.4,1.7,0.7,2.5,1V-66.1C312.9,-65.8,312.1,-65.4,311.3,-65.1z" />
                    <path style={v(s - 212, r)} d="M318.2,-67.7v135.4c0.8,0.3,1.7,0.5,2.5,0.7V-68.4C319.9,-68.2,319,-67.9,318.2,-67.7z" />
                    <path style={v(s - 214, r)} d="M325.6,-69.6v139.2c0.8,0.2,1.7,0.3,2.5,0.4V-70C327.2,-69.9,326.4,-69.8,325.6,-69.6z" />
                    <path style={v(s - 216, r)} d="M332.9,-70.7v141.3c0.8,0.1,1.7,0.1,2.5,0.2V-70.9C334.6,-70.8,333.8,-70.8,332.9,-70.7z" />
                    <path style={v(s - 218, r)} d="M340.3,-71v142c0.8,0,1.7,0,2.5-0.1V-70.9C342,-71,341.2,-71,340.3,-71z" />
                    <path style={v(s - 220, r)} d="M347.7,-70.5v141.1c0.8-0.1,1.7-0.2,2.5-0.3V-70.2C349.4,-70.3,348.5,-70.4,347.7,-70.5z" />

                    <rect style={v(s - 233, r)} x="436.7" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 236, r)} x="443.7" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 239, r)} x="451.1" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 242, r)} x="458.5" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 245, r)} x="466" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 247, r)} x="473.4" y="-69" width="2.5" height="138" />

                    <rect style={v(s - 253, r)} x="522.3" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 256, r)} x="529.3" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 259, r)} x="536.8" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 262, r)} x="544.2" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 265, r)} x="551.7" y="-69" width="2.5" height="138" />
                    <rect style={v(s - 262, r)} x="559.1" y="-69" width="2.5" height="138" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="cardBottomEdge" style={cardMoveEdge(ms, hei, r)} />
            <div className="cardBack" style={cardMoveBack(ms, hei, r)}>
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

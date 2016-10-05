import { isMobile } from './window';

const D2R = Math.PI / 180;
const xd = Math.sin(D2R * 30);
const yd = Math.cos(D2R * 30);

function t(s) {
  return {
    transform: s,
    WebkitTransform: s,
  };
}

export function l(size) {
  let s = size;
  if (s < 0) {
    s = 0;
  }
  const dx = s * -12;

  return t(`translateX(${dx}px)`);
}

export function n(_s) {
  let s = _s;
  if (s < 0) {
    s = 0;
  }

  const d = -7;
  const x = s * d * xd;
  const y = s * d * yd;
  return t(`translate(${x}px,${y}px)`);
}

export function sz(_s, _d) {
  let s = _s;
  const d = _d;

  if (s < 0) {
    s = 0;
  }

  const dx = s * -3;
  const sc = 1 + (s * 0.01);
  return t(
    `rotate(${0.1 * d * s}deg)
    scale(${sc})
    translateX(${dx}px)`
  );
}

export function spin(_s, d) {
  let s = _s;

  if (s < 0) {
    s = 0;
  }

  const dy = s * d * 0.3;
  const az = s * 0.15;

  return t(
    `scale(${1 + (s * 0.003)})
    translateX(${-2 * s * d}px)
    translateY(${-dy}px)
    rotate(${az}deg)
    translateY(${dy}px)`
  );
}

export function cardMove(s, hh) {
  if (s === 0 || isMobile()) {
    return {};
  }
  if (s < 0) {
    return t(`translate3d(0,${-s}px,0)`);
  }

  const notimes = Math.min(1, s / hh); // [0-1]

  const notimes2 = Math.max(0, Math.min(1, ((1.4 * s) / hh) - 0.2));
  const cosmo2 = (1 + Math.cos(Math.PI * notimes2)) / 2;

  const dz = 100 * ((1 - Math.cos(2 * Math.PI * notimes2)) / 2);
  const dy = Math.min(hh, s) - ((1 - notimes) * s * Math.sin(2 * Math.PI * notimes)) - s;
  return t(
    `translate3d(0,${dy}px,${dz}px)
    rotateZ(${0.25 - (0.25 * cosmo2)}turn)
    rotateX(${0.5 - (0.5 * cosmo2)}turn)
    translateZ(3px)`
  );
}

export function cardMoveBack(s, hh) {
  if (s === 0 || isMobile()) {
    return {};
  }
  const notimes = Math.min(1, s / hh);
  // const times = 1-notimes;//Math.max(0, (hh - s)/hh);

  // const cosmo = (1 + Math.cos(Math.PI * notimes)) / 2;

  const notimes2 = Math.max(0, Math.min(1, ((1.4 * s) / hh) - 0.2));
  const cosmo2 = (1 + Math.cos(Math.PI * notimes2)) / 2;

  // console.log(notimes, times, notimes + times, cosmo);

  const dz = 100 * ((1 - Math.cos(2 * Math.PI * notimes2)) / 2);
  const dy = Math.min(hh, s) - ((1 - notimes) * s * Math.sin(2 * Math.PI * notimes)) - s;

  return t(
    `translate3d(0,${dy}px,${dz}px)
    rotateZ(${-0.25 - (0.25 * cosmo2)}turn)
    rotateX(${1 + (0.5 * cosmo2)}turn)
    rotateZ(90deg)`
  );
}


export function cardMoveEdge(s, hh) {
  if (s === 0 || isMobile()) {
    return {};
  }
  // return {};
  const notimes = Math.min(1, s / hh);
  // const times = 1-notimes;//Math.max(0, (hh - s)/hh);

  // const cosmo = (1 + Math.cos(Math.PI * notimes)) / 2;

  const notimes2 = Math.max(0, Math.min(1, (1.4 * s) / (hh - 0.2)));
  const cosmo2 = (1 + Math.cos(Math.PI * notimes2)) / 2;

  const dz = 100 * ((1 - Math.cos(2 * Math.PI * notimes2)) / 2);
  const dy = Math.min(hh, s) - ((1 - notimes) * s * Math.sin(2 * Math.PI * notimes)) - s;

  return t(
    `translate3d(0,${dy}px,0)
    translate3d(0,0,${dz}px)
    rotateZ(${0.25 - (0.25 * cosmo2)}turn)
    rotateX(${1 - (0.5 * cosmo2)}turn)
    translateY(-50%)
    rotateX(0.25turn)`
  );
}

export function prng(seed) {
  let x = seed || 1;
  return (max, min) => {
    x = (x * 279470273) % 4294967291;
    return min + ((max - min) * (x / 0xFFFFFFFF));
  };
}

export function h(_s, r) {
  let s = _s;
  if (s < 0) {
    s = 0;
  }

  const dx = s * r(-12, 12);
  const sx = Math.max(0, 1 + (s * r(-0.05, -0.01)));
  return t(`translateX(${dx - 535}px) scaleX(${sx}) translateX(535px)`);
}

export function v(_s, r) {
  let s = _s;
  if (s < 0) {
    s = 0;
  }

  const dy = s * r(-6, 6);
  const sy = Math.max(0, 1 + (s * r(-0.05, -0.01)));
  return t(`translateY(${dy}px) scaleY(${sy})`);
}

export function a(_s, r) {
  let s = _s;
  if (s < 0) {
    s = 0;
  }

  const dy = s * r(-5, 5);
  const sy = Math.max(0, 1 + (s * r(-0.05, -0.01)));
  return t(
    `rotate(-30deg)
    translateY(${dy}px)
    scaleY(${sy})
    rotate(30deg)`
  );
}

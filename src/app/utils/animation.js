import { isMobile } from './window';

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

export function cardMove(s, hh) {
  if (s === 0 || isMobile()) {
    return {};
  }
  if (s < 0) {
    return t(`translate3d(0, ${-s}px,0)`);
  }

  const notimes = Math.min(1, s / hh);

  // var times = 1-notimes;//Math.max(0, (hh - s)/hh);

  // var cosmo = (1 + Math.cos(Math.PI * notimes)) / 2;

  const notimes2 = Math.max(0, Math.min(1, (1.4 * s) / (hh - 0.2)));
  const cosmo2 = (1 + Math.cos(Math.PI * notimes2)) / 2;

  // console.log(notimes, times, notimes + times, cosmo);

  const dz = 100 * ((1 - Math.cos(2 * Math.PI * notimes2)) / 2);

  const dy = Math.min(hh, s) - ((1 - notimes) * s * Math.sin(2 * Math.PI * notimes)) - s;

  return t(
    `translate3d(0, ${dy}px, ${dz}px)
    rotateZ('${0.25 - (0.25 * cosmo2)} turn)
    rotateX('${0.5 - (0.5 * cosmo2)} turn)
    translateZ(3px)`
  );
}

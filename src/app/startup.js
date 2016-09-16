import styles from './index.scss';

export default function () {
  window.isMobile = navigator.userAgent.match(/Android|webOS|iPhone|iPod|iPad/i);
  document.body.className = window.isMobile ? styles.mobile : styles.desktop;
}

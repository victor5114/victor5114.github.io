export default function () {
  window.isMobile = navigator.userAgent.match(/Android|webOS|iPhone|iPod|iPad/i);
  document.body.className = window.isMobile ? 'mobile' : 'desktop';
}

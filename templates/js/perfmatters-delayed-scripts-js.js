const perfmattersUserInteractions = [
  'keydown',
  'mousemove',
  'wheel',
  'touchmove',
  'touchstart',
  'touchend',
];
perfmattersUserInteractions.forEach(function (event) {
  window.addEventListener(event, pmTriggerDelayedScripts, { passive: !0 });
});
function pmTriggerDelayedScripts() {
  pmLoadDelayedScripts();
  perfmattersUserInteractions.forEach(function (event) {
    window.removeEventListener(event, pmTriggerDelayedScripts, { passive: !0 });
  });
}
function pmLoadDelayedScripts() {
  document
    .querySelectorAll('script[data-pmdelayedscript]')
    .forEach(function (elem) {
      elem.setAttribute('src', elem.getAttribute('data-pmdelayedscript'));
    });
}

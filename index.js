window.addEventListener("DOMContentLoaded", () => {
  VANTA.BIRDS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    wingSpan: 40.0,
    separation: 100.0,
    alignment: 77.0,
    quantity: 1.0,
    cohension: 5.00,
    backgroundAlpha: 0.0,
  });

  setTimeout(() => {
    const main = document.querySelector("main");
    main.style.opacity = 1;
    main.style.filter = 'none';
  }, 1000);
});
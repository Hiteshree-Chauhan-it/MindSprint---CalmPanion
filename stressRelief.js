const circleContainer = document.querySelector(".circle-options");
const circles = document.querySelectorAll(".circle-btn");

const radius = 280;
const centerX = circleContainer.offsetWidth / 2;
const centerY = circleContainer.offsetHeight;

circles.forEach((btn, i) => {
  const angle = Math.PI * (i / (circles.length - 1));
  const x = centerX + radius * Math.cos(angle) - btn.offsetWidth / 2;
  const y = centerY - radius * Math.sin(angle) - btn.offsetHeight / 2;
  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;
});

const circleButtons = document.querySelectorAll('.circle-btn');
const infoPanel = document.querySelector('.info-panel');
const infoBoxes = document.querySelectorAll('.info-box');
const backBtn = document.querySelector('.back-btn');

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

circleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    circleButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    infoPanel.classList.add('active');
    overlay.classList.add('active');

    const targetId = btn.dataset.target;
    infoBoxes.forEach(box => box.classList.remove('active'));
    const targetBox = document.getElementById(targetId);
    if (targetBox) targetBox.classList.add('active');
  });
});

backBtn.addEventListener('click', () => {
  infoPanel.classList.remove('active');
  overlay.classList.remove('active');
  circleButtons.forEach(b => b.classList.remove('active'));
  infoBoxes.forEach(box => box.classList.remove('active'));
});
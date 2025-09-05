// ---------- Arrange circles in a perfect semicircle ----------
const circleContainer = document.querySelector(".circle-options");
const circles = document.querySelectorAll(".circle-btn");

const radius = 280; // distance from center
const centerX = circleContainer.offsetWidth / 2;
const centerY = circleContainer.offsetHeight;

circles.forEach((btn, i) => {
  const angle = Math.PI * (i / (circles.length - 1)); // 0 to π
  const x = centerX + radius * Math.cos(angle) - btn.offsetWidth / 2;
  const y = centerY - radius * Math.sin(angle) - btn.offsetHeight / 2;
  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;
});

// ---------- Panel + Info Boxes ----------
const circleButtons = document.querySelectorAll('.circle-btn');
const infoPanel = document.querySelector('.info-panel');
const infoBoxes = document.querySelectorAll('.info-box');
const backBtn = document.querySelector('.back-btn');

// Optional overlay for effect
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

circleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Move clicked circle to top-left
    circleButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show info panel (slides to center)
    infoPanel.classList.add('active');
    overlay.classList.add('active');

    // Show corresponding info box
    const targetId = btn.dataset.target;
    infoBoxes.forEach(box => box.classList.remove('active'));
    const targetBox = document.getElementById(targetId);
    if (targetBox) targetBox.classList.add('active');
  });
});

// Back button hides panel + overlay + reset circles
backBtn.addEventListener('click', () => {
  infoPanel.classList.remove('active');
  overlay.classList.remove('active');
  circleButtons.forEach(b => b.classList.remove('active'));
  infoBoxes.forEach(box => box.classList.remove('active'));
});

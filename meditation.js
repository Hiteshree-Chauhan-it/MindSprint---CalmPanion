const circle = document.getElementById("circle");
const instruction = document.getElementById("instruction");
const timerEl = document.getElementById("timer");

const cycle = [
  { action: 'Inhale', duration: 7 },
  { action: 'Hold', duration: 7 },
  { action: 'Exhale', duration: 7 }
];

let step = 0;
let secondsLeft = cycle[step].duration;

function breathe() {
    instruction.textContent = cycle[step].action;
    timerEl.textContent = secondsLeft;

    const scaleValue = cycle[step].action === 'Exhale' ? 1 : 1.8;

    circle.style.transition = `transform ${cycle[step].duration}s ease-in-out`;
    circle.style.transform = `scale(${scaleValue})`;

    if (cycle[step].action === 'Inhale' || cycle[step].action === 'Hold') {
        circle.classList.add('pulse');
    } else {
        circle.classList.remove('pulse');
    }
}

function countdown() {
    secondsLeft--;
    if (secondsLeft < 0) {
        step = (step + 1) % cycle.length;
        secondsLeft = cycle[step].duration;
        breathe();
    }
    timerEl.textContent = secondsLeft >= 0 ? secondsLeft : 0;
}

breathe();
setInterval(countdown, 1000);

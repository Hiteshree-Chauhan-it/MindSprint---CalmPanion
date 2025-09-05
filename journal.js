const notification = document.getElementById("notification");
const thoughts = document.getElementById("thoughts");
const doodleSection = document.getElementById("doodleSection");
const radios = document.querySelectorAll('input[name="mode"]');

const canvas = document.getElementById("doodleCanvas");
const ctx = canvas.getContext("2d");
const clearBtn = document.getElementById("clearBtn");
window.addEventListener("load", () => {
    showNotification("🌸 Welcome! This is your safe journaling space. Nothing is saved.");
});
function showNotification(message) {
    notification.textContent = message;
    notification.classList.add("show");
    setTimeout(() => {
    notification.classList.remove("show");
    }, 3000);
}
radios.forEach(radio => {
    radio.addEventListener("change", () => {
    if (radio.value === "write") {
        thoughts.classList.remove("hidden");
        doodleSection.classList.add("hidden");
    } else {
        thoughts.classList.add("hidden");
        doodleSection.classList.remove("hidden");
        resizeCanvas();
    }
    });
});

// Resize canvas to fit
function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}
window.addEventListener("resize", resizeCanvas);

let drawing = false;

canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    draw(e);
});
canvas.addEventListener("mouseup", () => {
    drawing = false;
    ctx.beginPath();
});
canvas.addEventListener("mouseout", () => drawing = false);
canvas.addEventListener("mousemove", draw);

function draw(e) {
    if (!drawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#2b3e42";

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

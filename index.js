const toggleBtn = document.getElementById('mode-toggle');
<<<<<<< HEAD
=======
const logo = document.getElementById('logo'); // fixed id reference
>>>>>>> 6f258f0 (main page)

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = "☀️";
    } else {
<<<<<<< HEAD
        toggleBtn.textContent = "🌙";
=======
        toggleBtn.textContent = "🌙"; 
        logo.src = "images/frontlogo1.png"; // light mode logo
>>>>>>> 6f258f0 (main page)
    }
});

// Card tilt animation
const cards = document.querySelectorAll(".feature-card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 8;
        const rotateY = ((x - centerX) / centerX) * -8;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
});

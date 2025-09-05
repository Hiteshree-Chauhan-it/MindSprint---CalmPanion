// const toggleBtn = document.getElementById('mode-toggle');
// toggleBtn.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
//     toggleBtn.textContent = document.body.classList.contains('dark-mode') ? "☀️" : "🌙";
// });
const toggleBtn = document.getElementById('mode-toggle');
const logo = document.getElementById('logo'); // your <img id="logo">

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = "☀️"; 
        logo.src = "images/darkfinal.png";  // dark mode logo
    } else {
        toggleBtn.textContent = "🌙"; 
        logo.src = "images/CalmPanionlogo.png"; // light mode logo
    }
});
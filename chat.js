const backBtn = document.getElementById("back-btn");
backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    const userDiv = document.createElement("div");
    userDiv.className = "message user-message";
    userDiv.textContent = message;
    chatBox.appendChild(userDiv);

    userInput.value = "";
    const aiDiv = document.createElement("div");
    aiDiv.className = "message ai-message";
    aiDiv.textContent = "Sorry, this feature is still under progress. But keep sharing your thoughts!";
    chatBox.appendChild(aiDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

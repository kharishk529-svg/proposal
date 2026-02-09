let noMessages = [
    "Are you sure? 😢",
    "Think again 💔",
    "Pleaseeee 🥺",
    "Don't break my heart 😭",
    "I will cry 😭",
    "Last chance 😤",
    "You belong with me ❤️"
];

let noCount = 0;

function accepted() {
    document.body.innerHTML = `
        <div style="text-align:center; color:white; margin-top:20%;">
            <h1>YAYYYY!!! 💖🥰</h1>
            <p style="font-size:1.4rem;">
                You just made my heart the happiest! ❤️
            </p>
        </div>
    `;
}

function moveNo() {
    let noBtn = document.getElementById("no");

    // Change text every time hovered
    if (noCount < noMessages.length) {
        noBtn.innerText = noMessages[noCount];
        noCount++;
    }

    // Move button randomly
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * (window.innerWidth - 120) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - 60) + "px";

    // After many tries remove NO button 😏
    if (noCount === noMessages.length) {
        setTimeout(() => {
            noBtn.style.display = "none";
        }, 800);
    }
}

// Floating hearts
for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";
    document.body.appendChild(heart);
}
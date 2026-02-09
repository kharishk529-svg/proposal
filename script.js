let noMessages = [
    "Are you sure? 😢",
    "Think again 💔",
    "Pleaseeee 🥺",
    "Don't break my heart 😭",
    "I will be very sad 😞",
    "You really mean No? 💔",
    "Okay... last chance ❤️"
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

    // Change message
    noBtn.innerText = noMessages[noCount];

    // Increase counter and loop messages
    noCount++;
    if (noCount >= noMessages.length) {
        noCount = 0;
    }

    // Move button randomly
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * (window.innerWidth - 120) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - 60) + "px";
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
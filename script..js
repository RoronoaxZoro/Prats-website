const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const heartsContainer = document.getElementById("hearts-container");

let scale = 1;

// Move and shrink No button
noBtn.addEventListener("mouseover", function () {

    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    if (scale > 0.2) {
        scale -= 0.1;
        noBtn.style.transform = "scale(" + scale + ")";
    }
});

// Yes button click
yesBtn.addEventListener("click", function () {

    // Create heart explosion
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        heart.style.left = window.innerWidth / 2 + "px";
        heart.style.top = window.innerHeight / 2 + "px";

        const x = (Math.random() - 0.5) * 600 + "px";
        const y = (Math.random() - 0.5) * 600 + "px";

        heart.style.setProperty('--x', x);
        heart.style.setProperty('--y', y);

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }

    // Fade out then redirect
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "yes.html";
    }, 1500);
});


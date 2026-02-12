const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const cats = document.querySelector(".cats");

let scale = 1;

// Move and shrink No button
noBtn.addEventListener("mouseover", function () {

    // Random position
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 100));

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    // Shrink effect
    if (scale > 0.2) {
        scale -= 0.1;
        noBtn.style.transform = "scale(" + scale + ")";
    }
});

// Yes button click
yesBtn.addEventListener("click", function () {
    message.style.display = "block";
    cats.style.display = "block";
});

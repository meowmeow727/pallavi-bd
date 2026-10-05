const gift = document.getElementById("gift");
const openBtn = document.getElementById("openBtn");
const finalMessage = document.getElementById("finalMessage");
const confetti = document.getElementById("confetti");

openBtn.addEventListener("click", function () {

    gift.classList.add("open");

    openBtn.style.display = "none";

    finalMessage.classList.add("show");

    createConfetti();
});


function createConfetti() {

    for (let i = 0; i < 100; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        confetti.appendChild(piece);
    }
}
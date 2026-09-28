const startBtn =
    document.getElementById("startBtn");

const mainContent =
    document.getElementById("mainContent");

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

const giftBtn =
    document.getElementById("giftBtn");

const giftSection =
    document.getElementById("giftSection");



/* ========================= */
/* START SURPRISE */
/* ========================= */

startBtn.addEventListener(
    "click",
    () => {

        document.getElementById(
            "opening"
        ).style.display = "none";


        mainContent.classList.remove(
            "hidden"
        );


        // Start music
        music.play()
            .then(() => {

                musicBtn.textContent =
                    "⏸️";

            })
            .catch(() => {

                musicBtn.textContent =
                    "🎵";

            });


        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);



/* ========================= */
/* MUSIC */
/* ========================= */

musicBtn.addEventListener(
    "click",
    () => {

        if (music.paused) {

            music.play();

            musicBtn.textContent =
                "⏸️";

        } else {

            music.pause();

            musicBtn.textContent =
                "🎵";

        }

    }
);



/* ========================= */
/* OPEN GIFT */
/* ========================= */

giftBtn.addEventListener(
    "click",
    () => {

        giftSection.classList.remove(
            "hidden"
        );


        giftSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });


        createHearts();

    }
);



/* ========================= */
/* HEARTS */
/* ========================= */

function createHearts() {

    const symbols = [
        "❤️",
        "💗",
        "💖",
        "💕",
        "✨"
    ];


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const heart =
            document.createElement(
                "div"
            );


        heart.textContent =
            symbols[
                Math.floor(
                    Math.random()
                    * symbols.length
                )
            ];


        heart.style.position =
            "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom =
            "-30px";

        heart.style.fontSize =
            15 +
            Math.random() * 25 +
            "px";

        heart.style.zIndex =
            "200";

        heart.style.pointerEvents =
            "none";

        heart.style.transition =
            "transform 5s linear, opacity 5s linear";


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            heart.style.transform =
                "translateY(-110vh) rotate(360deg)";

            heart.style.opacity =
                "0";

        }, 50);


        setTimeout(() => {

            heart.remove();

        }, 5500);

    }

}
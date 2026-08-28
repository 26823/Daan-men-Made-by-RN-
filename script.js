const knop = document.querySelector(".subscribe-btn");

knop.onclick = function(event) {
    event.preventDefault();

    knop.textContent = "Even geduld A.U.B";

    setTimeout(function() {
        window.location.href = "https://www.youtube.com/@DaanMen12";
    }, 1000);
};

document.querySelector(".foto").style.animationPlayState = "paused";

document.querySelector(".foto").style.animationPlayState = "running";

document.addEventListener("click", (e) => {
    const link = e.target.closest("a");

    if (!link) return;
    if (link.origin !== location.origin) return;

    e.preventDefault();

    if (!document.startViewTransition) {
        window.location.href = link.href;
        return;
    }

    document.startViewTransition(() => {
        window.location.href = link.href;
    });
});

const video = document.getElementById("trailer");

if (video) {

    video.addEventListener("mouseenter", async () => {
        try {
            video.muted = false;
            video.volume = 1;
            await video.play();
        } catch (error) {
            console.log("Geluid/video kon niet automatisch worden gestart.");
        }
    });

    video.addEventListener("mouseleave", () => {
        video.muted = true;
        video.play();
    });
}


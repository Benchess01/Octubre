const music = document.getElementById("music");
const button = document.getElementById("musicButton");

let playing = false;

button.addEventListener("click", () => {

    if (!playing) {

        music.play();

        button.textContent = "⏸ Pausar música";

        playing = true;

    } else {

        music.pause();

        button.textContent = "🎵 Escuchar música";

        playing = false;

    }

});
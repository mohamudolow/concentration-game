const playPause = anime({
    targets: "div.box",
    translateX: [
        {value: 50, duration: 500},
        {value: 0, duration: 500}
    ],
    translateY: [
        {value: 200, duration: 500},
        {value: 0, duration: 500}
    ],
    loop: true,
    autoplay: false
});

document.querySelector("#btns .fa-play-circle").onclick = playPause.play;
document.querySelector("#btns .fa-pause-circle").onclick = playPause.pause;

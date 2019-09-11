const gameScope = document.getElementById('gameScope');
const box = "box";
const gameScopeArea = gameScope.offsetWidth * gameScope.offsetHeight;

const boxes = gameScopeArea/1600; // the box is 40px by 40px in size, area is 400 each

const playButton = document.querySelector(".fa-play-circle");
const pauseButton = document.querySelector(".fa-pause-circle");

for(var i=0; i<boxes; i++) {
    const gameBox = document.createElement('div');
    gameBox.classList.add(box);
    gameScope.append(gameBox);
}

const gameBoxes = document.querySelectorAll(`.${box}`);

const  randomBox = () => {
    const random = Math.floor(Math.random() * (gameBoxes.length - 20));
    gameBoxes[random].classList.add("purple");
}

const hideBox = () => {
    gameBoxes.forEach((clearBox) => {
        clearBox.classList.remove("purple");
    });
}

var randomBoxInterval;
var hideBoxInterval;
playButton.addEventListener("click", function() {
    randomBoxInterval = setInterval(randomBox, 1000);
    hideBoxInterval = setInterval(hideBox, 1050);
});

pauseButton.addEventListener("click", function() {
    clearInterval(randomBoxInterval);
    clearInterval(hideBoxInterval);
});
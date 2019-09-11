const gameScope = document.getElementById('gameScope');
const box = "box";
const gameScopeArea = gameScope.offsetWidth * gameScope.offsetHeight;

const boxes = gameScopeArea/400; // the box is 20px by 20px in size, area is 400 each

for(var i=0; i<boxes; i++) {
    const gameBox = document.createElement('div');
    gameBox.classList.add(box);
    gameScope.append(gameBox);
}

const gameBoxes = document.querySelectorAll(`.${box}`);

const  randomBox = () => {
    const random = Math.floor(Math.random() * (gameBoxes.length - 40));
    gameBoxes[random].classList.add("purple");
}

setInterval(randomBox, 10000);
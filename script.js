const gameScope = document.getElementById('gameScope');
const box = "box";


makeBox();
function makeBox() {
    const gameBox = document.createElement('div');
    gameBox.classList.add(box);
    gameScope.append(gameBox);
}
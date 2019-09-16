const gameScope = document.getElementById('gameScope');
const box = "box";
const gameScopeArea = gameScope.offsetWidth * gameScope.offsetHeight;

const boxes = gameScopeArea/1600; // the box is 40px by 40px in size, area is 1600

const playButton = document.querySelector(".fa-play-circle");
const pauseButton = document.querySelector(".fa-pause-circle");
var score = document.getElementById("score");
var countdown = document.getElementById("count");
var gameOn = false;
var gameBox;

//create boxes
for(var i=0; i<boxes; i++) {
    gameBox = document.createElement('div');
    gameBox.classList.add(box);
    gameScope.append(gameBox);
}

const gameBoxes = document.querySelectorAll(`.${box}`);

var counter = 50;

// generate random box & determine if player wins or not
const  randomBox = () => {
    const random = Math.floor(Math.random() * (gameBoxes.length - 20));
    gameBoxes[random].classList.add("purple");
    
    if(counter > 0) {
        counter--;
    } else if(score.innerHTML > 25) {
        alert(`Game over. You won!
        Your score is: ${score.innerHTML}/50.`);
        location.reload();
    }  else if(score.innerHTML < 25){
        alert(`Game over. You lost! 
Your score is: ${score.innerHTML}/50. 
Try again!`);
        location.reload();
    }  else {
        alert(`Game over. It's a draw!
        Your score is: ${score.innerHTML}/50. You can try again to win!`);
        location.reload();
    }

    countdown.innerHTML = counter; 
}

// game score
gameBoxes.forEach((gamebox) => {
    gamebox.addEventListener("click", function() {
        if(gamebox.classList.contains("purple") && gameOn === true) {
            gamebox.classList.remove("purple");
            score.innerHTML = parseFloat(score.innerHTML) + 1;
        } else {
            score.innerHTML = parseFloat(score.innerHTML) + 0;
            alert("resume game to continue playing!");
        }
});
                  });

//hide box after some time 
const hideBox = () => {
    gameBoxes.forEach((clearBox) => {
        clearBox.classList.remove("purple");
    });
}

var randomBoxInterval;
var hideBoxInterval;
playButton.addEventListener("click", function() {
    randomBoxInterval = setInterval(randomBox, 1500);
    hideBoxInterval = setInterval(hideBox, 1600);
    gameOn = true;
});

pauseButton.addEventListener("click", function() {
    clearInterval(randomBoxInterval);
    clearInterval(hideBoxInterval);
    gameOn = false;
});
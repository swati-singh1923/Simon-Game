let  gameSeq = [];
let userSeq = [];
let level = 0;
let gameStart = false;

let startBtn = document.querySelector(".start");
let h2 = document.querySelector("h2");

let btns = ["red", "yellow", "green", "purple"];

startBtn.addEventListener("click", function(){
    if(gameStart == false){
        console.log("Game is started");
        gameStart = true;
    
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 500);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 400);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    //select random btn and color
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log("random index :",randIdx);
    // console.log("random color :",randColor);
    // console.log("random button :",randBtn);
    
    gameSeq.push(randColor);
    console.log(gameSeq);
     
    btnFlash(randBtn);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br> Press start button to restart the game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "#212121";
        }, 300);
        reset();
    }
}

function btnPress() {
    //console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor); 
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}



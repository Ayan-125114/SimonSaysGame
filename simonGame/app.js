let gameSeq = [];
let userSeq = [];

let btns = ["yellow" , "red" , "pink" , "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let h4 = document.querySelector("h4");

let body = document.querySelector("body");

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userBtnFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() *3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        h2.innerHTML = `Game over! Your Score was ${level} <br/> Press any key to start.`;
        h4.innerText = Math.max(level,h4.innerText);
       
        body.classList.add("backColor")
        setTimeout(function(){
             body.classList.remove("backColor");
        } ,250);

        reset();
    }

}

function btnPress(){
    let btn = this;
    userBtnFlash(btn);

    userColor = btn.getAttribute("id")
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    
}

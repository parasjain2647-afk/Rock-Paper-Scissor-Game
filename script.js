let user= document.querySelector("#userScore");
let comp= document.querySelector("#compScore");

let choices=document.querySelectorAll(".choice");
let msg=document.getElementById("msg");

let uscore=0;
let cscore=0;

let userChoice;
let compChoice;

const gen=()=>{
    let arr=["Rock", "Paper", "Scissors"];
    compChoice=arr[Math.floor(Math.random()*3)];
};

let playgame = (userChoice)=>{
    gen();
    if(userChoice===compChoice){
        msg.innerText='Draw';
    }
    else if((userChoice==="Rock" && compChoice==="Scissors")||(userChoice==="Paper" && compChoice==="Rock")||(userChoice==="Scissors" && compChoice==="Paper")){
        uscore++;
        user.innerText=uscore;
        msg.innerText='Win';
    }
    else{
        cscore++;
        comp.innerText=cscore;
        msg.innerText='Loose';
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        userChoice=choice.getAttribute("id");
        console.log("jed");
        playgame(userChoice);
    });
});
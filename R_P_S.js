let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");


const genComputerChoice=()=>{
    const options=["rock","paper","scissor"];
    const random=Math.floor(Math.random()*3);
    return options[random];
}

const drawGame=()=>{
    msg.innerText="Draw!";
    msg.style.backgroundColor="#081321";
}

const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="#green";
    }
    else{
        computerScore++;
        computerScorePara.innerText=computerScore;
        msg.innerText=`You Lost! Computer's ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor="#red";
    }
}

const playGame=(userChoice)=>{
    console.log("userChoice=",userChoice);
    //computerChoice
    const computerChoice=genComputerChoice();
    console.log("computerChoice=",computerChoice);
    if (userChoice===computerChoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==='rock'){
            userWin=computerChoice==='paper'?false:true
        }else if(userChoice==='paper'){
            userWin=computerChoice==='scissor'?false:true;
        }
        else{
            userWin=computerChoice==='rock'?false:true
        }
    showWinner(userWin,userChoice,computerChoice);
    }
}

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    })
})
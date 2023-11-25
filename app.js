//define
var player = document.querySelector('.player');
var computer = document.querySelector('.computer');
var winner = document.querySelector('.winner');
var plPoint = document.querySelector('.playerpoint');
var coPoint = document.querySelector('.computerpoint');
var random;
var computerChoice;
var pPoint= 0;
var cPoint= 0;
var tugsGul = document.querySelector('.yalalt');
// check
console.log(player);
console.log(computer);
console.log(winner);
//uildel 
function play(playerChoice){
    if(playerChoice == 'paper'){
        player.innerText = "Your choice : Paper";
    }else if(playerChoice == "scissors"){
        player.innerText = "Your choice : scissors";
    }else if(playerChoice == "rock"){
        player.innerText = "Your choice : rock";
    }
    // computer choice -> random() --. 0-> paper, 1-> scissors, 2-> rock
    random =  Math.floor(Math.random()*3);
    console.log(random);
    if(random==0){
        computerChoice = "paper";
        computer.innerText ="Computer choice : paper";
    }else if(random==1){
        computerChoice = "scissors";
        computer.innerText ="Computer choice : scissors";
    }else if(random==2){
        computerChoice = "rock";
        computer.innerText ="Computer choice : rock";
    }
    //winner -> player choice==paper, computerChoice==rock
    //rock : scissors, scissors : paper
    if(playerChoice=="paper" && computerChoice=="rock" || playerChoice=="scissors" && computerChoice=="paper" || playerChoice=="rock" && computerChoice=="scissors"){
        winner.innerText = " Result: Player wins!";
        pPoint++;
        plPoint.innerText = "You:" + (pPoint);
    }else if(playerChoice=="paper" && computerChoice=="scissors" || playerChoice=="scissors" && computerChoice=="rock" || playerChoice=="rock" && computerChoice=="paper"){
        winner.innerText = "Result: computer wins!";
        cPoint++;
        coPoint.innerText = "Computer:" + (cPoint);
    }else{
        winner.innerText = " Result: Тэнцсэн";
    }
    
    if(pPoint==10){
        tugsGul.innerText = "Player won!";
        plPoint.innerText = "You:" + 0;
        coPoint.innerText = "Computer: " + 0;
        pPoint=0;
        cPoint=0;
    }else if(cPoint==10){
        tugsGul.innerText = "Computer won!";
        plPoint.innerText = "You:" + 0;
        coPoint.innerText = "Computer: " + 0;
        cPoint=0;
        pPoint=0;
    }else{
        plPoint.innerText = "You:" + pPoint;
        coPoint.innerText = "Computer: " + cPoint;
       
    }
    // 1:
}
function restart(){
    cPoint= 0;
    pPoint=0;
    player.innerText = "Your choice:";
    computer.innerText = "Computer choice: ";
    winner.innerText = "Result: ";
    plPoint.innerText = "You:" + pPoint;
    coPoint.innerText = "Computer: " + cPoint;
}  
//github account neene!!!

    



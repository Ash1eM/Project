let numPrompt=parseInt(prompt("Number of rounds"))
for(let i = 0; i < numPrompt; i++) {
let yourChoice;
yourChoice = prompt("Choose r,p, or s")
// Conditional statements
let tie= 0
let won = 0
let loss = 0
//tie++;
//won++;
//loss++;
let compChoice
compChoice = Math.round(Math.random()*3)
if (compChoice === 0){
    compChoice = "r"
} else if(compChoice === 1){
    compChoice = "p"
} else if (compChoice === 2) {
    compChoice = "s"
}
if (yourChoice=== compChoice){
    alert("It's a tie!");
}  else if (yourChoice==="s" && compChoice==="p", 
 yourChoice==="p" && compChoice==="r",
yourChoice==="r" && compChoice==="s") {
    alert("You won!");
} else (compChoice==="s" && yourChoice==="p",
 compChoice==="p" && yourChoice==="r",
  compChoice==="r" && yourChoice==="s");{
    alert("You lost!");
} 
 } 
alert("You won " +  + " rounds "+ "," + " You lost " +  +" rounds" +"," + " You tied " + + " rounds")
console.log(numPrompt);
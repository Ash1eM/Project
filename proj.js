let numPrompt=parseInt(prompt("Number of rounds"))
for(let i = 0; i < numPrompt; i++) {
let yourChoice;
yourChoice = prompt("Choose r,p, or s")
// Conditional statements
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
    tie=0
    tie++;
    alert("It's a tie!")
}  else if (yourChoice==="s" && compChoice==="p", 
 yourChoice==="p" && compChoice==="r",
compChoice==="r" && compChoice==="s") {
    let won =0
    won++;
    alert("You won!")
} else (yourChoice==="s" && compChoice==="p",
 yourChoice==="p" && compChoice==="r",
  compChoice==="r" && compChoice==="s");{
    alert("You lost!");
    let loss= 0
    loss++;
}
}
console.log(numPrompt);
alert("You won "+ won + " rounds " + "," + " You lost " + loss +" rounds" +"," + " You tied " + tie + " rounds")

numPrompt =prompt("Number of rounds")

let yourChoice;
yourChoice = prompt("r,p, or s")
// Conditional statements
let compChoice
compChoice = Math.round(Math.random()*3)
if (compChoice === 0){
    compChoice = "r"
} else if(compChoice === 1){
    compChoice = "p"
} else (compChoice === 2);{
    compChoice = "s"
}
if (yourChoice=== compChoice){
    alert("It's a tie")
} else if (yourChoice> compChoice) {
    alert("Winner")
} else (yourChoice < compChoice); {
    alert("Loser")
}


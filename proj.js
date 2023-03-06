numPrompt =prompt("Number of rounds")
compChoice = Math.round(Math.random()*3)

let yourChoice
yourChoice = prompt("r,p, or s")
// Conditional statements
let compChoice
if (compChoice === 0){
    compChoice = "r"
} else if(compChoice === 1){
    compChoice = "p"
} else (compChoice === 2);{
    compChoice = "s"
}
if (yourChoice=== compChoice){
    alert("Tie")
} else if (yourChoice> compChoice) {
    alert("Winner")
} else (yourChoice < compChoice); {
    alert("Loser")
}


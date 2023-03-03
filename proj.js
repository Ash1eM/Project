// Prompt user # of rounds w integer
let yourChoice
yourPrompt =prompt("Number of rounds")
randNum = Math.round(Math.random()*3)
// Loop through rounds and prompt
let integer = parseInt(yourPrompt, 10);
yourChoice = prompt("r,p, or s")
// Conditional statements
if (randNum=== 0){
    compChoice = "r"
} else if(randNum=== 1){
    compChoice = "p"
} else (randNum=== 2);{
    compChoice = "s"
}
if (yourChoice=== compChoice){
    alert("Winner")
} else if (yourChoice> compChoice) {
    alert("loser")
} else (yourChoice < compChoice); {
    alert("tie")
}
console.log(integer + yourChoice + compChoice)
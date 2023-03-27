let numPrompt 
numPrompt=parseInt(prompt("Number of rounds"))
let yourChoice;
yourChoice = prompt("Chose r,p, or s")
// Conditional statements
let compChoice
compChoice = Math.round(Math.random()*3)
for(let i = 0; i < 100; i++) {
if (compChoice === 0){
    compChoice = "r"
} else if(compChoice === 1){
    compChoice = "p"
} else (compChoice === 2);{
    compChoice = "s"
}
if (yourChoice=== compChoice){
    alert("It's a tie!")
}  if (yourChoice==="p") {
    if (compChoice==="s")
    alert("Loser");
} else {
    alert("Winner!");
} if (yourChoice=== "r") {
    if (compChoice==="p")
    alert("Loser");
} else {
    alert("Winner!")
}if (yourChoice=== "s") {
    if (compChoice==="r")
    alert("Loser");
}
}



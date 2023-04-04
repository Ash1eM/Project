let numPrompt 
numPrompt=parseInt(prompt("Number of rounds"))
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
    alert("It's a tie!")
}  if (yourChoice==="s") {
    compChoice==="p"
    alert("You won!")
} else {
    alert("You lost!");
} if (yourChoice=== "r") {
    compChoice==="p"
    alert("You lost!")
}else {
    alert("You won!")
}
if (yourChoice=== "r") {
    compChoice==="s"
    alert("You won!")
} else {
    alert("You lost!")
}
}
console.log(numPrompt);

    let won = 0
    won++;
    let loss = 0
    loss++;
    let tie = 0
    tie++;
    alert("You won"+ " " + won + " " + "rounds" + "," + "You lost" + " " + loss + " " +"rounds" +"," + "You tied" +" " + tie +" "+ "rounds")

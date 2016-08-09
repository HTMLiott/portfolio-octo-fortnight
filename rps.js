
var userChoice = prompt("Rock, Paper, or Scissors? ...choose wisely.").toLowerCase();
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} document.write("Promptsy: " + computerChoice);

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        alert("It's a tie... Refresh the page to try again! ");
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            alert("You Wins!");
        }
    else {
        alert("Promptsy Wins");
    }
}
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            alert("You Wins!");
        }
    else {
        return "Promptsy Wins!";
    }
}
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            alert("Promptsy Wins!");
        }
    else {
        alert("You wins!");
    }
}
    else if (choice1 !== "rock", "paper", "scissors") {
        alert("Hey. Do you want to play, or not? Refresh the page to play, and this time try choosing Rock, Paper, or Scissors!");
    }
};

compare(userChoice, computerChoice);
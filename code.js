function countdownTimerV1(){
    console.log("countdownTimerV1() begin");
    var counter = 50;
    document.getElementById("countdownDisplay").innerHTML = counter;
    console.log<(counter);
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = counter;
        console.log<(counter);
    }, 5000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = counter;
        console.log<(counter);
    }, 10000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = counter;
        console.log<(counter);
    }, 15000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = counter;
        console.log<(counter);
    }, 20000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = counter;
        console.log<(counter);
    }, 25000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = counter;
        console.log<(counter);
    }, 30000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = counter;
        console.log<(counter);
    }, 35000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = counter;
        console.log<(counter);
    }, 40000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = counter;
        console.log<(counter);
    }, 45000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdownDisplay").innerHTML = "Blastoff";
        console.log<(counter);
    }, 50000)
}

var wins = 0;
var losses = 0;
var ties = 0;

function playCraps(){ //this basiclly creats a function that we are able to write the code to tell what the die's identify as and what should happne when you click play craps
    console.log("playCraps() started");//this shows that when you go to play craps this is where it starts
    var die1; //identifies Die 1
    var die2; //identifies Die 2
    die1 = Math.ceil(Math.random() * 6); //shows how Die 1 should count
    die2 = Math.ceil(Math.random() * 6); //shows how Die 2 should count
    console.log("Die1 = " + die1);
    document.getElementById("die1Res").innerHTML = die1;
    console.log("Die2 = " + die2);
    document.getElementById("die2Res").innerHTML = die2;
    var sum = die1 + die2; //create sum from die 1 and die 2
    if (sum == 7 || sum == 11) { //see if sum = 7 or 11
        document.getElementById("crapsRes").innerHTML = "<H1> Craps you lose!!! </H1>"; //Lines 63-66 says that if you get a loseing pair of numbers then it will show you "craps you lose"
        losses++;
        document.getElementById("loseRes").innerHTML = losses;
        console.log("Craps, You lose!!!");
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsRes").innerHTML = " <H1> Huzzh, You win!!! </H1>"; //Lines 68-71 will show that if you got a winning pair of numbers it will show you "huzza, you win"
        wins++;
        document.getElementById("winRes").innerHTML = wins;
        console.log("Huzzah, You win!!");
    } else
        document.getElementById("crapsRes").innerHTML = "You Did not lose or win. Please try again."; //Lines 73-75 will show you if you got any tied numbers it will tell you to play again
    ties++;
    document.getElementById("tieRes").innerHTML = ties;
    console.log("You Did not lose or win. Please try again.");
} 
//Setting variables for scoring, wins, losses
$( document ).ready(function(){
var score = 0;
var wins = 0;
var losses = 0;


//Creating a random number between 12-120 for the user to add up to 
var randomNumber = Math.floor(Math.random()*101+19);

$("#random-number").html(randomNumber);



//Setting up functions for wins/losses
function youWon(){
	alert("Winner winner chicken dinner!");
	wins++
	$("#wins").text(wins);
	reset()
}

function youLose(){
	alert("Loser loser nyquil boozer!")
	losses++
	$("#losses").text(losses);
	reset()
}

//Assigning random values, setting up clicks, adding value of each click of The Smiths
var btn1Val = Math.floor(Math.random() * 12) + 1;
$('#btn1').on("click", function(){
	score = btn1Val + score
	console.log(score)
	$("#score").text(score);
	if (score == randomNumber) {
	youWon();
}
	else if (score > randomNumber) {
	youLose();
	}
});

var btn2Val = Math.floor(Math.random() * 12) + 1;
$('#btn2').on("click", function(){
	score = btn2Val + score
	$("#score").text(score);
	console.log(score)
	if (score == randomNumber) {
	youWon();
}
	else if (score > randomNumber) {
	youLose();
	}
});

var btn3Val = Math.floor(Math.random() * 12) + 1;
$('#btn3').on("click", function(){
	score = btn3Val + score
	$("#score").text(score);
	console.log(score)
	if (score == randomNumber) {
	youWon();
}
	else if (score > randomNumber) {
	youLose();
	}
});

var btn4Val = Math.floor(Math.random() * 12) + 1;
$('#btn4').on("click", function(){
	score = btn4Val + score
	$("#score").text(score);
	console.log(score)
	if (score == randomNumber) {
	youWon();
}
	else if (score > randomNumber) {
	youLose();
	}

});

//Setting up reset function
function reset(){
	randomNumber = Math.floor(Math.random()*101+19);
	$('#random-number').text(randomNumber);
	btn1Val = Math.floor(Math.random() * 12) + 1;
	btn2Val = Math.floor(Math.random() * 12) + 1;
	btn3Val = Math.floor(Math.random() * 12) + 1;
	btn4Val = Math.floor(Math.random() * 12) + 1;
	score = 0;
	$("#score").text(score);
}

});


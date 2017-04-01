//Define the time you want to elapse before the timer runs out
var time = 61;


function startGame(){	
	
	$("#submitButton").on("click", function(){
			//Fairly self-explantory. If the right radio buttons are pressed, then you win the game.
			//The right radio buttons are determined by their index number in the array of radio buttons.
			
			var answer1 = 'input:radio[name="question1"]';
			var answer2 = 'input:radio[name="question2"]';
			var answer3 = 'input:radio[name="question3"]';
			
			if ($(answer1)[0].checked === true && $(answer2)[2].checked === true && $(answer3)[3].checked === true){	
					alert("You got everything right!");
			} 
				else if($(answer1)[0].checked === true && $(answer2)[2].checked === true && $(answer3)[3].checked === false){
					alert("You got 2 questions right!");
	
				}
				else if($(answer1)[0].checked === true && $(answer2)[2].checked === false && (answer3)[3].checked === false){
					alert("You got 1 question right!");
					}
				else if($(answer1)[0].checked === true && $(answer2)[2].checked === false && $(answer3)[3].checked === true){
					alert("You got 2 questions right!");}
				else if($(answer1)[0].checked === false && $(answer2)[2].checked === true && $(answer3)[3].checked === true){
					alert("You got 2 questions right!");}
				else if($(answer1)[0].checked === false && $(answer2)[2].checked === false && $(answer3)[3].checked === true ){
					alert("You got 1 question right!");}
					else{
					alert("Sorry, you didn't get any questions right");
				}
			});

	//This sets the timer, and if time runs out, run the answers() function.
		var setTime = setInterval(function() {
			if (time === 0){
				alert("you lose");
				location.reload();
			}
			//If the time hasn't run out, keep running down the clock
			else{
			time--;		
			//Display the timer to #seconds div
			$('#seconds').html(time);}			
		},1000);
}



startGame();


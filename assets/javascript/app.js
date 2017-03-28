//Define the time you want to elapse before the timer runs out
var time = 61;


function startGame(){	

		
		$("#submitButton").on("click", function answers(){
			//Fairly self-explantory. If the right radio buttons are pressed, then you win the game.
			//The right radio buttons are determined by their index number in the array of radio buttons.
			
			
			if ($('input:radio[name="question1"]')[0].checked === true && $('input:radio[name="question2"]')[2].checked === true && $('input:radio[name="question3"]')[3].checked === true) {	

				alert("you win");
				//this refreshes the page.
				location.reload();
				//empties the radio buttons
				$(":radio").prop("checked", false)
			}
			//If you don't press the right radio buttons, you lose.
			else {
				alert("you lose");
				location.reload();
				$(":radio").prop("checked", false)
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


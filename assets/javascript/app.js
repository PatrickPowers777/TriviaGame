
var time = 60;


function startGame(){	

		function reset() {

		}
		
		function answers(){
			
			if ($('input:radio[name="question1"]')[0].checked === true && $('input:radio[name="question2"]')[2].checked === true && $('input:radio[name="question3"]')[3].checked === true) {	

				alert("you win");
				location.reload();
				$(":radio").prop("checked", false)
			}

			else {
				alert("you lose");
				location.reload();
				$(":radio").prop("checked", false)
			}


		
		}




		var setTime = setInterval(function() {
			if (time === 0){
				clearInterval(setTime);
				answers();
			}
			else{
			time--;
			$('#seconds').html(time);}			
		},1000);
	
}

startGame();


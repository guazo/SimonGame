var userClickedPattern = [];
var userChosenColour = "";
var gamePattern = [];
var level = 0;
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()];

function nextSequence() {
	let randomNumber = Math.floor(Math.random() * 4);
	level++;
	return randomNumber;
}
    function playSound(name) {
	    var audioUser = new Audio("sounds/" + name + ".mp3");
	    audioUser.play();
    }
        function fadeFunction(name) {
	        $("#" + name)
		    .fadeOut(300)
		    .fadeIn(300);
        }
                function animatePress(currentColour) {
	                setTimeout(function () {
		                $("#" + currentColour)
			            .removeClass("pressed")
			            .addClass("btn " + currentColour);
	                }, 300);
                }
                    function checkAnswer(currentLevel) {
	                if (gamePattern.length === userClickedPattern.length) {
		                        if (JSON.stringify(userClickedPattern) === JSON.stringify(gamePattern)) {
			                            alert("exito!!!");
			                            userClickedPattern = [];
			                            setTimeout(function () {
				                            randomChosenColour = buttonColours[nextSequence()];
				                            playSound(randomChosenColour);
				                            fadeFunction(randomChosenColour);
				                            gamePattern.push(randomChosenColour);
				                            $("h1").text("Level " + level);
			                            }, 1000);
		                            } else if (userClickedPattern.length == gamePattern.length && userClickedPattern != gamePattern){
			                            playSound("sounds/wrong.mp3");
                                        console.log("fallaste!!!");
                                        $("body").addClass("game-over");
                                        setTimeout(function () {
                                            $("body").removeClass("game-over"); // quita la clase "game-over" después de 300 milisegundos
                                            }, 300);
   
			                            userClickedPattern = [];
			                            gamePattern = [];
			                            $("h1").text("Game Over, Press any key to continue... ");
			                            level = 0;
		                            }
	                    }
                    }
                    function startOver(){
                        level=0;
                        gamePattern=[];
                        userClickedPattern=[];
                    }

                $(".btn").on("click", function () {
	                var $elemento = $(this); // selecciona el elemento que fue presionado
	                $elemento.addClass("pressed"); // añade la clase "pressed"
	                setTimeout(function () {
		            $elemento.removeClass("pressed"); // quita la clase "pressed" después de 100 milisegundos
	                }, 100);
	                playSound(this.id);
	                userChosenColour = this.id;
	                userClickedPattern.push(userChosenColour);
	                checkAnswer(this.id);
                }
);
    $(document).on("keydown", function (event) 
                    {
	                    if (event.key == "a" || event.key == "A") 
                        { // verifica si la tecla presionada fue 'a' o 'A'
                            startOver();
		                        setTimeout(function () 
                                {                          
			                        nextSequence();
			                        $("h1").text("Level " + level);
			                        playSound(randomChosenColour);
			                        fadeFunction(randomChosenColour);
			                        gamePattern.push(randomChosenColour);
		                        }, 500);
	                    }
                    }
                );
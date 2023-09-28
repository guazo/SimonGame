var userClickedPattern=[];
var gamePattern=[];
var level =0;
var buttonColours =["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()];

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
    level++;
}
function playSound(name){
    var audioUser = new Audio('sounds/'+name+'.mp3');
    audioUser.play();
}
function fadeFunction(name){
    $('#'+name).fadeOut(300).fadeIn(300);
}
function animatePress(currentColour){
    setTimeout(function() {
        $('#'+currentColour).removeClass("pressed").addClass("btn "+currentColour); 
    }, 300);
}
function checkAnswer(currentLevel){
console.log(currentLevel);

}

$(".btn").on("click", function(){
    var $elemento = $(this); // selecciona el elemento que fue presionado

    $elemento.addClass("pressed"); // añade la clase "pressed"

    setTimeout(function() {
        $elemento.removeClass("pressed"); // quita la clase "pressed" después de 100 milisegundos
    }, 100);
    playSound(this.id);
    checkAnswer(this.id)
});

$(document).on('keydown', function(event) {
    if (event.key == 'a' || event.key == 'A') { // verifica si la tecla presionada fue 'a' o 'A'
        // aquí puedes llamar a las funciones que quieras ejecutar
        
    $("h1").text("Level "+ level);
        nextSequence();
    playSound(randomChosenColour);
    fadeFunction(randomChosenColour)
    gamePattern.push(randomChosenColour);

    }
    
});




console.log("Color de la maquina: "+gamePattern);
console.log("Este es el valor de elemento: "+ elemento);
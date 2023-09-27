var userClickedPattern=[];
var gamePattern=[];
var userClickedPattern=[]
var buttonColours =["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()];
var gamePattern=[];

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
return randomNumber;
}
function playSound(name){
    var audioUser = new Audio('sounds/'+name+'.mp3');
    audioUser.play();
}
function fadeFunction(name){
    $('#'+name).fadeOut(300).fadeIn(300);
}


playSound(randomChosenColour);
fadeFunction(randomChosenColour)
gamePattern.push(randomChosenColour);

var userChosenColour=$("div").on("click", function(){
playSound(this.id);
fadeFunction(this.id);
       return this.id;
})
userClickedPattern.push(userChosenColour);
console.log("Color de la maquina: "+gamePattern); 

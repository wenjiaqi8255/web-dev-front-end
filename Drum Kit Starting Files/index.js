// for(i=0;i<drumNumber;i++){
// clickButton[i].addEventListener("click",function(){
//     switch
// })
// }


// var wDrum=new Audio ('sounds/tom1.mp3');
// wDrum.play();


// var tom3=new Audio('');
// var tom4=new Audio('');
// var tom5=new Audio('');
// var tom6=new Audio('');
// var tom7=new Audio('');



// var tom1=new Audio("./sounds.tom-1.mp3");
// var tom2=new Audio("./sounds.tom-2.mp3");

// function playMusic (drumType){
//     var drumType=new Audio("./sounds.tom-1.mp3");
//     drumType.play();
// }

// var clickButton = document.querySelectorAll("button");
// var drumNumber=document.querySelectorAll(".drum").length;


// for(i=0;i<drumNumber;i++){
//     clickButton[i].addEventListener("click",function(){
//         var screenRecorder = document.querySelector("button").innerHTML;
//     })
// }
    
// switch(screenRecorder){
//     case "w": playMusic(tom1);
//     case "a": playMusic(tom2);
//     default: console.log(screenRecorder);
// }

// document.addEventListener("keydown",function(){
//     var keyboardRecorder += ` ${e.code}`;
// });

// switch(keyboardRecorder){
//     case "w": playMusic(tom1);
//     case "a": playMusic(tom2);
//     default: console.log(keyboardRecorder);

// }

// function playMusic(drumType) {
//     var audio = new Audio("./sounds." + drumType + ".mp3");
//     drumType.play();
// }


//导入资源
var tom1=new Audio('sounds/tom-1.mp3');
var tom2=new Audio('sounds/tom-2.mp3');
var tom3=new Audio('sounds/tom-3.mp3');
var tom4=new Audio('sounds/tom-4.mp3');
var kick=new Audio('sounds/kick.mp3');
var crash=new Audio('sounds/crash.mp3');
var snare=new Audio('sounds/snare.mp3');


//接受点击
var clickButton = document.querySelectorAll("button");

for (var i = 0; i < clickButton.length; i++) {
    clickButton[i].addEventListener("click", function () {
        var recorder = this.innerHTML;
        playMusic(recorder);
        buttonAnimation(recorder);
    });
}

//接受键盘
document.addEventListener("keydown", function (event) {
    var recorder = event.key;
    playMusic(recorder);
    buttonAnimation(recorder);
});

//统一的播放
function playMusic(recorder){
switch (recorder) {
    case "w":
        tom1.play();
        break;

    case "a":
        tom2.play();
        break;

    case "s":
        tom3.play();
        break;

    case "d":
        tom4.play();
        break;

    case "j":
        kick.play();
        break;
        
    case "k":
        crash.play();
        break;

    case "l":
        snare.play();
        break;       
                    
        
    default:
        console.log(keyboardRecorder);
}
}

//动画

function buttonAnimation(recorder){
    var buttonPressed=document.querySelector("."+recorder);
    buttonPressed.classList.add("pressed");
    setTimeout( function(){
        buttonPressed.classList.remove("pressed");
    }, 100);
}
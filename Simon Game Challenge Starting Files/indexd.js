$("body").keypress(function(event) {
    start();
    $("#level-title").text("Congratulations! You Win!");

});

function start() {
var count = 1;
var puzzleSeries=[];
$("h1").text("level " + count);
$("body").removeClass("game-over");
var userStatus=true;
//如果还活着，进入下一关，如果死了，结束，这个判断在主函数里做，不在分别的函数里做
    do {
        for(count=1;count<3;count++){
            puzzleSeries=newLevel(count, puzzleSeries);
            userStatus=rightOrWrong(count, puzzleSeries, userStatus);
        }
        
    } while (userStatus==ture);
wrongMode();

}


//新生成关卡，验证完毕
function newLevel(currentLevel,puzzleSeries){
    $("h1").text("level "+currentLevel);
    var currentPuzzle;
    var randomNum = Math.floor(Math.random() * 4)+1;
    switch (randomNum) {
        case 1:
            currentPuzzle="green";
            break;
        case 2:
            currentPuzzle="red";
            break;
        case 3:
            currentPuzzle="yellow";
            break;
        case 4:
            currentPuzzle="blue";
            break;
        default:
            break;
    }

    puzzleSeries.push(currentPuzzle);

    blink(currentPuzzle);
    makeSound(currentPuzzle);

    return puzzleSeries;
}


function rightOrWrong(count,puzzleSeries,userStatus){
var writeReader=0;
var userInput;

if (userStatus==true){

    $(".btn").on("click",function(){
        while(writeReader<(puzzleSeries.length)&&(userStatus==true)){
            userInput=this.id;
            writeReader++;

            if(userInput==puzzleSeries[writeReader]){
                //播放正确声音
                makeSound(userInput);
            }
            else{
                userStatus=false;
            }
        }
    });
}
return userStatus;

}

// function calculator(userInput, userStatus, writeReader, puzzleSeries) {
//     if(userInput==puzzleSeries[writeReader]){

//         //如果第一位一样，计数增加
//         writeReader++;
//         userStatus=true;
//         //播放正确声音
//         makeSound(userInput);
//     }
//     else{
//         userStatus=false;
//     }       return userStatus; // Add the return statement here
// }

function wrongMode() {
  count = 1;
  puzzleSeries = [];
  makeSound("wrong");
  $("body").addClass("game-over");
  $("#level-title").text("Not bad, try again");
  $("body").keypress(function(event) {
    start();
  });
}

$(".btn").on("click", function() {
  blink(this.id);
});

function blink(x){
$("#"+x).addClass("pressed");
setTimeout(() => {
    $("#"+x).removeClass("pressed");
}, 100);

}   


//sound
var green= new Audio("./sounds/green.mp3");
var red= new Audio("./sounds/red.mp3");
var yellow= new Audio("./sounds/yellow.mp3");
var blue= new Audio("./sounds/blue.mp3");
var wrong= new Audio("./sounds/wrong.mp3")

function makeSound(id) {
switch (id) {
    case "green":
        green.play();
        break;
    case "red":
        red.play();
        break;
    case "yellow":
        yellow.play();
        break;
    case "blue":
        blue.play();
        break;
    case "wrong":
        wrong.play();
    default:
        break;
}

}  
var currentLevel = 1;
var puzzleSeries=[];//放在外面，之前在start里
var started=false;
var userStatus=true;
var userInput;
var count=0;
var checkAnswer=false;

$("body").keypress(function() {
    if(!started&&userStatus){//如果已经死了，开始等待这个keypress，触发start，给一条命。
        //这个判断放在主里，因为在start里无法判断自己的状态！
        //这个原来我是放在点击后的，这样会造成逻辑问题
        $("h1").text("level "+currentLevel);//hint：把标题展示放在主程序里，之前是放在new里
        newLevel();
        started=true; //把userStatus状态设置成true后可以跳出这个if！虽然还是会持续监听
        // $("#level-title").text("Congratulations! You Win!");
        
    }
});

//妈的，这个不是主流程，因为监听的是键盘


//原设计：做成循环，每次循环中用rightOrWrong函数检查是否正确，直到用户输完所有答案
//问题：循环瞬间就完成了，无法等待用户输入答案
//原因：循环本质上来说是已经知道要发生什么了，只是自动化的一种方式
//      在一段代码中，并不会等待监听事件的发生，才会往下走
//      而是并行发生
//下一次：可以把它每次循环都写出来

//参考答案：rightOrWrong放在监听中
//效果：因为是全局的，只有触发了才执行一次之后的函数
//      因为并不知道什么时候才会触发，会触发几次

$(".btn").click(function () { 
    if (started&&userStatus){
        userInput=this.id;
        rightOrWrong();
        if(count===(puzzleSeries.length)){//问题在这里，需要用===来判断，而不是=
            currentLevel++;
            count=0;
            // newLevel();
            setTimeout(function () {
                newLevel();
              }, 1000);
        }
    }
});
function rightOrWrong(){

    if(userInput==puzzleSeries[count]){
        //播放正确声音

        makeSound(userInput);

        count++;

    }
    else{
    
        wrongMode();
    }
}
//原设计如下
// function start() {
//     $("body").removeClass("game-over");
//     var userStatus=true;
//     //如果还活着，进入下一关，如果死了，结束，这个判断在主函数里做，不在分别的函数里做
//         do {
//             for(count=1;count<3;count++){
//                 puzzleSeries=newLevel(puzzleSeries);
//                 userStatus=rightOrWrong(count, puzzleSeries, userStatus);
//             }
            
//         } while (userStatus==ture);
//     wrongMode();

// }


// function rightOrWrong(count,puzzleSeries,userStatus){
//     var writeReader=0;
//     var userInput;
    
//     if (userStatus==true){
    
//         $(".btn").on("click",function(){
//             while(writeReader<(puzzleSeries.length)&&(userStatus==true)){
//                 userInput=this.id;
//                 writeReader++;
    
//                 if(userInput==puzzleSeries[writeReader]){
//                     //播放正确声音
//                     makeSound(userInput);
//                 }
//                 else{
//                     userStatus=false;
//                 }
//             }
//         });
//     }
//     return userStatus;
    
//     }

//新生成关卡，验证完毕
function newLevel(){ //这里不用传参puzzleSeries，因为这个是全局的，在这个函数里改动之后会全局更新
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

    // blink(currentPuzzle);
    $("#" + currentPuzzle).fadeIn(100).fadeOut(100).fadeIn(100);

    makeSound(currentPuzzle);

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
    userStatus=false;
    currentLevel = 1;
    makeSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Not bad, try again");
}

//重新开始
$("body").keypress(function () { 
    if (started&&!userStatus){
        $("body").removeClass("game-over");
        $("#level-title").text("Press A Key to Start");
        started=false;
        userStatus=true;
        currentLevel = 1;
        puzzleSeries=[];
        started=false;
        userInput;
        count=0;
    }});

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

var isPalindrome = function(x){
    var y = 0;
    while(x>0){
        y = y*10 + x % 10;
        x /= 10;
        x -= 0.5;
        x = Math.round(x);
    }
    return y;
}

function answerResponse(){
    var num = document.getElementById("input").value;
    var answer = document.getElementById("answer");
    answer.value = isPalindrome(num);
}
document.getElementById('startButton').addEventListener("click", function(){ answerResponse(); });

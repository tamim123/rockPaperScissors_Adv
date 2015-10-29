var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    var num=Math.floor(Math.random ()*3)
    num =1,2,0
    if(num==="1"){
        return "paper"
    }
    else if(num==="2"){
        return "rock"
    }
    else if(num=="0"){
        return "siccors"
    }
    //TODO: randomly choose between 'rock', 'paper', or 'scissors'
}

// This function picks the winner
function pickWinner(userValue, aiValue) {

    
if(userValue===aiValue){
    return "drow"
    }
    else if(userValue=="paper"&aiValue=="rock"){
    return "user"
    }
    else if(userValue=="scissor"&aiValue=="rock"){
        return "ai"
    }
    else if(userValue=="rock"&aiValue=="scissor"){
        return "user"
    }

    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
}

// This function sets the scoreboard with the correct points
function setScore() {

}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function(){
$(".token").click(evaluate);
 
});

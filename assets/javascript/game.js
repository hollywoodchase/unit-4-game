$(document).ready(function() {
    var cumuScore = 0;
    var randomNumber = (Math.floor(Math.random()*101)+19);
    var gameOver = false;
    var wins = 0;
    var losses = 0;
    var arrCrystals = [];
    
    $('#wins-count').text(wins);
    $('#losses-count').text(losses);

    $('#random-space').append(randomNumber);
    
    $('.crystals').each(function(crystal) {
        var points = (Math.floor(Math.random()*11)+1);
        arrCrystals.push(points);
    });
    
    $('.crystals').on('click', function(event) {
        console.log(gameOver);
        if (gameOver) {
            cumuScore = 0;
            $('#score-space').text(cumuScore);
            $('#final-space').text("");
            $('#random-space').text("");
            gameOver=false;
            randomNumber = (Math.floor(Math.random()*101)+19);
            $('#random-space').append(randomNumber);
        } else {
            accumulateScore(event);
        }
    });
    
    function accumulateScore(event) {
        cumuScore += arrCrystals[event.currentTarget.id.charAt(1)-1];
        $('#score-space').text(cumuScore);
        if (cumuScore > randomNumber) {
            $('#final-space').text("You lose!");
            gameOver = true;
            losses++;
            $('#losses-count').text(losses);
        } else if (cumuScore === randomNumber) {
            $('#final-space').text("You win!");
            gameOver = true;
            wins++;
            $('#wins-count').text(wins);
        }
        
    }
});




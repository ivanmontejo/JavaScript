var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 1;



/* document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector('#scoore-0').textContent;
console.log(x); */

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';



document.querySelector('.btn-roll').addEventListener('click', function (){

    //1. Ramdon number
    dice = Math.floor(Math.random() * 6) + 1;
    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block'; 
    diceDOM.src = 'dice-' + dice + '.png';
    //3. Update the round score If de rolled number was Not a 1
    if( dice !== 1){
     roundScore += dice;
     document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        //next player
        nextPlayer();
     /* activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     roundScore = 0;
     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';

     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');

     /* document.querySelector('.player-0-panel').classList.remove('active');
     document.querySelector('.player-1-panel').classList.add('active'); */

     /* document.querySelector('.dice').style.display = 'none'; */
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
 //Add current score to global score
scores[activePlayer] += roundScore;
//scores[activePlayer] = scores[activePlayer] + roundScore;

 //update the UI 
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

 //check if player won the game
if(scores [activePlayer] >= 20){
 document.querySelector('#score-' + activePlayer).textContent = 'Winner!';
 document.querySelector('.dice').style.display ='nome';
 document.querySelector('.player-' + activePlayer + '-panel').classList.add('Winner');
 document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
}else{
    //next player
 nextPlayer();
}

});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
   
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
   
    /* document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active'); */
   
    document.querySelector('.dice').style.display = 'none';
}
/* if( activePlayer === 0 ){
    activePlayer = 1;
}else{
    activePlayer = 0;
} */
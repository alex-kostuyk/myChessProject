let opponentType = sessionStorage.getItem('EnemyType');
let players = {
    you:"you",
    opponent:"Opponent"
}
let opponentIsLocal = opponentType===LOCAL_OPPONENT;
let sides = {}

sides[players.you] = (getRandomInt(2)==0?TURN.white:TURN.black);
sides[players.opponent] = sides[players.you]==TURN.white?TURN.black:TURN.white;


const SHOW_BOARD_REVERSE = sides[players.you]!==TURN.white;

function NormalizeIndex(index)
{
    if(SHOW_BOARD_REVERSE)
        return 7-index; 
    else
        return index;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
function MakeRandomMove(board,color)
{
    let allPosibleMove = [];

    for (let row = 0; row < board.length; row++) 
        for (let colum = 0; colum < board[0].length; colum++)
             {
               if(getFigureColor(board[row][colum])==color)
                    if(GetPosibleMoves(board,{row,colum}).length>0)
                        allPosibleMove.push({row,colum});
            }

    let randomIndex = getRandomInt(allPosibleMove.length);
        OnCellDown(boardTableView.rows[allPosibleMove[randomIndex].row].cells[allPosibleMove[randomIndex].colum]);

    let posibleMoves = GetPosibleMoves(board,{row:allPosibleMove[randomIndex].row,colum:allPosibleMove[randomIndex].colum});
    let to = posibleMoves[getRandomInt(posibleMoves.length)];
    
        OnCellDown(boardTableView.rows[to[0]].cells[to[1]]);   
}
function CheckForTurn()
{
        try {
            if(sides[players.you]!=turn)
                MakeRandomMove(activeBoard,sides[players.opponent]);
          } catch (err) {
            clearInterval(interval);
            return;     
          }
}
let interval;
if(opponentType==BOT_OPPONENT)
{
    interval = setInterval(CheckForTurn, 1000);
}
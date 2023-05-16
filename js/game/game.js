let lastMove = null;
let popUPText;
let enPassantMove = null;
let castleMove = null;
let allMoves=[];
let posibleMoves = null;
let additionalOffset = -30;
let gameActive = true;
Init()
function Init()
{  
    activeBoard = SHOW_BOARD_REVERSE?START_BOARD.reverse():START_BOARD;
    
    boardTableView = document.getElementById(TABLE_ID);
    popUPText = document.getElementById(POPUP_WINDOW_HEADER_TEXT_ID);
    UpdateView(START_BOARD);
    windowResize();
    if(sides[players.you]==TURN.white)
        timerYou.Start()
    else
        timerOpponent.Start();
}

async function OnCellDown(cell)
{
    let row = cell.parentElement.rowIndex;
    let colum = cell.cellIndex;
   
    if(getFigureColor(activeBoard[row][colum]) != turn && getFigureColor(selectedFigure.type) == turn)
    {

        if(hasSameRow(posibleMoves,[row,colum]))
        {
            ClearPosibleMoves();
            await MakeMove(row,colum);
            UpdateView(activeBoard);
            
            UpdateEatenPiecesView();
            toggleTimer();
            
            if(IsStalemate(activeBoard,turn))
            {
                ActivatePopUp("draw");
            }
            if(IsCheckMate(activeBoard,turn))
            {  
               SetGameWinner();
            }

            return;
        }
    }
 
    DeselectFigure();

    SelectFigure(cell,row,colum);

    if(getFigureColor(activeBoard[row][colum]) == turn)
        ShowPosibleMoves();

}

async function MakeMove(row, colum)
{
    if(getFigureType(selectedFigure.type)==CHESS_FIGURE.colorless.pawn&&row == (turn==TURN.white?(SHOW_BOARD_REVERSE?7:0) : (SHOW_BOARD_REVERSE?0:7)))
    {
        activeBoard[selectedFigure.row][selectedFigure.colum] = await AskForRaisePawn();     
    }

    if(enPassantMove!=null&&enPassantMove[0]==row&&enPassantMove[1]==colum)
    {
        let pawnRow = row+ (turn == TURN.white ? (SHOW_BOARD_REVERSE?-1:1):(SHOW_BOARD_REVERSE?1:-1));
        eatenPieces.push(activeBoard[pawnRow][colum]);
        activeBoard[pawnRow][colum] = CHESS_FIGURE.empty;
    }
    if(castleMove!=null&& castleMove.length != 0 && getFigureType(selectedFigure.type)==CHESS_FIGURE.colorless.king)
    {
        castleMove.forEach(move=>{
            if(move[0]==row&&move[1]==colum)
            {
                activeBoard[row][(colum>4? 7 : 0)] = CHESS_FIGURE.empty;
                activeBoard[row][colum + (colum>4? -1 : 1)] = turn + CHESS_FIGURE.colorless.rook;
            }
      });
    }
    if( activeBoard[row][colum]!=CHESS_FIGURE.empty)
    {
        eatenPieces.push(activeBoard[row][colum]);
    }
    activeBoard[row][colum] = activeBoard[selectedFigure.row][selectedFigure.colum];
    activeBoard[selectedFigure.row][selectedFigure.colum] = CHESS_FIGURE.empty;

    lastMove = new LastMove([selectedFigure.row,selectedFigure.colum],[row,colum],activeBoard[row][colum]);
    allMoves.push(lastMove);
    turn = turn == TURN.white? TURN.black : TURN.white;
    enPassantMove = null;
    castleMove =null;

}

function IsCheckMate(board,color)
{
    if(!IsCheck(board,color))
      return false;

      for (let row = 0; row < 8; row++) {
        for (let colum = 0; colum < 8; colum++) {
          let figure = board[row][colum];
          if (getFigureColor(figure) == color &&  getFigureType(figure) !== CHESS_FIGURE.empty) {
            let possibleMoves = GetAllPosibleMoves(board, { row, colum });

            for (let i = 0; i < possibleMoves.length; i++) {
              let move = possibleMoves[i];

              if (!IsCheck(GetBoardWithMove(board,{ row, colum },move),color)) {
                return false;
             }
            }
          }
        }
      }
      
      
      return true;
}

function IsStalemate(board,color)
{
    //check for repeat moves
    if(allMoves.length>9)
    {
        let firstRepeat = false;
        let secondRepeat = false;
    for (let i = allMoves.length-1; i > allMoves.length-11; i--) {
        if(countOccurrences(allMoves, allMoves[i])==3)
        {
            if(i%2==0)
                firstRepeat =true;
            else
                secondRepeat = true;
        }
    }

    function countOccurrences(moves, move) {
        let count = 0;
        for (let i = 0; i < moves.length; i++) {
          if (moves[i].to.row == move.to.row&&moves[i].to.colum == move.to.colum&&moves[i].type == move.type) {
            count++;
          }
        }
        return count;
      }
      
        if(firstRepeat&&secondRepeat)
            return true;
    }
    //check for lack of moves

    for (let row = 0; row < 8; row++) {
        for (let colum = 0; colum < 8; colum++) {
            if(getFigureColor(board[row][colum])==color)
            {
               if(GetPosibleMoves(board,{row,colum}).length!=0)
                return false;
            }
        }
    }
    
    return true;
}


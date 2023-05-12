let lastMove = null;
let turnText;
let enPassantMove = null;
let castleMove = null;
let allMoves=[];
let posibleMoves = null;
Init()
function Init()
{
    BOARD_CONTAINER.style.height = BOARD_CONTAINER.offsetWidth + 'px';
    boardTableView = document.getElementById(TABLE_ID);
    turnText = document.getElementById(TURN_TEXT_ID);
    UpdateView(START_BOARD);
}

function OnCellDown(cell)
{
    let row = cell.parentElement.rowIndex;
    let colum = cell.cellIndex;

   
    if(getFigureColor(activeBoard[row][colum]) != turn && getFigureColor(selectedFigure.type) == turn)
    {

        if(hasSameRow(posibleMoves,[row,colum]))
        {
            ClearPosibleMoves();
            MakeMove(row,colum);
            UpdateView(activeBoard);
            if(IsCheckMate(activeBoard,turn))
            {  
                alert(turn == TURN.white? TURN.black : TURN.white + " player wins")
            }
            return;
        }
    }
 
    DeselectFigure();

    SelectFigure(cell,row,colum);

    if(getFigureColor(activeBoard[row][colum]) == turn)
        ShowPosibleMoves();

}


function MakeMove(row, colum)
{
    if(enPassantMove!=null&&enPassantMove[0]==row&&enPassantMove[1]==colum)
    {
        activeBoard[row+ (TURN.white ? 1 : -1)][colum] = CHESS_FIGURE.empty;
    }
    if(castleMove!=null&& castleMove!=[])
    {
        castleMove.forEach(move=>{
            if(move[0]==row&&move[1]==colum)
            {
                activeBoard[row][(colum>4? 7 : 0)] = CHESS_FIGURE.empty;
                activeBoard[row][colum + (colum>4? -1 : 1)] = turn + CHESS_FIGURE.colorless.rook;
            }
      });
    }
    activeBoard[row][colum] = activeBoard[selectedFigure.row][selectedFigure.colum];
    activeBoard[selectedFigure.row][selectedFigure.colum] = CHESS_FIGURE.empty;

    lastMove = new LastMove([selectedFigure.row,selectedFigure.colum],[row,colum],activeBoard[row][colum]);
    allMoves.push(lastMove);
    turn = turn == TURN.white? TURN.black : TURN.white;
    enPassantMove = null;
    castleMove =null;
}



let activeBoard = START_BOARD;
let turn = TURN.white;
let boardTableView;

function DeselectFigure()
{
    if(selectedFigure.isAssigned() && (lastMove==null || !lastMove.intersects(selectedFigure.row,selectedFigure.colum)))
    {
        let cell = boardTableView.rows[selectedFigure.row].cells[selectedFigure.colum];
        cell.style.backgroundColor = cell.id == BLACK_CELL_ID? CELL_COLORS.black.regular : CELL_COLORS.white.regular;
       ClearPosibleMoves();
    }
    
    selectedFigure.clear();
}

function SelectFigure(cell, row, colum)
{
    if(activeBoard[row][colum] != CHESS_FIGURE.empty && activeBoard[row][colum] != CHESS_FIGURE.posibleMove)
     cell.style.backgroundColor = cell.id == BLACK_CELL_ID? CELL_COLORS.black.selected : CELL_COLORS.white.selected;
     selectedFigure.assign(row,colum, activeBoard[row][colum]);
}

function ShowPosibleMoves()
{
   posibleMoves = GetPosibleMoves(activeBoard,selectedFigure);
   
    UpdateBackgroundCss(false,posibleMoves);
    
}

function ClearPosibleMoves()
{
    if(posibleMoves!=null)
    UpdateBackgroundCss(true,posibleMoves);
}

function UpdateView(boardArray)
{

    for (let i = 0; i < boardTableView.rows.length; i++) {
        for (let j = 0; j < boardTableView.rows[i].cells.length; j++)
         
        boardTableView.rows[i].cells[j].style.cssText =  "background-image: url("+IMAGE_RELETION[activeBoard[i][j]]+"); background-size: cover;";
    }
    UpdateLastMoveView();
    
    turnText.innerHTML = "turn: " + turn;
    
}

function UpdateLastMoveView()
{
    if(lastMove!=null)
    {
        boardTableView.rows[lastMove.from.row].cells[lastMove.from.colum].style.backgroundColor = boardTableView.rows[lastMove.from.row].cells[lastMove.from.colum].id  == BLACK_CELL_ID? CELL_COLORS.black.selected : CELL_COLORS.white.selected;
        boardTableView.rows[lastMove.to.row].cells[lastMove.to.colum].style.backgroundColor = boardTableView.rows[lastMove.to.row].cells[lastMove.to.colum].id  == BLACK_CELL_ID? CELL_COLORS.black.selected : CELL_COLORS.white.selected;
    }

}
function UpdateBackgroundCss(clear,points)
{
    let imgLink;
    for(let i = 0; i<points.length; i++)
    {
        imgLink = activeBoard[points[i][0]][points[i][1]]===CHESS_FIGURE.empty?IMAGE_RELETION[CHESS_FIGURE.posibleMove]:IMAGE_RELETION[CHESS_FIGURE.posibleMoveHit];
         boardTableView.rows[points[i][0]].cells[points[i][1]].style.cssText =clear?"background-image: url("+IMAGE_RELETION[activeBoard[points[i][0]][points[i][1]]]+"); background-size: cover;":"background-image: url("+IMAGE_RELETION[activeBoard[points[i][0]][points[i][1]]]+"),url("+imgLink+"); background-size: cover;";
    }
    UpdateLastMoveView();
}


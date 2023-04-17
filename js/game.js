let activeBoard = START_BOARD;
let turn = TURN.white;
let boardTableView;

Init()
function Init()
{

    boardTableView = document.getElementById(TABLE_ID);
    UpdateView(START_BOARD);
}

function OnCellDown(cell)
{
    let row = cell.parentElement.rowIndex;
    let colum = cell.cellIndex;

   
    if(getFigureType(activeBoard[row][colum]) != turn && selectedFigure.type == turn)
    {
         MakeMove(row,colum);
         return;
    }
   

    DeselectFigure();

    SelectFigure(cell,row,colum);

}

function OnCellDrag(cell)
{
    
}

function DeselectFigure()
{
    if(selectedFigure.isAssigned())
    {
        let cell = boardTableView.rows[selectedFigure.row].cells[selectedFigure.colum];
        cell.style.backgroundColor = cell.id == BLACK_CELL_ID? CELL_COLORS.black.regular : CELL_COLORS.white.regular;
       
    }

    selectedFigure.clear();
}

function SelectFigure(cell, row, colum)
{
    if(activeBoard[row][colum] != CHESS_FIGURE.empty && activeBoard[row][colum] != CHESS_FIGURE.posibleMove)
     cell.style.backgroundColor = cell.id == BLACK_CELL_ID? CELL_COLORS.black.selected : CELL_COLORS.white.selected;

     selectedFigure.assign(row,colum, getFigureType(activeBoard[row][colum]));
}

function MakeMove(row, colum)
{
    activeBoard[row][colum] = activeBoard[selectedFigure.row][selectedFigure.colum];
    activeBoard[selectedFigure.row][selectedFigure.colum] = CHESS_FIGURE.empty;
    UpdateView(activeBoard);

    turn = turn == TURN.white? TURN.black : TURN.white;
}

function UpdateView(boardArray)
{
    for (let i = 0; i < boardTableView.rows.length; i++) {
        for (let j = 0; j < boardTableView.rows[i].cells.length; j++)
        		
            boardTableView.rows[i].cells[j].style.cssText =  "background-image: url("+IMAGE_RELETION[boardArray[i][j]]+"); background-size: cover;";
           
    }
}





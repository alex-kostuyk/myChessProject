let activeBoard = START_BOARD;
let turn = TURN.white;
let boardTableView;

Init()
function Init()
{

    boardTableView = document.getElementById(TABLE_ID);
    for (let i = 0; i < boardTableView.rows.length; i++) {
        for (let j = 0; j < boardTableView.rows[i].cells.length; j++)
        		
            boardTableView.rows[i].cells[j].style.cssText =  "background-image: url("+IMAGE_RELETION[START_BOARD[i][j]]+"); background-size: cover;";
           
    }
}

function OnCellDown(cell)
{
    let row = cell.parentElement.rowIndex;
    let colum = cell.cellIndex;

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

     selectedFigure.assign(row,colum);
}



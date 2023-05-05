let activeBoard = START_BOARD;
let turn = TURN.white;
let boardTableView;
let lastMove = null;
let dragOverCell=null;
let turnText;
Init()
function Init()
{

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

        if(JSON.stringify(GetPosibleMoves(activeBoard,selectedFigure)).includes([row,colum]))
        {
            ClearPosibleMoves();
            MakeMove(row,colum);
            return;
        }
    }
 
    DeselectFigure();

    SelectFigure(cell,row,colum);

    if(getFigureColor(activeBoard[row][colum]) == turn)
        ShowPosibleMoves();

}

function OnCellStartDrag(cell)
{
    let dragFigure = activeBoard[cell.parentElement.rowIndex][cell.cellIndex];
  if(getFigureColor(dragFigure)!= turn)
  {
    event.preventDefault()
  }
}

function OnCellDragOver(cell)
{
    event.preventDefault();
    if(cell !== dragOverCell)
    {
        if(dragOverCell !== null)
        dragOverCell.classList.toggle(DRAG_OVER_CELL_CLASS);

        dragOverCell = cell;
        cell.classList.toggle(DRAG_OVER_CELL_CLASS);
    }
    
}

function OnCellDrop(cell)
{   
   if(dragOverCell !== null)
   {
    dragOverCell.classList.toggle(DRAG_OVER_CELL_CLASS);
    dragOverCell = null;
   }
    OnCellDown(cell);
}

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
  
    UpdateBackgroundCss("background-image: url("+IMAGE_RELETION[CHESS_FIGURE.posibleMove]+"); background-size: contain;",GetPosibleMoves(activeBoard,selectedFigure));
    
}

function ClearPosibleMoves()
{
    UpdateBackgroundCss("",GetPosibleMoves(activeBoard,selectedFigure));
}


function MakeMove(row, colum)
{
    
    
    activeBoard[row][colum] = activeBoard[selectedFigure.row][selectedFigure.colum];
    activeBoard[selectedFigure.row][selectedFigure.colum] = CHESS_FIGURE.empty;

    if(lastMove!=null)
    {
        boardTableView.rows[lastMove.from.row].cells[lastMove.from.colum].style.backgroundColor = boardTableView.rows[lastMove.from.row].cells[lastMove.from.colum].id  == BLACK_CELL_ID? CELL_COLORS.black.regular : CELL_COLORS.white.regular;
        boardTableView.rows[lastMove.to.row].cells[lastMove.to.colum].style.backgroundColor = boardTableView.rows[lastMove.to.row].cells[lastMove.to.colum].id  == BLACK_CELL_ID? CELL_COLORS.black.regular : CELL_COLORS.white.regular;
    }
    lastMove = new LastMove([selectedFigure.row,selectedFigure.colum],[row,colum]);

    turn = turn == TURN.white? TURN.black : TURN.white;


    UpdateView(activeBoard);
}

function UpdateView(boardArray)
{

    for (let i = 0; i < boardTableView.rows.length; i++) {
        for (let j = 0; j < boardTableView.rows[i].cells.length; j++)
         
        boardTableView.rows[i].cells[j].innerHTML = "<img src="+IMAGE_RELETION[boardArray[i][j]] +" class='chessFigure' draggable/>"; 
    }

    if(lastMove!=null)
    {
        boardTableView.rows[lastMove.from.row].cells[lastMove.from.colum].style.backgroundColor = boardTableView.rows[lastMove.from.row].cells[lastMove.from.colum].id  == BLACK_CELL_ID? CELL_COLORS.black.selected : CELL_COLORS.white.selected;
        boardTableView.rows[lastMove.to.row].cells[lastMove.to.colum].style.backgroundColor = boardTableView.rows[lastMove.to.row].cells[lastMove.to.colum].id  == BLACK_CELL_ID? CELL_COLORS.black.selected : CELL_COLORS.white.selected;
    }

    turnText.innerHTML = "turn: " + turn;
    
}

function UpdateBackgroundCss(cssText,points)
{
    for(let i = 0; i<points.length; i++)
    {
         boardTableView.rows[points[i][0]].cells[points[i][1]].style.cssText = cssText;
    }
}




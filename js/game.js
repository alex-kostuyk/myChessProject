let activeBoard = START_BOARD;
let turn = TURN.white;
let boardTableView;
let lastMove = null;
let dragOverCell=null;
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
   posibleMoves = GetPosibleMoves(activeBoard,selectedFigure);
   
    UpdateBackgroundCss(false,posibleMoves);
    
}

function ClearPosibleMoves()
{
    UpdateBackgroundCss(true,posibleMoves);
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


    if(lastMove!=null)
    {
        boardTableView.rows[lastMove.from.row].cells[lastMove.from.colum].style.backgroundColor = boardTableView.rows[lastMove.from.row].cells[lastMove.from.colum].id  == BLACK_CELL_ID? CELL_COLORS.black.regular : CELL_COLORS.white.regular;
        boardTableView.rows[lastMove.to.row].cells[lastMove.to.colum].style.backgroundColor = boardTableView.rows[lastMove.to.row].cells[lastMove.to.colum].id  == BLACK_CELL_ID? CELL_COLORS.black.regular : CELL_COLORS.white.regular;
    }
    lastMove = new LastMove([selectedFigure.row,selectedFigure.colum],[row,colum],activeBoard[row][colum]);
    allMoves.push(lastMove);
    turn = turn == TURN.white? TURN.black : TURN.white;
    enPassantMove = null;
    castleMove =null;
    UpdateView(activeBoard);
    if(IsCheckMate(activeBoard,turn))
    {  
        alert(turn == TURN.white? TURN.black : TURN.white + " player wins")
    }
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




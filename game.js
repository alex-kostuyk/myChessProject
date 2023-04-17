let activeBoard = START_BOARD;

Init()
function Init()
{

    let boardTable = document.getElementById(TABLE_ID);
    for (let i = 0; i < boardTable.rows.length; i++) {
        for (let j = 0; j < boardTable.rows[i].cells.length; j++)
        		
            boardTable.rows[i].cells[j].style.cssText =  "background-image: url("+IMAGE_RELETION[START_BOARD[i][j]]+"); background-size: cover;";
           
    }
}

function OnCellDown(cell)
{
    let row = cell.row;
    let colum = parent.this.cell;
    alert(row + " " + colum);
   // if(activeBoard[])
    cell.style.backgroundColor = 'red';
}
function OnCellDrag(cell)
{
    
}
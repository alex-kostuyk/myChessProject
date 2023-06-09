let selectedFigure = 
{
    row: null,
    colum: null,
    type: null,
    assign: function(row,colum,type)
    {
        this.row = row;
        this.colum = colum;
        this.type = type;
    },
    clear: function()
    {
        this.row = null;
        this.colum = null;
        this.type = null;
    },
    isAssigned: function()
    {
        return this.row != null && this.colum != null;
    }
};

function LastMove(from,to,type)
{
    this.from = 
    {
        row: from[0],
        colum: from[1]
    };
    this.to = {
        row: to[0],
        colum: to[1]
    };
    this.type = type;
    this.intersects= function (row, colum){
        return this.from.row == row && this.from.colum ==colum||this.to.row == row && this.to.colum ==colum;
    };
  
}

let getFigureColor = function(figure)
{
    if(figure == CHESS_FIGURE.empty || figure == CHESS_FIGURE.posibleMove)
    return figure;

    let isBlack = Object.values(CHESS_FIGURE.black).includes(figure);

    return isBlack?BLACK_CELL_ID:WHITE_CELL_ID;
}

function hasSameRow(arr, row) {
    if(arr!=null&&row!=null)
        return arr.some(r => r.every((v, i) => v === row[i]));

     return false;
  }
function getFigureType(type)
{
    return type.split(/(?=[A-Z])/)[1];
}
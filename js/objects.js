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

let getFigureType = function(figure)
{
    if(figure == CHESS_FIGURE.empty || figure == CHESS_FIGURE.posibleMove)
    return figure;

    let isBlack = Object.values(CHESS_FIGURE.black).includes(figure);

    return isBlack?BLACK_CELL_ID:WHITE_CELL_ID;
}
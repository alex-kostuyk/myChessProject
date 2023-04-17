let selectedFigure = 
{
    row: null,
    colum: null,
    assign: function(row,colum)
    {
        this.row = row;
        this.colum = colum;
    },
    clear: function()
    {
        this.row = null;
        this.colum = null;
    },
    isAssigned: function()
    {
        return this.row != null && this.colum != null;
    }
};
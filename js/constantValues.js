const CHESS_FIGURE = 
{ 
    white:
    {
        pawn: 'whitePawn', knight: 'whiteKnight',bishop: 'whiteBishop',rook: 'whiteRook', queen: 'whiteQueen',king: 'whiteKing' 
    },
    black:
    {
        pawn: 'blackPawn', knight: 'blackKnight',bishop: 'blackBishop',rook: 'blackRook', queen: 'blackQueen',king: 'blackKing' 
    },
    empty: 'empty',
    posibleMove: 'posibleMove'
};

const IMAGE_RELETION =
    {
        'empty': 'images/empty.png',
        'posibleMove': 'images/posibleMove.png',
        //black
        'blackPawn': 'https://www.chess.com/chess-themes/pieces/neo/150/bp.png',
        'blackKnight': 'https://www.chess.com/chess-themes/pieces/neo/150/bn.png',
        'blackBishop': 'https://www.chess.com/chess-themes/pieces/neo/150/bb.png',
        'blackRook': 'https://www.chess.com/chess-themes/pieces/neo/150/br.png',
        'blackQueen': 'https://www.chess.com/chess-themes/pieces/neo/150/bq.png',
        'blackKing': 'https://www.chess.com/chess-themes/pieces/neo/150/bk.png',

        //white
        'whitePawn': 'https://www.chess.com/chess-themes/pieces/neo/150/wp.png',
        'whiteKnight': 'https://www.chess.com/chess-themes/pieces/neo/150/wn.png',
        'whiteBishop': 'https://www.chess.com/chess-themes/pieces/neo/150/wb.png',
        'whiteRook': 'https://www.chess.com/chess-themes/pieces/neo/150/wr.png',
        'whiteQueen': 'https://www.chess.com/chess-themes/pieces/neo/150/wq.png',
        'whiteKing': 'https://www.chess.com/chess-themes/pieces/neo/150/wk.png'
    }
    
const START_BOARD = 
[
    [CHESS_FIGURE.black.rook,CHESS_FIGURE.black.knight,CHESS_FIGURE.black.bishop,CHESS_FIGURE.black.queen,CHESS_FIGURE.black.king,CHESS_FIGURE.black.bishop,CHESS_FIGURE.black.knight,CHESS_FIGURE.black.rook],
    [CHESS_FIGURE.black.pawn,CHESS_FIGURE.black.pawn,CHESS_FIGURE.black.pawn,CHESS_FIGURE.black.pawn,CHESS_FIGURE.black.pawn,CHESS_FIGURE.black.pawn,CHESS_FIGURE.black.pawn,CHESS_FIGURE.black.pawn],
    [CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty],
    [CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty],
    [CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty],
    [CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty,CHESS_FIGURE.empty],
    [CHESS_FIGURE.white.pawn,CHESS_FIGURE.white.pawn,CHESS_FIGURE.white.pawn,CHESS_FIGURE.white.pawn,CHESS_FIGURE.white.pawn,CHESS_FIGURE.white.pawn,CHESS_FIGURE.white.pawn,CHESS_FIGURE.white.pawn],
    [CHESS_FIGURE.white.rook,CHESS_FIGURE.white.knight,CHESS_FIGURE.white.bishop,CHESS_FIGURE.white.queen,CHESS_FIGURE.white.king,CHESS_FIGURE.white.bishop,CHESS_FIGURE.white.knight,CHESS_FIGURE.white.rook]
];

const TABLE_ID = "tableBoard";
const BLACK_CELL_ID = "black";
const WHITE_CELL_ID = "white";
const CELL_COLORS = 
{
    white: {selected:'#F7F769', regular: '#EEEED2'},
    black: {selected:'#BBCB2B', regular: '#769656'}
};
const TURN = 
{
    black: "black",
    white: "white"
};

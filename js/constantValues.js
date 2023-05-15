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
    colorless:
    {
        pawn: 'Pawn', knight: 'Knight',bishop: 'Bishop',rook: 'Rook', queen: 'Queen',king: 'King' 
    },
    empty: 'empty',
    posibleMove: 'posibleMove',
    posibleMoveHit: 'posibleMoveHit'
};

const IMAGE_RELETION =
    {
        'empty': 'https://cdn.discordapp.com/attachments/730141789490512005/1104384774367367208/empty.png',
        'posibleMove': 'https://cdn.discordapp.com/attachments/730141789490512005/1104384774635798619/posibleMove.png',
        'posibleMoveHit': 'https://cdn.discordapp.com/attachments/730141789490512005/1106022312018448495/posibleMoveHit.png',
        //black
        'blackPawn': 'https://cdn.discordapp.com/attachments/730141789490512005/1106268783066235020/bp.png',
        'blackKnight': 'https://cdn.discordapp.com/attachments/730141789490512005/1106268782181224508/bn.png',
        'blackBishop': 'https://cdn.discordapp.com/attachments/730141789490512005/1106268782411923486/bb.png',
        'blackRook': 'https://cdn.discordapp.com/attachments/730141789490512005/1106268360792092713/br.png',
        'blackQueen': 'https://cdn.discordapp.com/attachments/730141789490512005/1106268782856507432/bq.png',
        'blackKing': 'https://cdn.discordapp.com/attachments/730141789490512005/1106268782630019102/bk.png',

        //white
        'whitePawn': 'https://cdn.discordapp.com/attachments/730141789490512005/1106270037393805424/wp.png',
        'whiteKnight': 'https://cdn.discordapp.com/attachments/730141789490512005/1106270036408148008/wn.png',
        'whiteBishop': 'https://cdn.discordapp.com/attachments/730141789490512005/1106270036634636378/wb.png',
        'whiteRook': 'https://cdn.discordapp.com/attachments/730141789490512005/1106270036118737038/wr.png',
        'whiteQueen': 'https://cdn.discordapp.com/attachments/730141789490512005/1106270036835967137/wq.png',
        'whiteKing': 'https://cdn.discordapp.com/attachments/730141789490512005/1106270037091827732/wk.png'
    }

    const PIECE_COST =
    {
        'Pawn':1,
        'Knight':3,
        'Bishop':4,
        'Rook':5,
        'Queen':10 
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
const YUORE_NICK_NAMES_ELEMENTS = document.querySelectorAll('.youreProfileName');
const OPPONENT_NICK_NAMES_ELEMENTS = document.querySelectorAll('.opponentProfileName');
const YUORE_IMGLOGO_ELEMENTS = document.querySelectorAll('.youreProfileImage');
const OPPONENT_IMGLOGO_ELEMENTS = document.querySelectorAll('.opponentProfileImage');
const YUORE_RAITING_ELEMENTS = document.querySelectorAll('.youreProfileRaiting');
const OPPONENT_RAITING_ELEMENTS = document.querySelectorAll('.opponentProfileRaiting');
const SCORE_TEXT = document.getElementById("finalScore");
const EATEN_PIECE_WHITE = document.getElementById("whiteEatenPiece");
const EATEN_PIECE_BLACK = document.getElementById("blackEatenPiece");
const DRAG_ELEMENT = document.getElementById("drag-element");
const CHESS_PIECE_CHOISE = document.querySelector('.chessPieceChoice');
const POPUP_WINDOW = document.querySelector('.popUPView');
const BOARD_CONTAINER = document.querySelector('.board');
const POPUPS = document.querySelectorAll('.popUPContainer');
const POPUP_WINDOW_HEADER_TEXT_ID = 'popUPHeaderText';
const TABLE_ID = "tableBoard";
const DRAG_OVER_CELL_CLASS = "selectedCell";
const BLACK_CELL_ID = "black";
const WHITE_CELL_ID = "white";
const TURN_TEXT_ID = "turn";
const CELL_COLORS = 
{
    white: {selected:'#F7FD9D', regular: '#EAEDDC'},
    black: {selected:'#CCCE60', regular: '#4E6B93'}
};
const TURN = 
{
    black: "black",
    white: "white"
};
let eatenPieces = [];

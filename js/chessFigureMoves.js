function GetPosibleMoves(board, figurePosition)
{
    let allPosibleMoves = GetAllPosibleMoves(board, figurePosition);
    let posibleMoves = [];
    let color= getFigureColor(figurePosition.type);

    if(figurePosition.type.split(/(?=[A-Z])/)[1] === CHESS_FIGURE.colorless.king)
    {
      castleMove = getCastleMove(board,figurePosition,color);
      castleMove.forEach(move=>{
            allPosibleMoves.push(move);
      });
    }
      

    allPosibleMoves.forEach((move) => {
      if(!IsCheck(GetBoardWithMove(board,figurePosition,move),color))
        posibleMoves.push(move);
    });

    return posibleMoves;
}

function IsCheck(board,color)
{
    let kingPosition = null;
    
    // Find the position of the king of the given color
    for (let row = 0; row < 8; row++) {
      for (let colum = 0; colum < 8; colum++) {
        let figure = board[row][colum];
        if (getFigureColor(figure) === color && figure.split(/(?=[A-Z])/)[1] === CHESS_FIGURE.colorless.king) {
          kingPosition = { row, colum };
          break;
        }
      }
      if (kingPosition !== null) {
        break;
      }
    }
    
    // Check if any enemy figure can attack the king
    for (let row = 0; row < 8; row++) {
      for (let colum = 0; colum < 8; colum++) {
        let figure = board[row][colum];
        if (getFigureColor(figure) !== color && figure.split(/(?=[A-Z])/)[1] !== CHESS_FIGURE.empty) {
          let possibleMoves = GetAllPosibleMoves(board, { row, colum });
          for (let i = 0; i < possibleMoves.length; i++) {
            let move = possibleMoves[i];
            if (move[0] === kingPosition.row && move[1] === kingPosition.colum) {
              return true;
            }
          }
        }
      }
    }
    
    // If no enemy figure can attack the king, return false
    return false;
}

function GetBoardWithMove(board,figurePosition,move)
{
   let boardWithMove = [];

   for(let i = 0; i < board.length; i++) {
    let innerArray = [];
    for(let j = 0; j < board[i].length; j++) {
      innerArray.push(board[i][j]);
    }
    boardWithMove.push(innerArray);
  }
  boardWithMove[move[0]][move[1]] = board[figurePosition.row][figurePosition.colum];
  boardWithMove[figurePosition.row][figurePosition.colum] = CHESS_FIGURE.empty;

   return boardWithMove;
}

function GetAllPosibleMoves(board, figurePosition)
{
    let posibleMoves = [];
    let figure = board[figurePosition.row][figurePosition.colum].split(/(?=[A-Z])/);
    let color = figure[0];
    
    switch(figure[1])
    {
        case CHESS_FIGURE.colorless.pawn:
                const direction = color == TURN.white ? -1 : 1;
      
      // Check if the pawn can capture diagonally
      let leftColumn = figurePosition.colum - 1;
      let rightColumn = figurePosition.colum + 1;
      if (leftColumn >= 0) {
        let leftCell = board[figurePosition.row + direction][leftColumn];
        if (getFigureColor(leftCell) != color && getFigureColor(leftCell) != CHESS_FIGURE.empty) {
          posibleMoves.push([figurePosition.row + direction, leftColumn]);
        }
      }
      if (rightColumn <= 7) {
        let rightCell = board[figurePosition.row + direction][rightColumn];
        if (getFigureColor(rightCell) != color && getFigureColor(rightCell) != CHESS_FIGURE.empty) {
          posibleMoves.push([figurePosition.row + direction,rightColumn]);
        }
      }
      // Check if the pawn can move one square forward
      if (board[figurePosition.row + direction][figurePosition.colum] == CHESS_FIGURE.empty) {
        posibleMoves.push([figurePosition.row + direction, figurePosition.colum]);
      }
      else{
        return posibleMoves;
      }
      // Check if the pawn can move two squares forward from its starting position
      if ((color == TURN.white && figurePosition.row == 6) || (color == TURN.black && figurePosition.row == 1)) {
        if (board[figurePosition.row + direction * 2][figurePosition.colum] == CHESS_FIGURE.empty) {
          posibleMoves.push([figurePosition.row + direction * 2, figurePosition.colum]);
        }
      }
      if(isEnPassant(activeBoard,selectedFigure))
      {
          enPassantMove = [lastMove.to.row + (TURN.white ? -1 : 1),lastMove.to.colum]
          posibleMoves.push(enPassantMove);
      }
            break;
        
        case CHESS_FIGURE.colorless.knight:
            const knightMoves = [
                { row: 2, colum: -1 },
                { row: 2, colum: 1 },
                { row: 1, colum: -2 },
                { row: 1, colum: 2 },
                { row: -1, colum: -2 },
                { row: -1, colum: 2 },
                { row: -2, colum: -1 },
                { row: -2, colum: 1 }
              ];
        
              // Check each possible knight move
              for (let move of knightMoves) {
                let newRow = figurePosition.row + move.row;
                let newColum = figurePosition.colum + move.colum;

                // Check if the move is on the board
                if (newRow >= 0 && newRow < 8 && newColum >= 0 && newColum < 8) {
                  let cell = board[newRow][newColum];
                   
                  // Check if the move is valid (i.e., an empty cell or an opponent's piece)
                  if (getFigureColor(cell) != color) { 
                    posibleMoves.push([newRow,newColum]);
                  }
                }
              }
            break;
        
        case CHESS_FIGURE.colorless.bishop:
                posibleMoves = getBishopMoves(board, figurePosition, color);
            break;
        
        case CHESS_FIGURE.colorless.rook:
                posibleMoves = getRookMoves(board, figurePosition, color);
            break;
        
        case CHESS_FIGURE.colorless.queen:
            let bishopMoves = getBishopMoves(board, figurePosition, color);
            let rookMoves = getRookMoves(board, figurePosition, color);
            posibleMoves = bishopMoves.concat(rookMoves);
            break;
        
        case CHESS_FIGURE.colorless.king:
                 // Check all possible moves for a king
      const kingMoves = [
        { row: 1, colum: 0 },
        { row: -1, colum: 0 },
        { row: 0, colum: 1 },
        { row: 0, colum: -1 },
        { row: 1, colum: 1 },
        { row: 1, colum: -1 },
        { row: -1, colum: 1 },
        { row: -1, colum: -1 }
      ];

      // Check each possible move
      for (let move of kingMoves) {
        let newRow = figurePosition.row + move.row;
        let newColum = figurePosition.colum + move.colum;

        // Check if move is within bounds of board
        if (newRow >= 0 && newRow < 8 && newColum >= 0 && newColum < 8) {
          let cell = board[newRow][newColum];

          // If cell is empty or has opponent's piece, add as possible move
          if (cell == CHESS_FIGURE.empty || getFigureColor(cell) != color) {
            posibleMoves.push([newRow,newColum]);
          }
        }
      }      
            break;       
    }
    return posibleMoves;
    function getBishopMoves(board, figurePosition, color) {
    const bishopMoves = [
        { row: 1, colum: 1 },
        { row: 1, colum: -1 },
        { row: -1, colum: 1 },
        { row: -1, colum: -1 }
    ];
    let moves = [];
    // Check each diagonal direction
    for (let move of bishopMoves) {
        let newRow = figurePosition.row + move.row;
        let newColum = figurePosition.colum + move.colum;

        // Keep moving in the diagonal direction until blocked
        while (newRow >= 0 && newRow < 8 && newColum >= 0 && newColum < 8) {
        let cell = board[newRow][newColum];

        // If cell is empty, add as possible move and continue in direction
        if (cell == CHESS_FIGURE.empty) {
            moves.push([newRow, newColum]);
            newRow += move.row;
            newColum += move.colum;
        }
        // If cell has opponent's piece, add as possible move and stop in direction
        else if (getFigureColor(cell) != color) {
            moves.push([newRow, newColum]);
            break;
        }
        // If cell has player's own piece, stop in direction
        else {
            break;
        }
        }
    }
    return moves;
}
function getRookMoves(board, figurePosition, color) {
    const rookMoves = [
        { row: 1, colum: 0 },
        { row: -1, colum: 0 },
        { row: 0, colum: 1 },
        { row: 0, colum: -1 }
      ];
      let moves = [];
      // Check each horizontal and vertical direction
      for (let move of rookMoves) {
        let newRow = figurePosition.row + move.row;
        let newColum = figurePosition.colum + move.colum;

        // Keep moving in the direction until blocked
        while (newRow >= 0 && newRow < 8 && newColum >= 0 && newColum < 8) {
          let cell = board[newRow][newColum];

          // If cell is empty, add as possible move and continue in direction
          if (cell == CHESS_FIGURE.empty) {
           moves.push([newRow,newColum]);
            newRow += move.row;
            newColum += move.colum;
          }
          // If cell has opponent's piece, add as possible move and stop in direction
          else if (getFigureColor(cell) != color) {
           moves.push([newRow,newColum]);
            break;
          }
          // If cell has player's own piece, stop in direction
          else {
            break;
          }
        }
      }
      return moves;
}

}
function getCastleMove(board, figurePosition,color) {
    const row = color === TURN.white ?  7:0;
    let leftRookMoved = false;
    let rightRookMoved = false;
    moves = [];



    for (let i = 0; i < allMoves.length; i++) {
      if(allMoves[i].type===figurePosition.type)
      {
       return [];
      }
       
       if(allMoves[i].from.row == row && allMoves[i].type == CHESS_FIGURE.white.rook)
       {
         if(allMoves[i].from.colum == 0)leftRookMoved = true;
         if(allMoves[i].from.colum == 7)rightRookMoved = true;
       }
      }

    if(!rightRookMoved)
    {
      let isPathClear = true;
      for (let i = 5; i < 7; i++) {
        if (board[row][i] !== CHESS_FIGURE.empty) {
          isPathClear = false;
          break;
        }
      }
      if(isPathClear)
      {
        moves.push([row,6]);
      }
    }

    if(!leftRookMoved)
    {
      let isPathClear = true;
      for (let i = 1; i < 4; i++) {
        if (board[row][i] !== CHESS_FIGURE.empty) {
          isPathClear = false;
          break;
        }
      }
      if(isPathClear)
      {
        moves.push([row,2]);
      }
    }
    return moves;

}

function isEnPassant(board, pawnPosition) {

  if (lastMove===null)
    return false;

  let lastMoveFigure = board[lastMove.to.row][lastMove.to.colum]

  if (lastMoveFigure.split(/(?=[A-Z])/)[1]==CHESS_FIGURE.colorless.pawn &&Math.abs(lastMove.to.row - lastMove.from.row)===2 && Math.abs(lastMove.to.colum - pawnPosition.colum)===1&&lastMove.to.row == pawnPosition.row){
    return true; 
  }
  return false;
}



function IsCheckMate(board,color)
{
    if(!IsCheck(board,color))
      return false;

      for (let row = 0; row < 8; row++) {
        for (let colum = 0; colum < 8; colum++) {
          let figure = board[row][colum];
          if (getFigureColor(figure) == color && figure.split(/(?=[A-Z])/)[1] !== CHESS_FIGURE.empty) {
            let possibleMoves = GetAllPosibleMoves(board, { row, colum });

            for (let i = 0; i < possibleMoves.length; i++) {
              let move = possibleMoves[i];

              if (!IsCheck(GetBoardWithMove(board,{ row, colum },move),color)) {
                return false;
             }
            }
          }
        }
      }
      
      
      return true;
}
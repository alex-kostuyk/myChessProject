function ActivatePopUp(message)
{
    POPUP_WINDOW.style.display = "flex";
    popUPText.textContent = message;

}
function SetGameWinner()
{
    ActivatePopUp((turn == TURN.white? TURN.black : TURN.white) + " player wins");
}
function UpdateEatenPiecesView()
{
    EATEN_PIECE_WHITE.innerHTML = '';
    EATEN_PIECE_BLACK.innerHTML = '';

    eatenPieces.sort((a, b) => PIECE_COST[getFigureType(b)] - PIECE_COST[getFigureType(a)]);

    eatenPieces.forEach(piece =>{
        var elem = document.createElement("img");
            elem.setAttribute("src", IMAGE_RELETION[piece]);
            elem.setAttribute("class", "eatenPieceImage");
            
        (getFigureColor(piece) == TURN.white?EATEN_PIECE_WHITE:EATEN_PIECE_BLACK).appendChild(elem);
    })
}

function windowResize()
{
      
      POPUPS.forEach(popUP =>{
            popUP.style.height = BOARD_CONTAINER.offsetWidth + 'px';
            popUP.style.width = BOARD_CONTAINER.offsetWidth + 'px';
      })
      let sizeCoeficient =4.5;
      if(window.innerHeight < window.innerWidth){
        sizeCoeficient = 7;
        BOARD_CONTAINER.style.height =window.innerHeight*0.6 + 'px';
        BOARD_CONTAINER.style.width = BOARD_CONTAINER.offsetHeight + 'px';
    }
    else{
            BOARD_CONTAINER.style.width =window.innerWidth + 'px';
            BOARD_CONTAINER.style.height = BOARD_CONTAINER.offsetWidth + 'px';
        }  
     DRAG_ELEMENT.style.width = BOARD_CONTAINER.offsetWidth/sizeCoeficient + 'px';
      DRAG_ELEMENT.style.height = BOARD_CONTAINER.offsetWidth/sizeCoeficient + 'px';
      

      additionalOffset=Number.parseFloat(DRAG_ELEMENT.style.height.split('px')[0])/2;
}
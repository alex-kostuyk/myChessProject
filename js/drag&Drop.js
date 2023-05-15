let currentX =0;
let currentY =0;
let xOffset = 0;
let yOffset = 0;
let active = false;
let target;
let dragElement = document.getElementById("drag-element");
let dragOverCell = null;

function touchStart(event) { 
    
    let row = event.target.parentElement.rowIndex;
    let colum = event.target.cellIndex;
    if(getFigureColor(activeBoard[row][colum])==turn)
    {
        dragElement.setAttribute("src", IMAGE_RELETION[activeBoard[row][colum]]);

        boardTableView.rows[row].cells[colum].style.cssText =""; 
        dragElement.style.display = "block";
        active = true;
        touchMove(event);
        document.body.style.cursor = "grabbing";
     }

    OnCellDown(event.target);

}

function touchMove(event) {
  event.preventDefault();

  if(active)
  {
    if (event.type === "mousemove" || event.type === "mousedown") {
      currentX = event.clientX;
      currentY = event.clientY;
      target = event.target;
    } else {
      currentX = event.touches[0].clientX;
      currentY = event.touches[0].clientY;
      target = document.elementFromPoint(currentX, currentY);
    }

    xOffset = currentX;
    yOffset = currentY;
    setTranslate(currentX, currentY, dragElement);
     if(target.className!="cell")
        return;
    if(target !== dragOverCell)
    {
        if(dragOverCell !== null)
        dragOverCell.classList.toggle(DRAG_OVER_CELL_CLASS);

        dragOverCell = target;
        target.classList.toggle(DRAG_OVER_CELL_CLASS);
    }
}

}

function touchEnd(event) {
  
  document.body.style.cursor = "default";
  active = false;
  if(dragOverCell !== null)
  {
   dragOverCell.classList.toggle(DRAG_OVER_CELL_CLASS);
   dragOverCell = null;
  }
  target = document.elementFromPoint(currentX, currentY);
  dragElement.style.display = "none";

  UpdateView();
  if(target.className!="cell")
      return;
  
  OnCellDown(target);
    
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + (xPos-additionalOffset) + "px, " + (yPos-additionalOffset) + "px, 0)";
}
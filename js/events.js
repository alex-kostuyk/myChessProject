const cells = document.querySelectorAll('.cell');


window.addEventListener('resize', function(){
      BOARD_CONTAINER.style.height = BOARD_CONTAINER.offsetWidth + 'px';
});

cells.forEach(cell => {
  cell.addEventListener('dragstart', function() {
        OnCellStartDrag(cell);
  });
  cell.addEventListener('dragover', function() {
        OnCellDragOver(cell);
  });
  cell.addEventListener('drop', function() {
        OnCellDrop(cell);
  });
  cell.addEventListener('mousedown', function() {
        OnCellDown(cell);
});
});
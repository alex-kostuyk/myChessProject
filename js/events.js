const cells = document.querySelectorAll('.cell');


window.addEventListener('resize', function(){
      BOARD_CONTAINER.style.height = BOARD_CONTAINER.offsetWidth + 'px';
});

cells.forEach(cell => {
  cell.addEventListener('mousedown', function() {
        OnCellDown(cell);
});
});
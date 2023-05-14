const cells = document.querySelectorAll('.cell');

window.addEventListener('resize', function(){
      windowResize();
});

cells.forEach(cell => {
  cell.addEventListener('mousedown', function() {
        OnCellDown(cell);
});
});

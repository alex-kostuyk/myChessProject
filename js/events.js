const cells = document.querySelectorAll('.cell');
windowResize();
window.addEventListener('resize', function(){
      windowResize();
});

cells.forEach(cell => {
      // Add touch event listeners for mobile devices
      cell.addEventListener("touchstart", touchStart, false);
      cell.addEventListener("touchmove", touchMove, false);
      cell.addEventListener("touchend", touchEnd, false);

      // Add event listeners for desktop devices
      cell.addEventListener("mousedown", touchStart, false);
      cell.addEventListener("mousemove", touchMove, false);
      cell.addEventListener("mouseup", touchEnd, false);
});


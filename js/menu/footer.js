let footer = document.querySelectorAll(".footer")[0];
let voidElement = document.getElementById('void');


voidElement.style.height = (window.innerHeight - footer.offsetTop - footer.offsetHeight) + "px";




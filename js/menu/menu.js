const buttons = document.querySelectorAll('.radioButtonStyle1');
const message = document.getElementById("message");
const selection = document.getElementById("selectionMain");
buttons.forEach(button=>{
    button.addEventListener("click", mouseDownRadio);
});

let currentButton = null;

function mouseDownRadio(event)
{
    if(currentButton!=event.target)
    { 
        if(currentButton!=null)
        currentButton.classList.toggle("radioButtonSelect");

            currentButton = event.target;
        currentButton.classList.toggle("radioButtonSelect");
    }

}

function submitOnClick()
{
    if(currentButton==null)
        message.textContent = "select game time"
    else
    {
        window.location.href = 'game.html';
        sessionStorage.setItem("EnemyType",selection.value);
        sessionStorage.setItem("GameTime",currentButton.value);
    }
}
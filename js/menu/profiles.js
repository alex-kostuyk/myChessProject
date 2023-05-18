let logIn = document.querySelectorAll('#logIn');
let logOut = document.querySelectorAll('#logOut');
let isAuthorized = sessionStorage.getItem("yourName").length>0;
for(let i=0;i<logIn.length;i++){
    if(isAuthorized)
        logIn[i].style.display = "none";
     else
        logOut[i].style.display = "none";
}

function OpenProfile(value)
{
    let formData = new URLSearchParams();
    formData.append("anotherUser", value);
    SaveToSession(formData);
}

function LogOut()
{
    let formData = new URLSearchParams();
    formData.append("destroy", "yes");
    SaveToSession(formData);
    sessionStorage.setItem("yourName","");
    window.location.href = 'authorization.html';
   
}
let wasPressed =false;
function addFriend(value){
   if(wasPressed)
        return;
    let formData = new URLSearchParams();
    formData.append("addFriend", "yes");
    formData.append("playerName", sessionStorage.getItem("yourName"));
    formData.append("friendName", value);
    SaveToSession(formData);
    wasPressed = true;
}


function SaveToSession(formData){
    
    fetch("php/saveValueSession.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData}).then(function (response) {
            return response.text();
        })
        .then(function (data) {
            if(data=="view")
            window.location.href = 'profileView.php';
           if(data=="added")
          window.location.href = 'FindNewFriend.php';
        })
        .catch(function (error) {
            console.log(error);
        });
}


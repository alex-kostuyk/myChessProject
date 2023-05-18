let logIn = document.querySelectorAll('#logIn');
let logOut = document.querySelectorAll('#logOut');
let isAuthorized = sessionStorage.getItem("yourName")!=undefined;
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
    sessionStorage.clear();
    let formData = new URLSearchParams();
    formData.append("destroy", "yes");
    SaveToSession(formData);
}
let wasPressed =false;
function addFriend(value){
   if(wasPressed&&isAuthorized)
        return;
    let formData = new URLSearchParams();
    formData.append("addFriend", "yes");
    formData.append("playerName", sessionStorage.getItem("yourName"));
    formData.append("friendName", value);
    SaveToSession(formData);
    wasPressed = true;
}


function deleteFriend(value){
   if(!isAuthorized)
        return;
    let formData = new URLSearchParams();
    formData.append("deleteFriend", "yes");
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
          if(data=="destroyed")
            window.location.href = 'authorization.html';
          if(data=="deleted")
            window.location.href = 'profileView.php';   

        })
        .catch(function (error) {
            console.log(error);
        });
}


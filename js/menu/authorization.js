let messageLogIn = document.getElementById("messageLogIn");
let messageSignUP = document.getElementById("messageSignUp");
let signUpEmail= document.getElementById("signEmail");
let signUpName = document.getElementById("signName");
let signUpPassword = document.getElementById("signPassword");
let LogInName = document.getElementById("logInName");
let LogInPassword = document.getElementById("logInPassword");
const monthNames = ["january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december"
];

function SignUpButton(){
    
    let validation = Validation(signUpPassword.value,validatePassword,messageSignUP);
    if(validation)
    validation = Validation(signUpName.value,BasicValidation,messageSignUP);
    if(validation)
    validation = Validation(signUpEmail.value,BasicValidation,messageSignUP);
    
    if(validation==true)
    {
        let formData = new URLSearchParams();
        formData.append("logIn", "no");
        formData.append("name", signUpName.value);
        formData.append("password", signUpPassword.value);
        formData.append("mail", signUpEmail.value);
        let date = new Date();
        formData.append("dayCon", "connected "+date.getDate()+" "+monthNames[date.getMonth()]+" "+date.getFullYear());
        SendDataToServer(formData,messageSignUP);   
    
    } 

}
function LogInButton(){
    let validation = Validation(LogInPassword.value,validatePassword,messageLogIn);
    if(validation)
    validation = Validation(LogInName.value,BasicValidation,messageLogIn);
    
    if(validation==true)
    {
        let formData = new URLSearchParams();
        formData.append("logIn", "yes");
        formData.append("name", LogInName.value);
        formData.append("password", LogInPassword.value);

        SendDataToServer(formData,messageLogIn);        
    } 
}

function SendDataToServer(formData,output)
{
   

    fetch("php/authorization.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
        })
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            output.textContent = data;
            if(data == "account created" || data == "password correct")
            {
              sessionStorage.setItem("yourName",data == "account created"?signUpName.value:LogInName.value);
              window.location.href = 'index.php';
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

function validatePassword(password) {
    if (password.length < 8) {
      return "Password should be at least 8 characters long.";
    }
  
    if (!/[A-Z]/.test(password)) {
      return "Password should contain at least one uppercase letter.";
    }
  
    if (!/[a-z]/.test(password)) {
      return "Password should contain at least one lowercase letter.";
    }
  
    if (!/[0-9]/.test(password)) {
      return "Password should contain at least one digit.";
    }
  
    return true;
  }
  function BasicValidation(input) {
    if (input ==="") {
      return "all fields must be filled!";
    }
  
    if (input.includes(" ")) {
      return "fields should not contain spaces.";
    }
    return true;
  }

  function Validation(value,func,output)
  {
    let validation = func(value);
        if(!(validation==true))
        {
            output.textContent = validation;
            return false;
        }
        output.textContent ="";
     return true;
  }
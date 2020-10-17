function HandleRegister(){
UpdateRegisterInfo();
}

function UpdateRegisterInfo(){ 
 const usernameRegister = document.getElementById("register-username");
 const emailRegister = document.getElementById("register-email");

SetInLocalStorage(usernameRegister.value, emailRegister.value);

}

function SetInLocalStorage(username,email){
    localStorage.setItem("username",username);
    localStorage.setItem("email",email);
}

function HandleLogin(){
  UpdateLogignInfo();  
}

function UpdateLoginInfo(){
const usernameLogin = document.getElementById("login-username");
const emailLogin = document.getElementById("login-email");

CheckLoginDetails(usernameLogin.value,emailLogin.value);
}

function CheckLoginDetails(username,email){
    if ( ( username == localStorage.getItem("username") ) && ( email == localStorage.getItem("email") ) ){ 
    
        LoginSuccess();

     } else {

       LoginFailure(); 
    }
        
}


function LoginSuccess(){

const response = document.createElement("h5");

    response.innerText = "Login Successful";

    response.appendChild("feedback-container");
}

function LoginFailure(){

    const response = document.createElement("h5");
    
    response.innerText = "Login Unsuccessful";

    response.appendChild("feedback-container"); 
}
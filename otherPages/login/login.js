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
  UpdateLoginInfo();  
}

function UpdateLoginInfo(){
var usernameLogin = document.getElementById("login-username");
var emailLogin = document.getElementById("login-email");

CheckLoginDetails(usernameLogin.textContent,emailLogin.textContent);
}

function CheckLoginDetails(username,email){
    
    if ( ( username == localStorage.getItem("username") ) && ( email == localStorage.getItem("email") ) ){ 
    
        LoginSuccess();

     } else {

       LoginFailure(); 
    }
        
}


function LoginSuccess(){

document.getElementById("response-text").textContent = "Login Successful";

}

function LoginFailure(){

    var textFail = document.getElementById("response-text");

textFail.textContent = "Login Error";
}

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
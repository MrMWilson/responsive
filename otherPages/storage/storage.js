function HandleOnClick() {
    UpdateTextLocation();
    debugger;
}

function UpdateTextLocation() {
    const firstNameText = document.getElementById("first-name-text");
    const surnameText = document.getElementById("surname-text");

    SetFirstName(firstNameText.value);

    SetSurname(surnameText.value);

    StoreInLocalStorage(firstNameText.value, surnameText.value);
}

function SetFirstName(firstname) {
    const firstNameLoaction = document.getElementById("first-name-location");
    firstNameLoaction.innerText = firstname;
}

function SetSurname(surname) {
    const surnameLocation = document.getElementById("surname-location");
    surnameLocation.innerText = surname;

}

function StoreInLocalStorage(firstname, surname) {
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("surname", surname);
}

function GetLocalStorage() {
    const firstname = localStorage.getItem("firstname");
    const surname = localStorage.getItem("surname");

    SetFirstName(firstname);
    SetSurname(surname);

}
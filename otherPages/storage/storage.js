function HandleOnClick() {
    UpdateTextLocation();
}

function UpdateTextLocation() {
    const firstNameText = document.getElementById("first-name-text");
    const surnameText = document.getElementById("surname-text");

    SetFirstName(firstNameText.value);

    SetSurname(surnameText.value);
}

function SetFirstName(firstname) {
    const firstNameLoaction = document.getElementById("first-name-location");
    firstNameLoaction.innerText = firstname;
}

function SetSurname(surname) {
    const surnameLocation = document.getElementById("surname-location");
    surnameLocation.innerText = surname;

}
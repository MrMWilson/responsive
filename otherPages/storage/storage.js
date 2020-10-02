function HandleOnClick() {
    UpdateTextLocation();
}

function UpdateTextLocation() {
    const firstNameText = document.getElementById('first-name-text');
    const surnameText = document.getElementById('surname-text');

    SetFirstName(firstNameText.value);
    SetSurname(surnameText.value);

    StoreInSessionStorage(firstNameText.value, surnameText.value);
}

function SetFirstName(firstname) {
    const firstNameLocation = document.getElementById('first-name-location');
    firstNameLocation.innerText = firstname;
}

function SetSurname(surname) {
    const surnameLocation = document.getElementById('surname-location');
    surnameLocation.innerText = surname;
}

function StoreInSessionStorage(firstname, surname) {
    sessionStorage.setItem('firstname', firstname);
    sessionStorage.setItem('surname', surname);
}

function GetFromSessionStorage() {
    const firstname = sessionStorage.getItem('firstname');
    const surname = sessionStorage.getItem('surname');

    if (firstname != null) {
        SetFirstName(firstname);
    }

    if (surname != null) {
        SetSurname(surname);
    }

}
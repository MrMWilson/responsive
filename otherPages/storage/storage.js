function HandleOnClick() {
    UpdateTextLocation();
}

function UpdateTextLocation() {
    const firstNameText = document.getElementById('first-name-text');
    const surnameText = document.getElementById('surname-text');

    const firstNameLocation = document.getElementById('first-name-location');
    const surnameLocation = document.getElementById('surname-location');

    firstNameLocation.innerText = firstNameText.value;
    surnameLocation.innerText = surnameText.value;
}
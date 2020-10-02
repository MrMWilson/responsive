function HandleOnClick() {
    UpdateTextLocation();
}

function UpdateTextLocation() {
    const firstNameText = document.getElementById("first-name-text");
    const surnameText = document.getElementById("surname-text");

    const firstNameLoaction = document.getElementById("first-name-location");
    const surnameLocation = document.getElementById("surname-location");

    firstNameLoaction.innerText = firstNameText.value;
    surnameLocation.innerText = surnameText.value;

}
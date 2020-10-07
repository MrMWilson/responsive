function ChangeSliderColour() {
    let red = document.getElementById('redSlider');
    let green = document.getElementById('greenSlider');
    let blue = document.getElementById('blueSlider');

    red.style.background = "rgb(" + red.value + ",0,0)";
    green.style.background = "rgb(0," + green.value + ",0)";
    blue.style.background = "rgb(0,0," + blue.value + ")";

    UpdateSliderInfo();

    var mixedValue = document.getElementById('mixedColour');

    mixedValue.style.background = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";

}

function UpdateSliderInfo() {
    var redValue = document.getElementById('red-value');
    var greenValue = document.getElementById('green-value');
    var blueValue = document.getElementById('blue-value');

    redValue.textContent = document.getElementById('redSlider').value + "/255";
    greenValue.textContent = document.getElementById('greenSlider').value + "/255";
    blueValue.textContent = document.getElementById('blueSlider').value + "/255";
}

function HandleOnClick() {
    const red = document.getElementById('redSlider');
    const green = document.getElementById('greenSlider');
    const blue = document.getElementById('blueSlider');

    StoreInLocalStorage(red.value, green.value, blue.value);

    ChangeBackground(red, green, blue);
}


function ChangeBackground(red, green, blue) {

    var body = document.getElementById('background');

    body.style.background = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
}

function StoreInLocalStorage(red, green, blue) {

    localStorage.setItem("red", red);
    localStorage.setItem("green", green);
    localStorage.setItem("blue", blue);

}

function GetLocalStorage() {
    const red = localStorage.getItem("red");
    const green = localStorage.getItem("green");
    const blue = localStorage.getItem("blue");

    ChangeBackground(red, green, blue);


}
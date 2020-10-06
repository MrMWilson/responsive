function ChangeSliderColour() {
    let red = document.getElementById('redSlider');
    let green = document.getElementById('greenSlider');
    let blue = document.getElementById('blueSlider');

    red.style.background = "rgb(" + red.value + ",0,0)";
    green.style.background = "rgb(0," + green.value + ",0)";
    blue.style.background = "rgb(0,0," + blue.value + ")";

    UpdateSliderInfo();

}

function UpdateSliderInfo() {
    var redValue = document.getElementById('red-value');
    var greenValue = document.getElementById('green-value');
    var blueValue = document.getElementById('blue-value');

    redValue.textContent = document.getElementById('redSlider').value + "/255";
    greenValue.textContent = document.getElementById('greenSlider').value + "/255";
    blueValue.textContent = document.getElementById('blueSlider').value + "/255";
}
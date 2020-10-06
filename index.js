function ChangeSliderColour() {
    let red = document.getElementById('redSlider');
    let green = document.getElementById('greenSlider');
    let blue = document.getElementById('blueSlider');

    red.style.background = "rgb(" + red.value + ",0,0)";
}
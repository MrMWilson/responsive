function backgroundColour() {
    let red = document.getElementById('redSlider').value;
    let green = document.getElementById('greenSlider').value;
    let blue = document.getElementById('blueSlider').value;
    let colour = 'rgb(' + red + ',' + green + ',' + blue + ')';

    document.slider.backgroundColour = colour;
}
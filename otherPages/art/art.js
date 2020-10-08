async function GetImages(searchValue) {

    const data = await fetch(
        "https://pixabay.com/api/?key=18630248-e610ff73942466f92176aa233&q=" +
        searchValue +
        "&image_type=photo"
    );

    const result = await data.json();

    return result;
}

async function HandleSearchImges() {

    const searchValue = document.getElementById("search-value");

    const data = await GetImages(searchValue.value);

    RemoveOldImages();

    RenderImages(data.hits);
}

function RenderImages(imageData) {
    const location = document.getElementById('images-location');

    for (let i = 0; i < imageData.length; i++) {
        const image = imageData[i];

        const element = document.createElement("img");
        element.src = image.largeImageURL;
        element.classList.add("picture-box");
        element.classList.add("h-100");

        const div = document.createElement("div");
        div.classList.add("col-6");
        div.classList.add("picture-box-container");


        div.appendChild(element);

        location.appendChild(div);
    }
}

function RemoveOldImages() {
    const oldIMGs = document.getElementsByClassName("picture-box-container");
    const length = oldIMGs.length;

    for (let i = 0; i < length; i++) {
        const img = oldIMGs[0];
        img.remove();
    }

}
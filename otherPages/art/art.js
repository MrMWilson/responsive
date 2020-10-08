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

    const data = await GetImages("yellow-flowers");

    console.log(data);
}
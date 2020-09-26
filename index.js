function BeepBoop() {
  console.log('beep boop');
}

async function GenerateCards(num) {

  const cardDeck = document.getElementById('card-location');
  var beerInfo = await GetRandomBeer();
  for (let i = 0; i < num; i++) {
    const cardBorder = CreateCard(beerInfo[i]);
    cardDeck.appendChild(cardBorder);
  }

  console.log(GetColourPalette());

}

function CreateCard(beerObject) {

  const colourWheel = GetColourPalette();
  const colour = GetColour(colourWheel.length, colourWheel);
  console.log(beerObject);
  console.log(beerObject.abv);

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container', 'col-lg-4', 'mb-3', 'p-3', 'bg-transparent');

  const cardBorder = document.createElement('div');
  cardBorder.classList.add('card', 'bg-transparent', 'h-100');
  cardBorder.style.borderColor = colour;
  cardBorder.style.borderWidth = '2px';
  cardContainer.appendChild(cardBorder);

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header', 'bg-transparent');
  cardHeader.style.borderColor = colour;
  cardHeader.innerText = beerObject.name;
  cardHeader.style.color = colour;
  cardHeader.style.borderBottomWidth = '2px';
  cardBorder.appendChild(cardHeader);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'bg-transparent');
  cardBorder.appendChild(cardBody);

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.style.borderColor = colour;
  cardTitle.innerText = beerObject.tagline;
  cardTitle.style.color = colour;
  cardBody.appendChild(cardTitle);

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.style.borderColor = colour;
  cardText.innerText = beerObject.description;
  cardText.style.color = colour;
  cardBody.appendChild(cardText);

  const cardFooter = document.createElement('div');
  cardFooter.classList.add('card-footer', 'bg-transparent');
  cardFooter.style.borderColor = colour;
  cardFooter.innerText = 'ABV: ' + beerObject.abv;
  cardFooter.style.color = colour;
  cardBorder.appendChild(cardFooter);

  return cardContainer;
}

function GetColourPalette(num) {

  const neonHex = [];
  const styles = GetStyleDocuments();

  for (let i = 0; i < styles.length; i++) {
    const style = styles[i];
    const hex = getComputedStyle(document.documentElement).getPropertyValue(style);
    neonHex.push(hex);
  }

  return neonHex;
}

function GetStyleDocuments() {
  const returnList = []
  const styleList = getComputedStyle(document.documentElement);
  for (let i = 0; i < styleList.length; i++) {
    const style = styleList[i];
    if (style.startsWith('--neon-')) {
      returnList.push(style);
    }
  }
  return returnList;
}

function GetColour(num, colourWheel) {

  const random = GenerateRandomNumber(num);
  return colourWheel[random];
}

function GenerateRandomNumber(upperRange) {
  var randomNumber = Math.floor(Math.random() * (parseInt(upperRange) - parseInt(0)) + parseInt(0));
  return randomNumber;
}

function GetRandomBeer() {

  var randomBeer = fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6', {
      method: 'GET'
    })
    .then(
      response => response.json()
    )
    .then(
      data => {
        return data;
      }
    );

  return randomBeer;
}
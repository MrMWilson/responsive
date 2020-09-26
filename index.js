function BeepBoop() {
  console.log('beep boop');
}

function GenerateCards(num) {

  const cardDeck = document.getElementById('card-location');

  for (let i = 0; i < num; i++) {
    const cardBorder = CreateCard();
    cardDeck.appendChild(cardBorder);
  }

  console.log(GetColourPalette());

}

function CreateCard() {

  const colourWheel = GetColourPalette();

  const cardBorder = document.createElement('div');
  cardBorder.classList.add('card', 'mb-3', 'col-lg-4', 'p-3', 'bg-transparent');
  cardBorder.style.borderColor = GetColour(colourWheel.length, colourWheel);

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header', 'bg-transparent');
  cardHeader.style.borderColor = GetColour(colourWheel.length, colourWheel);
  cardBorder.appendChild(cardHeader);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'bg-transparent');
  cardBorder.appendChild(cardBody);

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.style.borderColor = GetColour(colourWheel.length, colourWheel);
  cardBody.appendChild(cardTitle);

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.style.borderColor = GetColour(colourWheel.length, colourWheel);
  cardBody.appendChild(cardText);

  const cardFooter = document.createElement('div');
  cardFooter.classList.add('card-footer', 'bg-transparent');
  cardFooter.style.borderColor = GetColour(colourWheel.length, colourWheel);
  cardBorder.appendChild(cardFooter);

  return cardBorder;
}

function ColourGenerator() {

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
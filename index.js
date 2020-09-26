function BeepBoop() {
  console.log('beep boop');
}

function GenerateCards(num) {

  //debugger;

  for (let i = 0; i < num; i++) {
    const cardBorder = document.createElement('div');
    cardBorder.classList.add('card', 'mb-3', 'col-lg-4', 'p-3');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header', 'bg-transparent');
    cardBorder.appendChild(cardHeader);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBorder.appendChild(cardBody);

    const cardDeck = document.getElementById('card-location');
    cardDeck.appendChild(cardBorder);
  }

  /*

<div class="card border-success mb-3" style="max-width: 18rem;">
  <div class="card-header bg-transparent border-success">Header</div>
  <div class="card-body text-success">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-footer bg-transparent border-success">Footer</div>
</div>

*/




}

function ColourGenerator() {

}

function GetColourPalette() {

}

function GetRandomNumber(lower, upper) {

}
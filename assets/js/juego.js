// 2C = two of Clubs

let deck = [];
let deckWithOutCard = [];
const types = ["C", "D", "H", "S"];
const specials = ["A", "J", "Q", "K"];

let playerPoints = 0,
  dealerPoints = 0;

const divPlayerCards = document.querySelector("#playerCards");
const playerScore = document.querySelector("small");

const btnAsk = document.querySelector("#btnAsk");

const createDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let type of types) {
      deck.push(i + type);
    }
    // deck.push(i + "C");
  }
  for (let type of types) {
    for (let esp of specials) {
      deck.push(esp + type);
    }
  }
  //   console.log(deck);
  deck = _.shuffle(deck);
};
createDeck();

const askCard = () => {
  if (deck.length === 0) {
    throw "No cards in the deck";
  }

  const card = deck.pop();

  // let deckWithOutCard = () => {
  //     for (let i = 0; index < deck.length; index++) {
  //         if (deck[i] === card){
  //             let spliced = deck.splice(i, 1)
  //         }
  //     }
  //     deckWithOutCard = deck.spliced()
  // }
  return card;
};
// askCard();

const cardValue = (card) => {
  const value = card.substring(0, card.length - 1);
  return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1;
};

btnAsk.addEventListener("click", () => {
  const card = askCard();
  playerPoints = playerPoints + cardValue(card);
  playerScore.innerHTML = `${playerPoints}`;

  const cardImg = document.createElement("img");
  cardImg.src = `assets/cartas/${card}.png`;
  cardImg.classList.add("card");
  divPlayerCards.append(cardImg);

  if (playerPoints > 21) {
    console.warn("Sorry, You have lost");
    btnAsk.disabled = true;
  } else if (playerPoints === 21) {
    console.warn("21, You won!");
    btnAsk.disabled = true;
  }
});

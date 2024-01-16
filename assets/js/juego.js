// 2C = two of Clubs

let deck = [];
let deckWithOutCard = [];
const types = ["C", "D", "H", "S"];
const specials = ["A", "J", "Q", "K"];

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

  console.log(deck);
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

  //   let points = 0;

  //   if (isNaN(value)) {
  //     points = value === "A" ? 11 : 10;
  //     console.log("No es un numero");
  //   } else {
  //     console.log("Es un numero");
  //     points = value * 1;
  //   }
  //   console.log(points);
};

const value = cardValue(askCard());
console.log({ value });

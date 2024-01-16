// 2C = two of Clubs

let deck = [];
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
  console.log(deck);
};
createDeck();

// 2C = two of Clubs

let deck = [];
const types = ["C", "D", "H", "S"];

const createDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let type of types) {
      deck.push(i + type);
    }

    // deck.push(i + "C");
  }
  console.log(deck);
};
createDeck();

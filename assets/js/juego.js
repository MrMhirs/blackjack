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

    let card = deck.pop();
    let deckWithOutCard = () => {
        for (let i = 0; index < deck.length; index++) {
            if (deck[i] === card){
                let spliced = deck.splice(i, 1)
            }
        }
    }

  console.log(card);
  console.log(deck);
  console.log(deckWithOutCard);
};

askCard();

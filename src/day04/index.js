const { readArray } = require("../utils");

class Card {
  rows = new Array(5).fill(0);
  cols = new Array(5).fill(0);
}

function processInput(input) {
  const firstLine = input.shift();
  const numbers = firstLine.split(",").map(Number);

  const cards = input
    .flatMap((s) => s.split(" "))
    .filter(Boolean)
    .map(Number);
  const numCards = cards.length / 25;

  return { numbers, cards, numCards };
}

function day04_1(fileName) {
  const input = readArray(fileName);
  const { numbers, cards, numCards } = processInput(input);
  const n = numbers.length;
  let i = 0;
  let win = false;

  let markedCards = new Array(numCards).fill(0).map(() => new Card());

  while (!win && i < n) {
    const num = numbers[i];

    let index = cards.findIndex((c) => c === num);
    while (index >= 0) {
      cards.splice(index, 1, -1);
      const col = index % 5;
      const card = Math.floor(index / 25);
      const row = Math.floor((index - card * 25) / 5);
      markedCards[card].rows[row] += 1;
      markedCards[card].cols[col] += 1;
      if (
        markedCards[card].rows[row] === 5 ||
        markedCards[card].cols[col] === 5
      ) {
        win = true;
        const value = cards
          .slice(card * 25, card * 25 + 25)
          .filter((c) => c !== -1)
          .reduce((acc, c) => acc + c, 0);
        return value * num;
      }
      index = cards.findIndex((c) => c === num);
    }

    i++;
  }

  return 0;
}

function day04_2(fileName) {
  const input = readArray(fileName);
  const { numbers, cards, numCards } = processInput(input);
  const n = numbers.length;
  let i = 0;
  let wins = false;

  let markedCards = new Array(numCards).fill(0).map(() => new Card());
  let num;
  while (markedCards.length >= 1 && i < n) {
    num = numbers[i];

    let index = cards.findIndex((c) => c === num);
    while (index >= 0) {
      cards.splice(index, 1, -1);
      const col = index % 5;
      const card = Math.floor(index / 25);
      const row = Math.floor((index - card * 25) / 5);
      markedCards[card].rows[row] += 1;
      markedCards[card].cols[col] += 1;
      if (
        markedCards[card].rows[row] === 5 ||
        markedCards[card].cols[col] === 5
      ) {
        if (markedCards.length > 1) {
          markedCards.splice(card, 1);
          cards.splice(card * 25, 25);
        } else {
          const value = cards
            .filter((c) => c !== -1)
            .reduce((acc, c) => acc + c, 0);
          return value * num;
        }
      }
      index = cards.findIndex((c) => c === num);
    }

    i++;
  }

  return 0;
}

function day04Run(fileName) {
  console.log(day04_1(fileName));
  console.log(day04_2(fileName));
}

day04Run("./src/day04/data.txt");

module.exports = { day04_1, day04_2 };

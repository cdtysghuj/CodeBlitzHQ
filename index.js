function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there are elements remaining
  while (currentIndex !== 0) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const shuffledDeck = shuffle([1, 2, 3, 4, 5]);
console.log(shuffledDeck);

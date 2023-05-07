// Code your solutions in this file
// Code your solutions in this file

const gifts = []

function wrapGifts(gifts) {
  const i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++;
  }
  return gifts;
}

wrapGifts(gifts);

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
countDown(10)

function writeCards(names, occasion) {
  let messages = [];

  for (const name of names) {
    messages.push(`Thank you, ${name}, for the wonderful ${occasion} gift!`);
  }

  return messages;
}

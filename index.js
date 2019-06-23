// Code your solutions in this file
function writeCards(array, word) {
  let message = []
  for (let i = 0; i < array.length; i++) {
    message.push(`Thank you, ${array[i]}, for the wonderful ${word} gift!`);
  }
  return message;
}

function countdown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(num);
    num-=1;
  }
}

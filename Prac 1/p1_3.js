let number = Math.floor(Math.random() * 10) + 1;
let guess = prompt("Guess a number between 1 and 10:");

if (parseInt(guess) === number) {
  console.log("You Won!!!");
} else {
  console.log("You Lost, Answer is " + number);
}
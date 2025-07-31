const user = prompt("What the max number is?")
const random = Math.floor(Math.random() * user) + 1;
let guess = prompt("Guess What the Number is?");
while (true) {
    if (guess == "quit") {
        consoloe.log("Game End");
        break;
    }

    if (guess == random) {
        console.log("Congratulation u won");
        break;
    } else if (guess < random) {
        guess = prompt("Hint:Your Guess Was too small.Try Again");
    } else {
        guess = prompt("Hint:Your Guess Was too Large. Try Again");
    }
}
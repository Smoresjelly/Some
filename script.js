// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize the number of attempts
let attempts = 0;

// Function to start the game
function startGame() {
    // Ask the player to guess a number
    let guess = parseInt(prompt("Guess a number between 1 and 100:"));

    // Keep track of the number of attempts
    attempts++;

    // Check if the guess is correct
    if (guess === randomNumber) {
        // If the guess is correct, display a congratulatory message
        alert(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`);
    } else {
        // If the guess is incorrect, provide a hint
        let message = guess > randomNumber ? "Too high. Try again!" : "Too low. Try again!";
        alert(message);

        // Ask the player to guess again
        startGame();
    }
}

// Start the game
startGame();

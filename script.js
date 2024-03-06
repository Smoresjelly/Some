<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Guessing Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            text-align: center;
            color: #333;
        }

        p {
            text-align: center;
            color: #666;
        }

        input[type="number"] {
            width: 100px;
            padding: 10px;
            margin-top: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }

        button {
            display: block;
            width: 100%;
            padding: 10px;
            margin-top: 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Number Guessing Game</h1>
        <p>Try to guess the number between 1 and 100!</p>
        <input type="number" id="guessInput" min="1" max="100">
        <button onclick="startGame()">Guess</button>
    </div>

    <script>
        // Generate a random number between 1 and 100
        const randomNumber = Math.floor(Math.random() * 100) + 1;

        // Initialize the number of attempts
        let attempts = 0;

        // Function to start the game
        function startGame() {
            // Get the player's guess
            const guessInput = document.getElementById('guessInput');
            const guess = parseInt(guessInput.value);

            // Increment the number of attempts
            attempts++;

            // Check if the guess is correct
            if (guess === randomNumber) {
                // If the guess is correct, display a congratulatory message
                alert(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`);
            } else {
                // If the guess is incorrect, provide a hint
                let message = guess > randomNumber ? "Too high. Try again!" : "Too low. Try again!";
                alert(message);
            }
        }
    </script>
</body>
</html>



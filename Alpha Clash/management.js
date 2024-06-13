function continueGame() {
    const alphabet = getRandomAlphabet();
    const randomAlpha = document.getElementById('random-alpha');
    randomAlpha.innerText = alphabet;
    setBgColor(alphabet);
    return alphabet;
}
function play() {
    hideElements('home-section');
    hideElements('score-section')
    addElements('keyboard-section');

    setValue('previous-life', 1);
    setValue('previous-score', 0)

    continueGame();
}

document.addEventListener('keypress', function (event) {
    const playerPress = event.key;
    const randomElement = document.getElementById('random-alpha').innerText;
    const expectedAlpha = randomElement.toLocaleLowerCase();
    const escape = 'Escape';
    if (playerPress === expectedAlpha) {
        console.log('You won');
        const currentScore = getScores('previous-score');
        const newScore = currentScore + 1;
        setValue('previous-score', newScore);

        // -----------------------------------------
        // const previousScore = document.getElementById('previous-score');
        // const currentText = previousScore.innerText;
        // const currentScore = parseInt(currentText);
        // const newScore = currentScore + 1;
        // previousScore.innerText = newScore;
        // console.log('You pressed', playerPress, expectedAlpha);
        removeBgColor(expectedAlpha);
        continueGame();
    }
    else if (playerPress === escape) {
        gameOver();
    }
    else{
        console.log('You lost the game');
        // const previousLife = document.getElementById('previous-life');
        // const current = previousLife.innerText;
        // const currentLife = parseInt(current);
        const currentLife = getScores('previous-life')
        const newLife = currentLife - 1;
        setValue('previous-life', newLife);
        if (newLife === 0) {
            gameOver();
        }
    }
    const gameScore = document.getElementById('previous-score').innerText;
    setValue('game-score', gameScore);
    const currentAlphabet = getCurrentAlphabet('random-alpha');
    removeBgColor(currentAlphabet);
})

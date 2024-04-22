function hideElements(elementId) {
    const hideElement = document.getElementById(elementId);
    hideElement.classList.add('hidden');
}
function addElements(elementId) {
    const addElement = document.getElementById(elementId);
    addElement.classList.remove('hidden');
}
function getRandomAlphabet() {
    const allAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    allAlphabet.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = allAlphabet[index];
    return alphabet;
}

function setBgColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBgColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getScores(elementId) {
    const pastScore = document.getElementById(elementId).innerText;
    const value = parseInt(pastScore);
    return value;
}
function setValue(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}


function gameOver() {
    hideElements('keyboard-section');
    addElements('score-section');
}

function getCurrentAlphabet(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}
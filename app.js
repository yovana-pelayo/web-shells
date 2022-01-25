// import functions and grab DOM elements

// let state
const espressoButton = document.getElementById('espresso-button');
const americanoButton = document.getElementById('americano-button');
const frappeButton = document.getElementById('frappe-button');

const espressoContainer = document.getElementById('espresso-container');
const americanoContainer = document.getElementById('espresso-container');
const frappeContainer = document.getElementById('frappe-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');


// set event listeners 
  // get user input
  // use user input to update state 

const hidingPlaces = ['espresso', 'americano', 'frappe'];

let correctGuesses = 0;
let totalGuesses = 0;

espressoButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'espresso');
});
americanoButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'americano');
});

frappeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'frappe');
});
  //add event listener generates a random number from 
  // the hiding places are its options and the hiding spot is where the ball will be
    
function handleGuess(correctSpot, userGuess) {
    espressoContainer.classList.remove('cup');
    americanoContainer.classList.remove('cup');
    frappeContainer.classList.remove('cup');
    totalGuesses++;

    totalEl.textContent = totalGuesses;

    if (correctSpot === 'espresso'){
        espressoContainer.classList.add('cup');
    } 
    else if (correctSpot === 'americano'){
        americanoContainer.classList.add('cup');
    }
    else {
        frappeContainer.classList.add('cup');
    }
    if (correctSpot === userGuess) { correctGuesses++;
        winsEl.textContent = correctGuesses;
    } else {
        lossesEl.textContent = totalGuesses - correctGuesses;
    }
}
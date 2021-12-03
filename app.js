// import functions and grab DOM elements
import { newStatsString } from './utils.js';
const skyDropdown = document.querySelector('#skyline-drop');
const waterfrontDropdown = document.querySelector('#waterfront-drop');
const castleDropdown = document.querySelector('#castle-drop');

const skyImg = document.querySelector('#skyline-image');
const waterImg = document.querySelector('#water-image');
const castleImg = document.querySelector('#castle-image');

const sloganInput = document.querySelector('#slogan-input');
const sloganButton = document.querySelector('#slogan-button');
const sloganEl = document.querySelector('#slogan');

const reportEl = document.querySelector('#report');



// let state

let skyCount = 0;
let waterCount = 0;
let castleCount = 0;

const slogan = [];

// set event listeners

skyDropdown.addEventListener('change', () => {
    const id = skyDropdown.value;
    skyCount++;
    skyImg.src = `./assets/skyline-${id}.jpeg`;

    displayStats();
});
waterfrontDropdown.addEventListener('change', () => {
    const id = waterfrontDropdown.value;
    waterCount++;
    waterImg.src = `./assets/waterfront-${id}.jpeg`;

    displayStats();
});
castleDropdown.addEventListener('change', () => {
    const id = castleDropdown.value;
    castleCount++;
    castleImg.src = `./assets/castle-${id}.jpeg`;

    displayStats();
});
sloganButton.addEventListener('click', () => {
    const differentSlogan = sloganInput.value;
    slogan.push(differentSlogan);
    sloganInput.value = '';

    displaySlogan();
});

function displayStats() {
    const statsString = newStatsString(skyCount, waterCount, castleCount);
    reportEl.textContent = statsString;
}

function displaySlogan() {
    sloganEl.textContent = '';
    for (let slogans of slogan) {
        const p = document.createElement('p');

        p.classList.add('slogans');
        p.textContent = slogans;

        sloganEl.append(p);
  

    }
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

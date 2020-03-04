import * as displayInstructions from './displayInstructions';

export const elements = {
    displayTitle: document.querySelector('.calculator__title'),
    displayInstructions: document.querySelector('.calc__instructions'),
    displayButton: document.querySelector('.btn'),
    calculateResults: document.querySelector('.calc__results'),
    displayResults: document.querySelector('.calc__results'),
    valueForm: document.querySelector('.value'),
    valueInput: document.querySelector('.value__add'),
    calculator: document.querySelector('.calculator')
};

export function clearDisplay() {
    elements.valueForm.style.display = 'none';
    elements.displayButton.style.display = 'none';
    elements.displayTitle.innerHTML = '';
    elements.displayInstructions.innerHTML = '';
    elements.displayResults.innerHTML = '';
}

// Clear input field
export function clearFields() {
    elements.valueInput.value = '';
}

function renderTitle() {
    elements.displayTitle.insertAdjacentHTML('afterbegin', `<h1>DelayCalc</h1>`);
}

// Variable for defining page between insert bpm and results
export let pageType = 0;

// Variable for not allowing to render more than one button
export let btn = 0;

// Variable for defining, is error message already visible
export let errorMessage = false;

// Change button name between 'Enter' and 'Reset'
export function changeButton() {
    pageType === 0 ? document.getElementById('btn-1').innerHTML = 'Reset' : document.getElementById('btn-1').innerHTML = 'Enter';
}

export function changePageType() {
    pageType === 0 ? pageType = 1 : pageType = 0;
}

export function changeErrorMessage() {
    errorMessage === false ? errorMessage = true : errorMessage = false;
}

// Initialize the app
export const init = () => {
    clearDisplay();
    pageType = 0;
    renderTitle();
    elements.valueForm.style.display = 'block';
    displayInstructions.renderInstructions();
    if (btn !== 1) {
        displayInstructions.renderButton();
        btn = 1;
    } 
    elements.displayButton.style.display = 'block';
}
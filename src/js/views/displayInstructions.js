import {elements, changeErrorMessage} from './base';
import {pageType} from '../views/base';

export const renderInstructions = () => {
    const markup = `<div class="calculator__description">
    <p class="desc__text">Calculate note lengths in milliseconds by inserting the BPM of the song.</p></div>      
    `;
    elements.displayInstructions.insertAdjacentHTML('afterbegin', markup);
}

export const createButton = (type) => `
    <button class="button" id="btn-1">
        <span>${type === 0 ? 'Enter' : 'Reset'}</span>
    </button> `;


export const renderButton = () => {
    let button = createButton(pageType);
    elements.displayButton.insertAdjacentHTML('beforeend', button);
}

export const renderError = () => {
    const markup = `<div class="alert">
    <!--<span class="closebtn" id="close" onclick="this.parentElement.style.display='none';">&times;</span>-->
    Error with value. Put a bpm between 50 - 300.</div>`;
    elements.calculator.insertAdjacentHTML('afterbegin', markup);
    changeErrorMessage();
}
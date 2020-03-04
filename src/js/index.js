import {pageType, errorMessage} from './views/base';
import {renderError} from './views/displayInstructions';
import * as base from './views/base';
import * as calculateResults from './views/calculateResults';


/*** Clear previous fields and initialize the app **/

base.clearDisplay();
base.init();

/***
*** RESULTS CONTROLLER ***
***/


// 1. Get the value from valueInput element
let value = 0;
base.elements.displayButton.addEventListener('click', e => {
    
    const btn = e.target.closest('.button');

// 2. If the current page is results page, init
    if (pageType === 1) {
        base.changeButton();
        base.init();
        return;
    }  
    if (btn) {

// 3. If value is correct, store it in a variable. 
// Clear display, change button and page type.  
// Otherwise, jump to the 4.
        if (base.elements.valueInput.value >= 50 && base.elements.valueInput.value <= 300) {
            value = base.elements.valueInput.value;
            base.clearFields();
            base.clearDisplay();
            if (errorMessage) {
                document.querySelector('.alert').style.display='none';
                base.changeErrorMessage();               
            }
            base.changeButton();
            base.changePageType();
            
// 3. Send the value.               
            calculateResults.renderCalculations(value);

// 4. If value is not correct, alert an error message.           
        } else {
            if (!errorMessage) renderError();
        }                                
    }
});



import { isValidInput } from './isValidInput.js';
import { isValidProgressBar } from './isValidProgressBar.js';

function renderProgressBar(selector, data) {
    // input validation
    if (!isValidInput(selector, data)) {
        return false;
    }

// RANDAME VIETA KUR REIKES PADETI TURINI
    const DOM = document.querySelector('.left > p'); 
    if (!DOM)  {
        return false;
    }
    
    // GENERUOJAME TURINI

    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const bar = data[i];
        if (!isValidProgressBar(bar)) {
            continue;
        }

        console.log(bar);
        HTML += `<div class="progress-bar">
        <div class="top">
            <div class="label">${bar.title}</div>
            <div class="value">${bar.value}%</div>
        </div>
        <div class="bottom">
            <div class="progress" style="width: ${bar.value}%;">
                <div class="bar"></div>
        </div>
        </div>`;
    }

    //post logic validation 

    if (HTML === '') {
        console.log('nerasta tinkamu duomenu');
        return false;
    }

    DOM.innerHTML += HTML;
    return true;

    // DOM.insertAdjacentHTML('beforebegin', HTML)
}

export { renderProgressBar }
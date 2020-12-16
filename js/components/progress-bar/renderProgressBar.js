function renderProgressBar(selector, data) {

    // GENERUOJAME TURINI

    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const bar = data[i];
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
    console.log(HTML);

// RANDAME VIETA KUR REIKES PADETI TURINI
    const DOM = document.querySelector('.left > p');

    DOM.innerHTML += HTML;

    // DOM.insertAdjacentHTML('beforebegin', HTML)
}

export { renderProgressBar }
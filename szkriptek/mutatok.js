'use strict';

function mutatok() {
    mutatokBeallit();

    nagy.style.transform = `rotate(${hour % 12 * 30 + perc / 2}deg)`;
    nagy.style.transformOrigin = 'bottom';
    tarto.appendChild(nagy);

    percM.style.transform = `rotate(${perc * 6 + masod / 10}deg)`;
    percM.style.transformOrigin = 'bottom';
    tarto.appendChild(percM);

    kis.style.transform = `rotate(${masod * 6}deg)`;
    kis.style.transformOrigin = 'bottom';
    tarto.appendChild(kis);

    let belsoKor = document.createElement('div');
    beallit('id', 'belsoKor', belsoKor);
    tarto.appendChild(belsoKor);
}
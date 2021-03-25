'use strict';

function mutatokBeallit() {
    for (let i = 1; i < 61; i++) {
        let rud = document.createElement('div');
        beallit('id', 'beallitoRud', rud);
        let potty = document.createElement('div');
        beallit('id', 'percPotty', potty);
        rud.appendChild(potty);
        if (i % 5 == 0) {
            potty.style.backgroundColor = 'red';
            let szam = document.createElement('span');
            beallit('id', 'szam', szam);
            let szoveg = document.createTextNode(i / 5);
            szam.style.transform = `rotate(${-6 * i}deg)`;
            szam.appendChild(szoveg);
            rud.appendChild(szam);
        }
        rud.style.transform = `rotate(${6 * i}deg)`;
        rud.style.transformOrigin = `bottom`;

        tarto.appendChild(rud);
    }
}
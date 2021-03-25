'use strict';

function karakterek() {
    karakterAllitTizes(3, hour, oraE);
    digitOra.appendChild(oraE);
    
    karakterAllitEgyes(10, hour, oraM);
    digitOra.appendChild(oraM);
    
    kettosPont.src = `./szamok/CPDG.GIF`;
    setTimeout(() => {
        kettosPont.src = `./szamok/bl.gif`;
    }, 500);

    digitOra.appendChild(kettosPont);

    karakterAllitTizes(10, perc, minuteE);
    digitOra.appendChild(minuteE);

    karakterAllitEgyes(10, perc, minuteM);
    digitOra.appendChild(minuteM);
    
    karakterAllitTizes(10, masod, masodE);
    digitOra.appendChild(masodE);
    
    karakterAllitEgyes(10, masod, masodM);
    digitOra.appendChild(masodM);

    tarto.appendChild(digitOra);
}
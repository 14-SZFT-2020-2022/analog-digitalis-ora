'use strict';

let digitOra = document.createElement('div');
let oraE = document.createElement('img');
let oraM = document.createElement('img');
let kettosPont = document.createElement('img');
let minuteE = document.createElement('img');
let minuteM = document.createElement('img');
let masodE = document.createElement('img');
let masodM = document.createElement('img');

function digitalisBeallitas() {
    beallit('id', 'digitalisOra', digitOra);
    beallit('id', 'oraTizes', oraE);
    beallit('id', 'oraEgyes', oraM);
    beallit('id', 'kettosPont', kettosPont);
    beallit('id', 'percTizes', minuteE);
    beallit('id', 'percEgyes', minuteM);
    beallit('id', 'masodpercTizes', masodE);
    beallit('id', 'masodpercEgyes', masodM);
}
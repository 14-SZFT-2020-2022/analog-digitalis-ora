'use strict';

setInterval(ora, 1000);

let tarto = document.getElementById('tarto');
let hour = null;
let perc = null;
let masod = null;

analogBellitas();

digitalisBeallitas();

function beallit(attr, ertek, elem) {
    let attributum = document.createAttribute(attr);
    attributum.value = ertek;
    elem.setAttributeNode(attributum);
}

function ora() {
    let ido = new Date();
    hour = ido.getHours();
    perc = ido.getMinutes();
    masod = ido.getSeconds();

    mutatok();

    karakterek();
}
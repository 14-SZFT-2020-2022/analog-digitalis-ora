'use stict';

function karakterAllitEgyes(eddig, ido, ide) {
    for (let i = 0; i < eddig; i++) {
        if (ido % 10 == i) {
            ide.src = `./szamok/${i}PDG.GIF`;
        }
    }
}

function karakterAllitTizes(eddig, ido, ide) {
    for (let i = 0; i < eddig; i++) {
        if (Math.floor(ido / 10) == i) {
            ide.src = `./szamok/${i}PDG.GIF`;
        }
    }
}
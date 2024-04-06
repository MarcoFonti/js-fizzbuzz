// Check
console.log('JS OK');


/* CICLO FOR DA 1 A 100 INCREMENTANDO DI UNO OGNI GIRO  */
for (let i = 1; i <= 100; i++) {
    /* CONTROLLO LA I */
    console.log(i);


    /* CREO UNA VARIBILE E GLI ASSEGNO LA I PER NANIPOLARLA NELLA CONDIZIONE */
    let element = i;


    /* SE MULTIPLO DI DI 15 */
    if (i % 15 === 0) {
        /* STAMPO */
        element = 'fizzbuzz';

        /* ALTRIMENTI SE MULTIPLO DI 3 */
    } else if (i % 3 === 0) {

        /* STAMPO */
        element = 'fizz';

        /* ALTRIMENTI SE MULTIPLO DI 5 */
    } else if (i % 5 === 0) {

        /* STAMPO */
        element = 'buzz';
    }


    /* CONTROLLO IL RISULTATO */
    console.log(element);
}


/* RECUPERO ELEMENTO ID IN HTML */
const list = document.getElementById('recipe-numbers');


/* CREO UNA VARIBILE VUOTA PER ASSEGNARLA IN SEGUITO */
let items = '';


/* CICLO FOR DA 1 A 100 INCREMENTANDO DI UNO OGNI GIRO  */
for (let i = 1; i <= 100; i++) {


    /* CREO UNA VARIBILE E GLI ASSEGNO LA I PER NANIPOLARLA NELLA CONDIZIONE */
    let element = i;


    /* SE MULTIPLO DI 3 E ANCHE 5  */
    if (i % 3 === 0 && i % 5 === 0) {

        /* STAMPO */
        element = 'fizzbuzz';

        /* ALTRIMENTI SE MULTIPLO SOLO DI 3 */
    } else if (i % 3 === 0) {

        /* STAMPO */
        element = 'fizz';

        /* ALTRIMENTI SE MULTIPLO SOLO DI 5 */
    } else if (i % 5 === 0) {

        /* STAMPO */
        element = 'buzz';
    }


    /* CREO UNA VARIBILE VUOTA PER USARLA DENTRO A UNA CONDIZIONE */
    let className = '';


    /* SE LA VARIBILE ELEMENT NON E' UN NUMERO */
    if (isNaN(element)) {

        /* SE NON E' UN NUMERO LA METTO IN UNA VARIBILE */
        className = element;
    }


    /* CONTROLLO IL RISULTATO */
    console.log(element);


    /* AGGIUNGO ALLA VARIBILE ITEMS UN TAG HTML HA CUI PASSO SPECIFICI VALORI RECUPERATI  */
    items += `<li class="${className}">${element}</li>`;
}


/* STAMPO IN PAGINA */
list.innerHTML = items;
// Check
console.log('JS OK');

/*for (let i = 1; i <= 100; i++){
    //console.log(i);
    
    let element = i;

    if(i % 15 === 0) {
        element = 'fizzbuzz';
    } else if (i % 3 === 0) {
        element = 'fizz';
    } else if (i % 5 === 0) {
        element = 'buzz';
    } 

    console.log(element);
}*/


//Predndo Id 
const list = document.getElementById('recipe-numbers');

// Creo la variabile in cui ci andro a scrivere 
let items = '';

// Creo condizione
for (let i = 1; i <= 100; i++){
    
    // Creo la variabile che nel caso cambi alla condizione
    let element = i;

    if(i % 3 === 0 && i % 5 === 0) {
        element = 'fizzbuzz';
    } else if (i % 3 === 0) {
        element = 'fizz';
    } else if (i % 5 === 0) {
        element = 'buzz';
    }

    let className = '';
    if (isNaN(element)) {
        className = element;
    }

    // Stampo in console
    //console.log(element);

    // Riempo la mia variabile
    items += `<li class="${className}">${element}</li>`;
}

// Stampo in pagina
list.innerHTML = items;
/* Snack 1
Creare un array di oggetti: 
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
*/

const bici = [
    {
        name: "bici1",
        peso: 7,
    },
    {
        name: "bici2",
        peso: 8,
    },
    {
        name: "bici3",
        peso: 6,
    },
];

let biciLeggera = bici[0]

for (let i = 0; i < bici.length; i++) {
    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    };
};

console.log(biciLeggera);


/*
* Snack 2
 
 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatt, falli subiti.
 Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
 Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
 Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/



const squadre = [
    {
        nome: "Juventus",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Atalanta",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Sassuolo",
        punti: 0,
        falli: 0,
    },
];

for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = randomNumber(0, 100);
    squadre[i].falli = randomNumber(0, 100);
}

console.log(squadre);

const nuovoArray = [];

for (let i = 0; i < squadre.length; i++) {
    nuovoArray.push({
        nome: squadre[i].nome,
        falli: squadre[i].falli,
    })
}

console.log(nuovoArray);

// Funzione
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


/* Snack 3 

Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
inseriti dall'utente (è possibile usare, ad esempio, for/foreach/filter

*/

let numMin = parseInt(prompt("inseire numero minimo"));
let numMax = parseInt(prompt("inseire numero massimo"));
const array = ["Paolo", "Fabio", "Lorenzo", "Mirko"];
const array2 = [];

array.forEach((element, index) => {
    if (index >= numMin && index <= numMax) {
        array2.push(element);
    };
});
console.log(array2);


/* Snack 4

Dato un'array con dei capi d'abbigliamento 
- oggetti che contengono informazioni su nome modello, tipologia e colore - 
si aggiunga a ciascun elemento una ulteriore proprietà che indichi il costo del prodotto.
Per inserire il costo del singolo prodotto si scriva una funzione che generi un numero random da 10 a 50 (potete sfruttare il map per aggiungere la nuova proprietà)

*/

const vestiti = [
    {
        nome: "maglia",
        tipo: "tipo1",
        colore: "giallo"
    },
    {

        nome: "pantaloni",
        tipo: "tipo2",
        colore: "nero"

    },
    {

        nome: "gonna",
        tipo: "tipo3",
        colore: "verde"

    }
]

vestiti.forEach((element) => {

    element.prezzo = random(10, 50);
});

console.log(vestiti);

// Funzione
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
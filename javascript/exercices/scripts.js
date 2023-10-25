


// Null
let myNull = null;

// Undefined
let myUndefined = undefined;

// Array
let myArray1 = [1, 2, 3, 4, 5];
let myArray2 = ["Hello", "World", "Test"];
let myArray3 = [1, "Hello", true, null, undefined, [1, 2, 3]]; // à éviter

// /!\ ATTENTION /!\ Un tableau commence toujours par l'index 0 !!!
console.log(myArray1);
console.log(myArray1[0]);
console.log(myArray1[2]);
console.log(myArray1[5]); // undefined

let arrayIndex = 1
console.log(myArray1[arrayIndex]);

// Object { clé : valeur }
let myObject1 = {
    prenom : "John",
    nom : "Doe",
    age : 30,
    isAdult : true,
    objectImbrique : {
        prenom : 'Bob'
    },
    childrens : [

    ],
}

console.log(myObject1);
console.log(myObject1.nom);
console.log(myObject1.objectImbrique.prenom);
console.log(myObject1['nom']);

let myKey = 'nom';
console.log(myObject1[myKey]);
console.log(myObject1.myKey); // undefined

/**
 * Opérateurs
 */



// Opérateurs d'incrémentation / décrémentation
let myNumber = 10;
myNumber = myNumber + 1; // 11
myNumber += 1; // 12
myNumber++; // 13 => Incrémentation de 1 uniquement

myNumber--; // 12 => Décrémentation de 1 uniquement
myNumber += 10; // 23
myNumber -= 10; // 13
myNumber *= 10; // 130
myNumber /= 10; // 13




// Opérateurs de concaténation
/*
    + Concaténation "Hello" + "World" => "HelloWorld" // "Hello " + "World" => "Hello World"
 */

/**
 * Conditions : condition doit être un boolean (true ou false)
 */

/*
    if(condition) { // ex: x < 10
        => Si la condition est vraie
    }

    if(condition){
        => Si la condition est vraie
    } else {
        => Si la condition est fausse
    }

    if(condition){
        => Si la condition est vraie
    } else if(otherCondition){
        => Si otherCondition est vraie
    } else {
        => Si la condition et otherCondition sont fausses
    }
 */


if(10 > 5) {
    console.log("10 est supérieur à 5");
} else {
    console.log("10 n'est pas supérieur à 5");
}

// Ternaires : à éviter au début car plus compliqué à lire
// Permet d'écrire les conditions lorsqu'elles sont courtes sur une seule ligne
// condition ? si vrai : si faux
(10 > 5 ? console.log("10 est supérieur à 5") : console.log("10 n'est pas supérieur à 5"));


/**
 * Boucles
 */

// for : pour faire une boucle avec un nombre de tours définis
// for(condition de départ; condition de fin; incrémentation / décrémentation)
for (let i = 0; i < 10; i++) {
    console.log(`i=${i}`);
}

let myArray = [1, 2, 3, 4]
for (let j = 0; j < myArray.length; j++) {
    console.log(`j=${j}`);
}


// while : exectute la boucle tant que la condition de fin n'est pas atteinte
let k = 0; // condition de départ
while (k < 10) {  // condition de fin
    console.log(`k=${k}`);
    k++; // => Ne pas oublier d'incrementer la variable i pour rendre la condition fin vrai
}

// do .. while
// Attention, c'est l'inverse de la boucle while
// la boucle do while est toujours executée au moins une fois

let l = 10;
do {
    console.log(`l=${l}`);
    l++;
    // Tant que la condition est vraie
    // Attention à ne pas oublier de rendre la condition fausse
} while(l < 10)


/**
 * Manipulation du DOM
 */

const myContainer = document.getElementById("container"); // => Recupere l'element du DOM avec id="container"
console.log(myContainer);

const myContainer2 = document.querySelector("#container"); // => Recupere l'element du DOM avec id="container"
console.log(myContainer2);

const myContainer3 = document.querySelector(".container"); // => Recupere l'element du DOM avec class="container"
console.log(myContainer3);

const myContainer4 = document.querySelectorAll(".container"); // => Recupere tous les elements du DOM avec class="container"
console.log(myContainer4);

// Modifier le contenu d'un element du DOM
const myContainer5 = document.getElementById("container")
myContainer5.innerHTML = "<h1>Hello World</h1>"; // => Modifie le contenu HTML de l'element du DOM avec id="container"
myContainer5.innerText = "<h1>Hello World</h1>"; // => Modifie que le contenu textuel de l'element du DOM avec id="container"
myContainer5.setAttribute("src", "newSrc/path"); // => Modifie l'attribut src de l'element du DOM avec id="container"

// Atrtibuts
// src => Source d'une image
// href => Lien d'un lien
// class => Classe d'un element
// id => Identifiant unique d'un element
// alt => Texte alternatif d'une image
// title => Titre d'un element
// value => Valeur d'un element
// placeholder => Placeholder d'un element
// type => Type d'un element
// data-truc => Attribut data de l'element
// <p id="" src="" value="" data-src="" data-test="" >exemple</p>


const data1 = myContainer5.getAttribute("src"); // => Recupere l'attribut src de l'element du DOM avec id="container"
console.log(data1)

const data2 = myContainer5.getAttribute("data-src"); // => Recupere l'attribut data-src de l'element du DOM avec id="container"
console.log(data2)

// Operation sur les classes
myContainer5.setAttribute('class', 'titi toto') // Remplace TOUTES les classes par les nouvelles

console.log(myContainer5.classList) // => Recupere toutes les classes de l'element du DOM avec id="container"
myContainer5.classList.add("newClass"); // => Ajoute la classe newClass à l'element du DOM avec id="container"
myContainer5.classList.remove("newClass"); // => Supprime la classe newClass à l'element du DOM avec id="container"
myContainer5.classList.toggle("truc"); // => Ajoute la classe newClass à l'element du DOM avec id="container" si elle n'existe pas, sinon la supprime
const ifClassContain = myContainer5.classList.contains("truc"); // => Verifie si l'element du DOM avec id="container" contient la classe newClass
console.log(ifClassContain);

/**
 * Styles
 */

// On évite de modifier le style directement dans le JavaScript => rend le code illisible et confus
// On garde HTML = Structure, CSS = Design, JS = Interactivité / et modification du HTML
// Le JS va modifier les classes CSS en effectuant des ajout / suppression de classes


/**
 * Fonctions
 * - Réutiliser du code avec des paramètres différentes => même code mais résultats différents => évite d'écrire X fois le même code
 * Par exemple, pour une calculatrice, on va créer une fonction qui va additionner 2 nombres, on pas écrire 10 fois le même code pour 1 + 2, 1 + 3, ...
 * - Améliorer la lisibilité du code => on va créer une fonction qui va s'appeler somme et qui va additionner 2 nombres, on va comprendre que la fonction somme va additionner ces 2 nombres
 * On essaie de garder un code le maximum lisible en anglais
 * - Améliorer la maintenabilité du code => si on a besoin de modifier le code, on va modifier la fonction et non pas les 10 lignes de code qui font la même chose
 */

// Déclaration d'une fonction
function myFunction() {
    // Qu'est ce que la fonction doit faire
    console.log("Hello World");
}

// Notation fléchée (ES6) => nouvelle version => plus courte et plus lisible (pour les fonctions simples)
const myFunction2 = () => {
    // Qu'est ce que la fonction doit faire
    console.log("Hello World 2");
}

// Appel d'une fonction
myFunction(); // => Affiche "Hello World" dans la console parce que on remplace myFunction() par le code de la fonction
myFunction2(); // => Affiche "Hello World 2" dans la console parce que on remplace myFunction() par le code de la fonction

// Fonction avec paramètres
function myFunction3(a, b) {
    console.log(a + b)
}

// Les paramètres sont remplacés par les valeurs passées en paramètres dans le même ordre
myFunction3(1, 2); // => Affiche 3 dans la console
myFunction3(10, 20); // => Affiche 30 dans la console
myFunction3(10, "Hello"); // => Affiche 10Hello dans la console car le + se transforme en concaténation si l'un des 2 paramètres est une chaîne de caractères


// Fonction avec paramètres par défaut,
// Attention, les paramètres optionnels doivent toujours être à la fin
function myFunction4(a = 10, b = 20) {
    console.log(a + b)
}

myFunction4(5); // => Affiche 25 dans la console car b = 20 par défaut
myFunction4(); // => Affiche 30 dans la console car a = 10 et b = 20 par défaut


// Fonction avec return
// Le return permet de récupérer le résultat de la fonction en dehors de la fonction

function myFunction5(a, b) {
    console.log(a)
    console.log(b)
    //... autres instructions

    return a + b; // attention, le return arrête la fonction, donc tout ce qui est après le return n'est pas executé
}

const result = myFunction5(1, 2); // => result = 3
console.log(result) // => Affiche 3 dans la console
console.log(result) // => Affiche 3 dans la console

// Même chose mais en version flechée
const myFunction6 = (a, b) => {
    return a + b;
}

const myFunction7 = (a, b) => a + b; // => Même chose que la fonction au dessus, parce qu'il n'y a qu'une seule instruction, on peut l'écrire sur une seule ligne et automatiquement cela fais le return


/**
 * Listeners
 */

const btnSave = document.getElementById("btnSave"); // => Recupere l'element du DOM avec id="btnSave"
btnSave.addEventListener("click", () => {
    console.log('click sur le bouton btnSave')
}); // => Ajoute un listener sur le bouton btnSave qui ce declenche au click (existe d'autres actions, change, input, ...), en deuxième paramètre, on lui passe une fonction qui sera executée lorsque l'action sera déclenchée


// Un événement soit être déclancher sur un noeud du DOM uniquement (par exemple, un bouton, un input, un lien, ...) et pas sur une liste, un tableau
const btnOtherList = document.querySelectorAll(".btnOther"); // => Recupere tous les elements du DOM avec class="btnOther"
for(let i = 0; i < btnOtherList.length; i++) {
    btnOtherList[i].addEventListener("click", () => {
        console.log(`click sur le bouton other n°${i}`)
    });
}


/**
 * Nomenclature des variables et fonctions
 */
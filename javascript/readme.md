# JavaScript

## Sommaire
1. [Introduction](#introduction)
2. [Commentaires](#commentaires)
3. [Variables](#variables)
4. [Types de données](#types-de-données)
5. [Debugging - Console](#debugging---console)
6. [Opérateurs](#opérateurs)
7. [Conditions](#conditions)
8. [Tableaux](#tableaux)
9. [Objets](#objets)
10. [Boucles](#boucles)
11. [Manipulation du DOM](#manipulation-du-dom)
12. [Fonctions](#fonctions)
13. [Evénements](#événements)
14. [Récupérer des informations externes - Fetch](#récupérer-des-informations-externes---fetch)
15. [Classes](#classes)
16. [Méthodes diverses](#méthodes-diverses)
17. [Premières bonnes pratiques](#premières-bonnes-pratiques)
18. [Nomenclature](#nomenclature)



## Introduction
`JavaScript` -> Langage de programmation<br/>
- Ajouter de l'interactivité avec l'utilisation
- Ajouter de l'interaction avec d'autres sites / applications => API

## Commentaires

Les commentaires sont des lignes de code qui ne seront pas exécutées par le navigateur. <br /> 
Le développeur commente le code pour expliquer ce que l'on y fait et faciliter la compréhension / lecture.
```javascript
    // Ceci est un commentaire sur une ligne
    let myVariable = 1; // Ceci est un commentaire sur une ligne

    /* 
        Ceci est un commentaire
        sur plusieurs lignes 
    */
    let myVariable = 1; /* Ceci est un commentaire sur plusieurs lignes */
```

> **Astuce :** Lorsque l'on commence le développement, ne pas hésiter à beaucoup documenter son code pour améliorer sa capacité d'anyalse. Avec le temps, on améliorer son code et il "se lit tout seul" les commentaires sont donc moins nécessaires.
    
## Variables
Les variables sont des espaces mémoires qui permettent de stocker des valeurs pour les réutiliser plus tard, autant de fois que nécessaire. <br />
Elles sont déclarées avec le mot clé ~~`var`~~, `let` ou `const` suivi du nom de la variable. <br />
Elles permettent également d'améliorer la lisibilité du code en donnant un nom à la valeur stockée. <br />

```javascript
var myVariable = 10; // Vielle version, accessible partout donc dangereux et risque d'effet de bord, on ne l'utilise plus aujourd'hui
myVariable = 20; // On peut modifier la valeur de la variable après sa déclaration

const myConstante = 10; // Constante, on ne peut pas la modifier après la déclaration
myConstante = 30; /!\ Cela déclanchera une erreur => Car il est impossible de modifier une constante

let myLet = 10; // Nouvelle version, accessible uniquement dans le bloc de {} où elle est déclarée
myLet = 20; // On peut modifier la valeur de la variable après sa déclaration
```

> **Astuce :**<br/>Ne pas hésiter à mettre un nom de variable précis pour améliorer la lisibilité du code. Plus le code se lit "en anglais" plus il est facile de le comprendre. Par exemple, `let a = 10`  n'est pas très lisible. En revanche avec `let currentSlide = 0` il est facile de comprendre que l'on parle de la slide actuellement utilisée.

## Types de données
Les variables peuvent contenir différents types de données en JavaScript. <br />
Les principaux types de données les plus utilisés sont les suivants : <br />   

#### 1- Chaînes de caractères
Les guillemets doubles `"`et simples `'` permettent de déclarer un `string`.<br/>
Attention, à bien utiliser le backslash` \ ` pour échapper les mêmes guillemets lorsqu'ils sont utilisés à l'intérieur de la chaîne de caractère.<br />
Les backticks ` `` `` eux permettent d'insérer des variables dans une chaîne de caractères. <br />

```javascript
let myString1 = "Je suis \"mon truc\" l'élève une chaîne de caractères"; // guillemets double
let myString2 = 'Je suis l\'eleve une "chaîne de caractères'; // guillemets simple
let myString3 = `Je suis une chaîne de ${myVariable} caractères`; // backtick
```

> **Astuce :**<br/>N'utilisez les backticks que lorsque l'on utilise des variables à l'intérieur de la chaîne de caractères, cela permettra de gagner en performances car JavaScript ne cherche pas à analyser le string pour savoir s'il y a une variable à l'intérieur.

#### 2- Nombres
Les `number` sont des variables qui peuvent contenir des nombres entiers ou décimaux. <br />
```javascript
let myNumber1 = -2; // Integer - Nombres entier comme -1, 0, 10, 23
let myNumber2 = 10.0; // Float - Nombres décimaux comme -1.5, 0.5, 1.5
let myNumber3 = 10; // Number - Nombres entier et décimaux

```

#### 3- Booléens
Les `boolean` sont des variables qui ne peuvent prendre que deux valeurs : `true` ou `false`. <br />
```javascript
let myBoolean1 = true;
let myBoolean2 = false;
```

#### 4- Tableaux
Les `array` sont des variables qui peuvent contenir plusieurs valeurs. <br />
```javascript
let myArray1 = [1, 2, 3, 4, 5]; // tableau de nombres
let myArray2 = ["Hello", "World", "Test"]; // tableau de chaînes de caractères
let myArray3 = [1, "Hello", true, null, undefined, [1, 2, 3]]; // à éviter car cela complique l'utilisation du tableau
```

#### 5- Objets
Les `object` sont des variables qui peuvent contenir plusieurs types de valeurs. <br />
Un objet est déclaré avec des accolades `{}` et représente une suite de `clé : valeur` <br />
```javascript
let myObject1 = {
    prenom : "John",
    nom : "Doe",
    age : 30,
    isAdult : true,
    objectImbrique : {
        ville : 'Paris',
        codePostal : 75000,
    },
    childrens : [
        { prenom : 'Alice', age : 10},
        { prenom : 'Bob', age : 25},
    ],
}
```

> **Informations :**<br/> Le JSON (*JavaScript Object Notation*) est un format de données qui permet de représenter un objet en JavaScript. <br /> Il est extrêmement utilisé pour communiquer via des API (*avec des applications externes par exemple*). <br /> Il est très proche de la syntaxe JavaScript, la différence principale est qu'il n'y a pas de fonction dans un JSON. <br /> Il est donc très facile de convertir un JSON en objet JavaScript et inversement. <br />

#### 6- Null
Le type `null` est une valeur spéciale forte qui indique que la variable ne représente rien. <br />
```javascript
let myNull = null;
```

#### 7- Undefined
Le type `undefined` est une valeur spéciale forte qui indique que la variable n'a pas été définie. <br />
On retrouve souvent ce type lorsque l'on cherche à utiliser une variable qui n'a pas été déclarée au préalable. <br />
```javascript
let myUndefined = undefined;
```

### Debugging - Console
Il est possible d'afficher l'état des variables dans la console de l'inspecteur du navigateur.<br/>

```javascript
let myVariable = "Hello World";
console.log(myVariable) // Affiche "Hello World" dans la console
```

> **Astuce :**<br/>Ne pas hésiter à faire régulièrement des `console.log` pour connaitre l'état du programme et aider au debug. Par la suite, on pourra utiliser des outils spéciaux dans notre IDE pour faciliter et accélerer le debug.
### Opérateurs
#### Opérateurs arithmétiques
L'addition `+` permet d'additionner deux nombres (ou de concaténer deux chaînes de caractères). <br />
```javascript
10 + 10 // 20
```
La soustraction `-` permet de soustraire deux nombres. <br />
```javascript
10 - 5 // 5
```

La multiplication `*` permet de multiplier deux nombres. <br />
```javascript
10 * 5 // 50
```

La division entière `/` permet de diviser deux nombres. <br />
```javascript
10 / 5 // 2
```

Le modulo `%` permet de récupérer le reste d'une division entière. <br />
```javascript
10 % 5 // 0
10 % 3 // 1
```

L'exposant `**` permet de calculer la puissance d'un nombre. <br />
```javascript
10 ** 2 // 100
2 ** 2 // 4
```

#### Opérateurs d'affectation
L'affectation `=` permet d'affecter une valeur à une variable. <br />
```javascript
let myVariable = 10; // ici on sauvegarde la valeur 10 dans la variable myVariable
```

#### Opérateurs de comparaison
L'égalité `==` permet de vérifier si deux valeurs sont égales. JavaScript effectuera automatiquement une conversion de type si nécessaire. <br />
```javascript
"10" == 10 // true - JavaScript convertit la chaîne de caractères "10" en nombre soit 10
5 == 5 // true
"1" == 5 // false
```

L'égalité stricte `===` permet de vérifier si deux valeurs sont égales et du même type. <br />
```javascript
"10" === 10 // false - JavaScript ne convertit pas la chaîne de caractères "10" en nombre
5 === 5 // true
"1" === 5 // false - JavaScript test l'égalité entre un nombre et une chaîne de caractères ce qui est toujours faux
```

La différence `!=` permet de vérifier si deux valeurs sont différentes. JavaScript effectuera automatiquement une conversion de type si nécessaire. <br />
```javascript
"10" != 10 // false - JavaScript convertit la chaîne de caractères "10" en nombre soit 10
5 != 5 // false
"1" != 5 // true
```

La différence stricte `!==` permet de vérifier si deux valeurs sont différentes ou de types différents. <br />
```javascript
"10" !== 10 // true - JavaScript ne convertit pas la chaîne de caractères "10" en nombre
5 !== 5 // false
"1" !== 5 // true - JavaScript test l'égalité entre un nombre et une chaîne de caractères ce qui est toujours faux
```

L'infériorité `<` permet de vérifier si une valeur est inférieure à une autre. <br />
```javascript
5 < 10 // true
```

La supériorité `>` permet de vérifier si une valeur est supérieure à une autre. <br />
```javascript
5 > 10 // false
```

L'infériorité ou égalité `<=` permet de vérifier si une valeur est inférieure ou égale à une autre. <br />
```javascript
5 <= 10 // true
5 <= 5 // true
```

La supériorité ou égalité `>=` permet de vérifier si une valeur est supérieure ou égale à une autre. <br />
```javascript
5 >= 10 // false
5 >= 5 // true
```

#### Opérateurs logiques

L'opérateur logique `&&` permet de vérifier si deux conditions sont vraies. <br />
Il faut alors que toutes les parties soient vraies pour que le résultat soit vrai. <br />
```javascript
true && true // true
true && false // false
false && true // false
false && false // false
true && true && true // true
true && true && false // false
```

L'opérateur logique `||` permet de vérifier si au moins une des deux conditions est vraie. <br />
Il faut alors qu'au moins une des parties soit vraie pour que le résultat soit vrai. <br />
```javascript
true || true // true
true || false // true
false || true // true
false || false // false
true || true || true // true
true || true || false // true
```

L'opérateur logique `!` permet d'inverser le résultat d'une condition. <br />
```javascript
!true // false
!false // true
```

#### Opérateurs de concaténation
L'opérateur de concaténation `+` permet de concaténer deux chaînes de caractères. <br />
Attention a bien utiliser des espaces pour séparer les mots. <br />
```javascript
"Hello" + "World" // "HelloWorld"
"Hello " + "World" // "Hello World"
"Hello" + " " + "World" // "Hello World"
```

#### Incrémentation / Décrémentation

```javascript
let myNumber = 10

myNumber = myNumber + 1; // 11
myNumber += 1; // 12 - On peut incrémenter de n'importe quel nombre
myNumber++; // 13 - Uniquement pour une incrémentation de 1

myNumber = myNumber - 1; // 12
myNumber -= 1; // 11 - On peut décrémenter de n'importe quel nombre
myNumber--; // 10 - Uniquement pour une décrémentation de 1

// Mais aussi sur tous les autres opérateurs comme par exemple :
myNumber *= 2;
myNumber /= 2;
```


### Conditions
Les conditions permettent d'exécuter du code uniquement si une condition est vraie, c'est le début des algorithmes. <br />
Une condition doit toujours être une expression qui retourne un booléen. <br />
#### if ...
La condition `if` permet d'exécuter du code uniquement si la condition est vraie. <br />
```javascript
if(condition) {
    // code à exécuter si la condition est vraie
}
// code à exécuter dans tous les cas
```

#### if ... else
La condition `if ... else` permet d'exécuter du code si la condition est vraie et un autre code si la condition est fausse. <br />
```javascript
if(condition) {
    // code à exécuter si la condition est vraie
} else {
    // code à exécuter si la condition est fausse
}
// code à exécuter dans tous les cas
```

#### if ... else if 
La condition `if ... else if` permet d'exécuter du code si la condition n°1 est vraie, un autre code si la condition n°2 est vrai et un autre code si les deux conditions sont fausses.<br />
```javascript
if(condition_1) {
    // code à exécuter si la condition_1 est vraie
} else if (condition_2) {
    // code à exécuter si la condition_2 est vraie
} else {
    // code à exécuter si la condition_1 et la condition_2 sont fausses
}
// code à exécuter dans tous les cas
```

#### Ternaire
La condition `ternaire` permet d'exécuter du code si la condition est vraie et un autre code si la condition est fausse. <br />
Elle permet d'écrire une condition sur une seule ligne. <br />
Attention, à ne pas abuser de cette structure car elle peut rendre le code illisible. <br />
```javascript
condition ? code_si_vrai : code_si_faux;

(10 < 100 ? "10 est inférieur à 100" : "10 est supérieur à 100") // "10 est inférieur à 100"
```

#### switch ...
La condition `switch` permet d'exécuter du code en fonction de la valeur d'une variable. On peux rajouter autant de `case`que nécessaire. <br />
Cette structure permet d'améliorer la lisibilité du code lorsque l'on a beaucoup de conditions.<br />
```javascript
switch (variable) {
    case 1:
        // code à exécuter si la variable vaut 1
        break;
    case 2:
        // code à exécuter si la variable vaut 2
        break;
    default:
        // code à exécuter si la variable ne vaut ni 1 ni 2
}
// code à exécuter dans tous les cas
```

## Tableaux
Les tableaux sont des variables qui peuvent contenir plusieurs valeurs. <br />
Les tableaux sont déclarés avec des crochets `[]` et les valeurs sont séparées par des virgules `,`. <br />
Les tableaux sont des objets, ils ont donc des `propriétés` et des `méthodes`. <br />
Attention, les index des tableaux commencent toujours à `0`. <br />
```javascript
let myArray = [1, 2, 3, 4, 5]; // tableau de nombres

console.log(myArray1); // affiche le tableau complet - [1, 2, 3, 4, 5]
console.log(myArray1[0]); // affiche le premier élément du tableau - 1
console.log(myArray1[2]); // affiche le troisième élément du tableau - 3
console.log(myArray1[5]); // affiche undefined car le tableau ne contient pas d'élément à l'index 5
```

```javascript
let myArray = ["Hello", "World", "Test"]; // tableau de chaînes de caractères
let currentIndex = 1;

console.log(myArray[currentIndex]); // affiche dynamiquement le deuxième élément du tableau - World
```


## Objets
Les objets sont des variables qui peuvent contenir plusieurs types de valeurs. <br />
Un objet est déclaré avec des accolades `{}` et représente une suite de `clé : valeur` <br />
Les objets sont des objets, ils ont donc des `propriétés` et des `méthodes`. <br />
```javascript
let myObject = {
    prenom : "John",
    nom : "Doe",
    age : 30,
    isAdult : true,
    objectImbrique : {
        ville : 'Paris',
        codePostal : 75000,
    },
    childrens : [
        { prenom : 'Alice', age : 10},
        { prenom : 'Bob', age : 25},
    ],
}

console.log(myObject.prenom); // affiche la valeur de la propriété prénom - John
console.log(myObject.objectImbrique.ville); // affiche la valeur de la propriété ville - Paris
console.log(myObject.childrens[0].prenom); // affiche la valeur de la propriété prénom du premier enfant - Alice

let myKey = "nom";
console.log(myObject[myKey]); // affiche la valeur de la propriété nom - Doe
console.log(myObject.myKey); // affiche undefined car la propriété myKey n'existe pas
```

## Boucles 
Les boucles permettent d'exécuter du code plusieurs fois. <br />
Retrouvez ci-dessous les principales boucles natives en JavaScript. <br />

### for 
La boucle `for` permet d'exécuter du code un nombre de fois défini à l'avance. <br />
```javascript
// for(initialisation; condition d'arrêt; incrémentation) {
for (let i = 0; i < 10; i++) {
    // code à exécuter
}
```
Dans cette exemple, la boucle va s'exécuter 10 fois, i prendra les valeurs de 0 à 9 car on continue la boucle tant que i est inférieur à 10.<br />

### while
La boucle `while` permet d'exécuter du code tant qu'une condition est vraie. <br />
Ne pas oublier d'incrémenter counter pour que à un moment donnée counter soit supérieur à 10 et que la boucle s'arrête. Cela évitera une boucle infinie
```javascript
let counter = 0; // initialisation
while (counter < 10) { // condition d'arrêt
    // code à exécuter
    counter++; // incrémentation
}
```

### do ... while
La boucle `do ... while` permet d'exécuter du code au moins une fois et tant qu'une condition est vraie. <br />
```javascript
let counter = 0; // initialisation
do {
    // code à exécuter
    counter++; // incrémentation
} while (counter < 10); // condition d'arrêt
```



## Manipulation du DOM

### Récupérer un élément du DOM
Il existe plusieurs façons de récupérer un élément du DOM.<br />
Les plus utilisées sont les suivantes : `getElementById`, `querySelector`, `querySelectorAll` <br />
```javascript

// Retourne un noeud unique
const myContainer = document.getElementById("container"); // => Recupere l'element du DOM avec id="container"
const myContainer2 = document.querySelector("#container"); // => Recupere l'element du DOM avec id="container"
const myContainer3 = document.querySelector(".container"); // => Recupere l'element du DOM avec class="container"

// Retourne une liste de noeuds dans une nodeList
const myContainer4 = document.querySelectorAll(".container"); // => Recupere tous les elements du DOM avec class="container"
```

### Modifier un élément du DOM

```javascript
const myContainer5 = document.getElementById("container")

myContainer5.innerHTML = "<h1>Hello World</h1>"; // => Modifie le contenu HTML de l'element du DOM avec id="container"
myContainer5.innerText = "<h1>Hello World</h1>"; // => Modifie que le contenu textuel de l'element du DOM avec id="container"
myContainer5.setAttribute("src", "newSrc/path"); // => Modifie l'attribut src de l'element du DOM avec id="container"
```
Voici une liste d'exemples d'attributs que l'on peut modifier avec la méthode `setAttribute` : <br />
- src => Source d'une image
- href => Lien d'un lien
- class => Classe d'un element
- id => Identifiant unique d'un element
- alt => Texte alternatif d'une image
- title => Titre d'un element
- value => Valeur d'un element
- placeholder => Placeholder d'un element
- type => Type d'un element
- data-truc => Attribut personnalisé nommé data-truc de l'element
```javascript
<img src="" alt="" title="">
<div id="" class="" data-truc="">
<input type="text" value="" placeholder="">
<a href=""></a>
```

### Récupérer la valeur d'un attribut d'un noeud du DOM
```javascript
const data1 = myContainer5.getAttribute("src"); // => Recupere l'attribut src de l'element du DOM avec id="container"
const data2 = myContainer5.getAttribute("data-src"); // => Recupere l'attribut data-src de l'element du DOM avec id="container"
```

### Modification des classes d'un noeud du DOM
```javascript
console.log(myContainer5.classList) // => Recupere toutes les classes de l'element du DOM avec id="container"

myContainer5.classList.add("newClass"); // => Ajoute la classe newClass à l'element du DOM avec id="container"
myContainer5.classList.remove("newClass"); // => Supprime la classe newClass à l'element du DOM avec id="container"
myContainer5.classList.toggle("truc"); // => Ajoute la classe newClass à l'element du DOM avec id="container" si elle n'existe pas, sinon la supprime

const ifContain = myContainer5.classList.contains("truc"); // => Verifie si l'element du DOM avec id="container" contient la classe newClass
console.log(ifContain);
```

### Styles
On évite de modifier le style directement dans le JavaScript => rend le code illisible et confus<br/>
On garde HTML = Structure, CSS = Design, JS = Interactivité / et modification du HTML<br/>
Le JS va modifier les classes CSS en effectuant des ajout / suppression de classes<br/>

## Fonctions
- Réutiliser du code avec des paramètres différentes => même code mais résultats différents => évite d'écrire X fois le même code
Par exemple, pour une calculatrice, on va créer une fonction qui va additionner 2 nombres, on pas écrire 10 fois le même code pour 1 + 2, 1 + 3, ...
- Améliorer la lisibilité du code => on va créer une fonction qui va s'appeler somme et qui va additionner 2 nombres, on va comprendre que la fonction somme va additionner ces 2 nombres
On essaie de garder un code le maximum lisible en anglais
- Améliorer la maintenabilité du code => si on a besoin de modifier le code, on va modifier la fonction et non pas les 10 lignes de code qui font la même chose
### Déclaration d'une fonction
```javascript

// Fonctions classiques
function myFunction() {
    // Code à exécuter
    console.log('Hello World');
}

// Fonctions fléchées
const myFunction2 = () => {
    // Code à exécuter
    console.log('Hello World 2');
}
```

### Appel d'une fonction
```javascript
myFunction(); // Hello World - Appel de la fonction myFunction - Attention, il faut toujours mettre les parenthèses même si la fonction ne prend pas de paramètres
myFunction2(); // Hello World 2 - Appel de la fonction myFunction2
```

### Fonctions avec paramètres
```javascript
function myFunction3(a, b) {
    // Code à exécuter
    console.log(a + b);
}

// Les paramètres sont remplacés par les valeurs passées en paramètres dans le même ordre
myFunction3(1, 2); // => Affiche 3 dans la console
myFunction3(10, 20); // => Affiche 30 dans la console
myFunction3(10, "Hello"); // => Affiche 10Hello dans la console car le + se transforme en concaténation si l'un des 2 paramètres est une chaîne de caractères
```

### Fonctions avec paramètres par défaut
Attention, les paramètres optionnels doivent toujours être à la fin

```javascript
function myFunction4(a = 10, b = 20) {
    console.log(a + b)
}

myFunction4(5); // => Affiche 25 dans la console car b = 20 par défaut
myFunction4(); // => Affiche 30 dans la console car a = 10 et b = 20 par défaut
```

### Fonctions avec retour de valeur
```javascript
function myFunction5(a, b) {
    return a + b;
}

const result = myFunction5(1, 2); 
console.log(result);// => result = 3
console.log(result);// => result = 3
```

```javascript
// Même chose mais en version flechée
const myFunction6 = (a, b) => {
    return a + b;
}
```

```javascript
const myFunction7 = (a, b) => a + b; // => Même chose que la fonction au dessus, parce qu'il n'y a qu'une seule instruction, on peut l'écrire sur une seule ligne et automatiquement cela fais le return

```

## Evénements

```javascript
const btnSave = document.getElementById("btnSave"); // => Recupere l'element du DOM avec id="btnSave"
btnSave.addEventListener("click", () => {
    console.log('click sur le bouton btnSave')
}); // => Ajoute un listener sur le bouton btnSave qui ce declenche au click (existe d'autres actions, change, input, ...), en deuxième paramètre, on lui passe une fonction qui sera executée lorsque l'action sera déclenchée
```

Un événement soit être déclancher sur un noeud du DOM uniquement (par exemple, un bouton, un input, un lien, ...) et pas sur une liste, un tableau
```javascript
const btnOtherList = document.querySelectorAll(".btnOther"); // => Recupere tous les elements du DOM avec class="btnOther"
for(let i = 0; i < btnOtherList.length; i++) {
    btnOtherList[i].addEventListener("click", () => {
        console.log(`click sur le bouton other n°${i}`)
    });
}
```

## Récupérer des informations externes - Fetch

```javascript 
fetch('https://jsonplaceholder.org/posts') // Effectue la demande d'informations via l'API
  .then(response => response.json()) // Réception de la réponse dans la variable "response" et transfer le body dans le then suivant
  .then(json => { // Les données reçues sont stockées dans la variable "json"  
      // Code à executer
      console.log(json)
  });
```


## Classes



## Méthodes diverses

### Timers
```javascript
let timeBeforeExecution = 1000;
setTimeout(() => {
    // Code à executer après 1000ms 
}, timeBeforeExecution);
```

```javascript
let timeInterval = 1000;
setInterval(() => {
    // Code à executer toutes les 1000ms 
}, timeInterval);
```

## Premières bonnes pratiques

#### Utiliser des noms de variables prononçables et explicites :
```javascript
// Mauvais
const a = 10;

// Bon
const currentSlide = 0;
```

#### Rester consistant dans la manière de nommer :
```javascript
// Mauvais
getUserData();
getCustomerRecord();
getClientName();

// Bon
getUserData();
getUserRecord();
getUserName();
```
> **Astuce :**<br/> Commencer le début du nom par la partie "générique" ici `getUser` et la terminer par l'information précise de la fonction ici `Data`, `Record` ou `Name`. Ainsi, lorsque l'on commence à taper `getUser` notre IDE sera capable de proposer rapidement et simplement toutes les fonctions qui commencent par `getUser`

#### Utiliser des noms recherchable et éviter les constantes magiques.<br />
Une `constante magique` est une valeur qui apparait dans le code sans savoir à quoi elle correspond précisément.  
```javascript

let counterSteps = 0;

// Mauvais
if (counterSteps > 100) {} // à quoi correspond 100 ??

// Bon 
let MAX_STEPS_PER_DAY = 100;
if(counterSteps > MAX_STEPS_PER_DAY) {}
```

#### Eviter l'effort mental
```javascript
const cities = ['Paris' , 'Lyon', 'Grenoble']

// Mauvais
cities.forEach(c => {
    // Code à executer
})

// Bon 
cities.forEach(city => {
    // Code à executer
})
```

> **Astuce :**<br/>Plus les noms sont explicites, moins nous avons d'efforts à faire pour lire le code.
 
#### Eviter de rajouter du context si cela n'est pas nécessaire
```javascript
// Mauvais
const user = {
    userFirstName : 'John',
    userLastName : 'Doe',
    userAge : 30,
    userIsAdult : true,
}

// Bon
const user = {
    firstName : 'John',
    lastName : 'Doe',
    age : 30,
    isAdult : true,
}
```

## Ressources

- [JavaScript Clean Code - French](https://github.com/eugene-augier/clean-code-javascript-fr) - Principes d'ingénierie logicielle, du livre Clean Code de Robert C. Martin's adapté au JavaScript.
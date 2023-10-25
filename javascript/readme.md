# JavaScript

## Sommaire
1. [Introduction](#introduction)
2. [Commentaires](#commentaires)
3. [Variables](#variables)
4. [Types de données](#types-de-données)
5. [Opérateurs](#opérateurs)
6. [Conditions](#conditions)
7. [Objets](#objets)
8. [Tableaux](#tableaux)
9. [Boucles](#boucles)
10. [Fonctions](#fonctions)
11. [Manipulation du DOM](#dom)
12. [Evénements](#événements)
13. [Classes](#classes)


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
    
## Variables
Les variables sont des espaces mémoires qui permettent de stocker des valeurs pour les réutiliser plus tard, autant de fois que nécessaire. <br />
Elles sont déclarées avec le mot clé `var`, `let` ou `const` suivi du nom de la variable. <br />
Elles permettent également d'améliorer la lisibilité du code en donnant un nom à la valeur stockée. <br />

```javascript
var myVariable = 10; // Vielle version, accessible partout donc dangereux on ne l'utilise plus
myVariable = 20; // On peut modifier la valeur de la variable

const myConstante = 10; // Constante, on ne peut pas la modifier après la déclaration
myConstante = 30; /!\ Cela déclanchera une erreur => Impossible de modifier une constante

let myLet = 10; // Nouvelle version, accessible uniquement dans le bloc où elle est déclarée
myLet = 20; // On peut modifier la valeur de la variable
```


## Types de données
Les variables peuvent contenir différents types de données en JavaScript. <br />
Les principaux types de données sont les suivants : <br />   

#### 1- Chaînes de caractères
Les guillemets doubles `"`et simples `'` permettent de déclarer un `string`.<br/>
Attention, à bien utiliser le backslash`\` pour échapper les mêmes guillemets lorsqu'ils sont utilisés à l'intérieur de la chaîne de caractère.<br />
Les `backsticks` eux permettent d'insérer des variables dans une chaîne de caractères. <br />

```javascript
let myString1 = "Je suis \"mon truc\" l'élève une chaîne de caractères"; // guillemets double
let myString2 = 'Je suis l\'eleve une "chaîne de caractères'; // guillemets simple
let myString3 = `Je suis une chaîne de ${myVariable} caractères`; // backtick
```

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



## Fonctions

## Manipulation du DOM

## Evénements

## Classes


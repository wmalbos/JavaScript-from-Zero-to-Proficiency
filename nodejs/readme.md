# JavaScript

`HTML` -> Hyper Text Markup Language - Language de balisage<br/>
- Structurer la page<br/>
- Effectuer le référencement

`CSS` -> Cascading Style Sheets<br />
- Feuilles de style en cascade
- Ajouter du design
- Rendre la page responsive



## Sommaire
1. [Commentaires](#commentaires)
2. [Variables](#variables)
3. [Types de données](#types-de-données)

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
```javascript
let myString1 = "Je suis \"mon truc\" l'élève une chaîne de caractères" + myConstante + " autre chaine"; // guillemets double
let myString2 = 'Je suis l\'eleve une "chaîne de caractères"' + myConstante + ' autre chaine'; // guillemets simple
let myString3 = `Je suis une chaîne de ${myVariable} caractères`; // backtick
```

#### 2- Nombres
```javascript
let myNumber1 = -2; // Integer
let myNumber2 = 10.0; // Float
let myNumber3 = 10; // Number

```

#### 3- Booléens
```javascript
let myBoolean1 = true;
let myBoolean2 = false;
```

#### 4- Tableaux
```javascript
let myArray1 = [1, 2, 3, 4, 5];
let myArray2 = ["Hello", "World", "Test"];
let myArray3 = [1, "Hello", true, null, undefined, [1, 2, 3]]; // à éviter
```

#### 5- Objets
```javascript
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
```

#### 6- Null
```javascript
let myNull = null;
```

#### 7- Undefined
```javascript
let myUndefined = undefined;
```

### Opérateurs
#### Opérateurs arithmétiques
```javascript
```

#### Opérateurs d'affectation
```javascript
```

#### Opérateurs de comparaison
```javascript
```

#### Opérateurs logiques
```javascript
```

#### Opérateurs de concaténation
```javascript
```

### Conditions
#### if ...
```javascript
if(condition) {
    // code à exécuter si la condition est vraie
}
// code à exécuter dans tous les cas
```

#### if ... else
```javascript
if(condition) {
    // code à exécuter si la condition est vraie
} else {
    // code à exécuter si la condition est fausse
}
// code à exécuter dans tous les cas
```

#### if ... else if 
```javascript
if(condition) {
    // code à exécuter si la condition est vraie
} else if (condition2) {
    // code à exécuter si la condition est vraie
} else {
    // code à exécuter si la condition est fausse
}
// code à exécuter dans tous les cas
```

#### switch ...
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


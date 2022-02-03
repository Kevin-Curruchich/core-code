# Index

- [Monday](#monday)
- [Tuesday](#tuesday)
- [Wednesday](#wednesday)
- [Thursday](#thursday)

<hr>

## Monday

1. Check [this](https://www.youtube.com/watch?v=sXQxhojSdZM) video

   - Las expresiones regulares nos ayudan a buscar un patrón dentro de una cadena de caracteres, esto es útil para validar, reemplazar y algunas otras opciones que tenemos al utilizar expresiones regulares

<hr>

2. Follow [this](https://www.youtube.com/watch?v=909NfO1St0A) video

   - Las expresiones regulares pueden ser simples o bastante complejas como nosotros lo necesitemos, podemos estar buscando una palabra en concreto dentro de la cadena de caracteres, podríamos estar buscando una carácter al inicio o final, super útiles para recoger los dígitos de una fecha ingresada, otra opción puede ser extraer el correo electrónico del usuario y muchas más utilidades

<hr>

3. Follow [this](https://dev.to/codebubb/javascript-regex-exercises-01-5078) guide

```
const ex1 = 'The quick brown fox jumped over the lazy dog';
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const ex3 = 'The salad costs $9.99';
const ex4 = 'Contact customer support on 0800 300 500';
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';

// Exercise 01
// Using a regex pattern, get the 3 letter words in the ex1 string.

SOLUTION
ex1.match(/(^|\s)[a-zA-Z]{3}{&|\s}/g)


// Exercise 02
// Using a regex pattern, remove all of the numbers from the ex2 string.

SOLUTION
ex2.replace(/[0-9]/g,)

// Exercise 03
// Using a regex pattern, find the monetary value contained within the ex3 string.

SOLUTION
ex3.match(/\$\d{1,3}.\d\d/)[0]

// Exercise 04
// Using a regex pattern, find the telephone number contained within the ex4 string.

SOLUTION
ex4.match(/(\d{3,4}\s?){3}/g)

// Exercise 05
// Using a regex pattern, find the email address contained within the ex5 string.

SOLUTION
ex5.match(/\S+@\S+\.\S+/)

```

<hr>

4. Check [this](https://www.youtube.com/watch?v=RvYYCGs45L4) video

   - Las promesas en la programación son bastante útiles cuando vamos a trabajar con asincronismo, cuando creamos promesa pueden ser resueltas y entregarnos un valor o puede ser que surja un inconveniente y este nos retorne un error

<hr>

5. Follow [this](https://www.youtube.com/watch?v=DHvZLI7Db8E) video

   - Cuando estamos iniciando, probablemente se nos complica entender las promesas, pero podríamos simplificarlo y entenderlo de una manera fácil, asociarlo con algo de la vida real sería como cuando nosotros hacemos un pedido en una heladería, nosotros pedimos cierto helado, y quien nos está atendiendo puede darnos dos respuestas, la primera puede ser que nos entregue nuestro helado tal como lo pedimos, o nos puede decir que el sabor que le pedimos está agotado, por lo tanto no vamos a recibir nuestro pedido, en esta forma funcionan las promesas

<hr>

6. Check [this]() video

<br>
<hr>
<br>

## Tuesday

**1. [This](https://www.typescriptlang.org/docs/handbook/intro.html) link is nice to have and read**

**2. [Typescript object type](https://typescript-exercises.github.io/#exercise=1)**

```typescript
export type User = { name: string; age: number; occupation: string };

export const users: User[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
];

export function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson);
```

<hr>

**3. Read [this](https://blog.logrocket.com/types-vs-interfaces-in-typescript/)**

- Typescript al ser tipado estatico nos ayuda a ser mas estrictos con nuestro código, debido a que JavaScript nos da muchas libertades cuando desarrollamos, y al ser tipado podriamos hacer uso de tipos o interfaces al momento de definir nuestra variable, la diferencia entre uno y otro es es que las interfaces nos permite definit patrones de datos, como los objetos, mientras que un tipo siempre definimos si es string, number u otro

<hr>

**4. Typescript union types**

```typescript
interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] /* <- Person[] */ = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

export function logPerson(user: Person) {
  console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
```

<hr>

**5. [Typescript in operator](https://typescript-exercises.github.io/#exercise=3)**

```typescript
interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

export function logPerson(person: Person) {
  let additionalInformation: string;
  if ("role" in person) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
```

<hr>

**6. Find the odd int**

**Given an array of integers, find the one that appears an odd number of times.**

**There will always be only one integer that appears an odd number of times.**

**Example:**

```
[1,1,2] should return 2, because it occurs 1 time (which is odd).
```

**Solution:**

```javascript
function findOdd(A) {
  let counter = 1;
  let result = 0;
  A.sort((a, b) => a - b).forEach((value, index, array) => {
    if (value == array[index + 1]) {
      counter++;
    } else {
      if (counter % 2 != 0) {
        console.log("No es numero par", value);
        result = value;
      }
      counter = 1;
    }
  });
  return result;
}
```

<hr>

**7. Stop gninnipS My sdroW!**

**Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.**

**Example:**

```
Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
```

**Solution:**

```javascript
function spinWords(string) {
  return string
    .split(" ")
    .reduce((prev, curr) => {
      return `${prev} ${
        curr.length >= 5 ? curr.split("").reverse().join("") : curr
      }`;
    }, "")
    .trim();
}
```

<br>
<hr>
<br>

## Wednesday

**1. Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.**

**It should remove all values from list a, which are present in list b keeping their order.**

**Example:**

```
arrayDiff([1,2,2,2,3],[2]) == [1,3]
```

**Solution:**

```javascript
function arrayDiff(a, b) {
  return a.filter((num) => !b.includes(num));
}
```

<hr>

**2. Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.**

**Example:**

```
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
```

**Solution:**

```javascript
function createPhoneNumber(numbers) {
  return numbers.join("").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}
```

<hr>

**3. Watch [this](https://www.youtube.com/watch?v=m_MQYyJpIjg)**

La programación orientada a objetos es una de las formas que tenemos para programar que tiene un paradigma fácil de entender, podemos pensar en un objeto de la vida real, el cual tiene atributos y funcionalidades, lo mismo podemos pensar cuando programamos con este paradigma

Los fundamentos de este paradigma de programación son la abstracción, encapsulamiento, herencia y polimorfismo.

- Abstracción podemos decir que es lo esencial del objeto, la esencia de este, la información y los procesos relevantes que conlleva

- Encapsulamiento nos dice que los datos y métodos del objeto estarán de alguna forma oculta, vamos a poder acceder a ellos mediante las operaciones definidas

- Herencia, permite tener derivados de un objeto en otro objeto que estamos creando, con esto tenemos conceptos como clases padre e hijos

- Polimorfismo, en resumidas palabras podemos decir que es la forma en como se comportan el mismo método desde diferentes objetos

<hr>

**4. Watch [this](https://www.youtube.com/watch?v=08CWw_VD45w)**

No podemos dar un ganador, o decir que paradigma de programación es mejor entre programación funcional y programación orientada a objetos, todo va a depender de lo que queremos solucionar.

Cuando necesitamos que un conjunto indefinido de cosas tengan los mismos métodos y atributos utilizamos POO y cuando tenemos un conjunto finito de cosas y podemos agregar nuevas operaciones a estas cosas.

<br>
<hr>
<br>

## Thursday

<br>
<hr>
<br>
````
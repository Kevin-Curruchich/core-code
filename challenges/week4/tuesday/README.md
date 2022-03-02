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

**_[<-- Go Back](../../week4/)_**

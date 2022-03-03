## Thursday

**1. Type Predicate**

Intro:

    As we introduced "type" to both User and Admin
    it's now easier to distinguish between them.
    Once object type checking logic was extracted
    into separate functions isUser and isAdmin -
    logPerson function got new type errors.

Exercise:

    Figure out how to help TypeScript understand types in
    this situation and apply necessary fixes.

**Solution:**

```typescript
interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    type: "user",
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  { type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
  { type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
  { type: "admin", name: "Bruce Willis", age: 64, role: "World saver" },
];

export function isAdmin(person: Person): person is Admin {
  return person.type === "admin";
}

export function isUser(person: Person): person is User {
  return person.type === "user";
}

export function logPerson(person: Person) {
  let additionalInformation: string = "";
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log("Admins:");
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log("Users:");
persons.filter(isUser).forEach(logPerson);
```

<hr>
<br>

**2. Count the smiley faces!**

**Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.**

**Rules for a smiling face:**

- Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
- A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
- Every smiling face must have a smiling mouth that should be marked with either ) or D

**No additional characters are allowed except for those mentioned**

**Valid smiley face examples: :) :D ;-D :~)**
**Invalid smiley faces: ;( :> :} :]**

**Examples:**

```
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
```

**Solution:**

```typescript
export function countSmileys(arr: string[]) {
  return arr.reduce((pv, cur) => {
    return cur.match(/[;:][~-]{0,1}[\)D]/) ? (pv += 1) : pv;
  }, 0);
}
```

<br>
<hr>

**3. Human Readable Time**

**Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)**

- HH = hours, padded to 2 digits, range: 00 - 99
- MM = minutes, padded to 2 digits, range: 00 - 59
- SS = seconds, padded to 2 digits, range: 00 - 59
- The maximum time never exceeds 359999 (99:59:59)

**Solution:**

```typescript
export function humanReadable(seconds: number): string {
  let hours: number = 0;
  let minutes: number = 0;
  if (!seconds) return "00:00:00";
  if (seconds >= 3600) {
    hours = Math.trunc(seconds / 3600);
    seconds = seconds - 3600 * hours;
    minutes = Math.trunc(seconds / 60);
    seconds = seconds - 60 * minutes;
  }
  if (seconds >= 60) {
    hours = 0;
    minutes = Math.trunc(seconds / 60);
    seconds = seconds - 60 * minutes;
  }
  return `${hours >= 10 ? hours : `0${hours}`}:${
    minutes >= 10 ? minutes : `0${minutes}`
  }:${seconds >= 10 ? seconds : `0${seconds}`}`;
}
```

<br>
<hr>

**_[<-- Go Back](../week7/)_**

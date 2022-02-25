<!-- Per day -->

## Wednesday

**1. Build Tower**

```
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "\*" character.

For example, a tower with 3 floors looks like this:
[
  "  *  ",
  " *** ",
  "*****"
]
```

**Solution:**

```typescript
export const towerBuilder = (nFloors: number): string[] => {
  let base: string = "*".repeat(nFloors * 2 - 1);
  let tower: Array<string> = [];
  tower.push(base);
  for (let i = 0; i < nFloors - 1; i++) {
    base = base.replace(/\S/, " ");
    base = base.replace(/\*$|\*(?=\s)/, " ");
    tower.push(base);
  }
  return tower.reverse();
};
```

<hr>
<br>

**2. Highest Scoring Word**

```
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
```

**Solution:**

```typescript
export const high = (str: string): string => {
  let wordWheigt = str.split(" ").map((word) => {
    let hprev = word.split("").reduce((p, c) => {
      return p + c.charCodeAt(0) - 96;
    }, 0);
    return { word: word, wheight: hprev };
  });
  wordWheigt.sort((a, b) => b.wheight - a.wheight);

  return wordWheigt[0].word;
};
```

<hr>
<br>

**3. Equal Sides Of An Array**

```
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.
```

**Solution:**

```typescript
export function findEvenIndex(arr: number[]): number {
  for (let i = 0; i < arr.length; i++) {
    let left = arr.slice(0, i).reduce((a, b) => a + b, 0);
    let right = arr.slice(i + 1, arr.length).reduce((a, b) => a + b, 0);
    if (left === right) return i;
  }
  return -1;
}
```

<hr>
<br>

**4. Meeting**

```
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.
```

**Solution:**

```typescript
export function meeting(s: string): string {
  let persons = s.split(";").map((person) => {
    let personNames = person.split(":");
    return {
      name: personNames[0].toUpperCase(),
      lastName: personNames[1].toUpperCase(),
    };
  });

  persons.sort((a, b) => {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    if (a.lastName == b.lastName) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
    }
    return 0;
  });

  return persons.reduce((prev, curr) => {
    return prev + `(${curr.lastName}, ${curr.name})`;
  }, "");
}
```

<br>
<hr>

**5. Street Fighter 2 - Character Selection**

```
The Kata

You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:

Scree:
```

![Screen](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fightersgeneration.com%2Fnp5%2Fgm%2Fsf2ce-s2.jpg&f=1)

```
Selection Grid Layout in text:

| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |

Input

the list of game characters in a 2x6 grid;
the initial position of the selection cursor (top-left is (0,0));
a list of moves of the selection cursor (which are up, down, left, right);

Output

the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, whether successful or not, see tests);
```

**Solution:**

```typescript
export function streetFighterSelection(
  fighters: Array<string[]>,
  position: number[],
  moves: string[]
) {
  let fightersHover: Array<string> = [];
  let vertical: number = position[0];
  let horizontal: number = position[1];
  moves.forEach((move) => {
    if (move === "up") vertical = 0;
    if (move === "down") vertical = 1;
    if (move === "right" && horizontal < 6) horizontal++;
    if (move === "right" && horizontal == 6) horizontal = 0;
    if (move == "left" && horizontal < 6) horizontal--;
    if (move == "left" && horizontal < 0) horizontal = fighters[0].length - 1;
    fightersHover.push(fighters[vertical][horizontal]);
  });
  return fightersHover;
}
```

<br>
<hr>

**_[<-- Go Back](../../week/)_**

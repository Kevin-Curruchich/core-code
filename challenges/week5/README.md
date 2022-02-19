# Index Week5

- [Monday](#monday)
- [Tuesday](#tuesday)
- [Wednesday](#wednesday)
- [Thursday](#thursday)

<hr>

## Monday

**1. Read [this](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) from The primitives: string, number and boolean to Differences Between Type Aliases and Interfaces section**

<hr>

**2. Complete the square sum function so that it squares each number passed into it and then sums the results together.**

**Examples**

```
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
```

**Solution**

```typescript
export function squareSum(numbers: number[]): number {
  return numbers.reduce((prev: number, curr: number) => {
    return prev + Math.pow(curr, 2);
  }, 0);
}
```

<hr>

**3. In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?**

**Examples**

```
At the end of the first year there will be:
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be:
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
```

**Solution**

```typescript
export class G964 {
  public static nbYear = (
    p0: number,
    percent: number,
    aug: number,
    p: number
  ) => {
    let years = 0;
    while (p > p0) {
      p0 += p0 * (percent / 100) + aug;
      years++;
    }
    return years;
  };
}
```

<hr>

**4. This time no story, no theory. The examples below show you how to write function accum:**

**Examples**

```
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
```

**Solution**

```typescript
export function accum(s: string): string {
  return s.split("").reduce((prev, curr, index, arr) => {
    return `${prev}${curr[0].toUpperCase()}${curr.repeat(index).toLowerCase()}${
      index < arr.length - 1 ? "-" : ""
    }`;
  }, "");
}
```

<hr>

**5. Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.**

**If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.**
**Examples**

```
[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
```

**Solution**

```typescript
export function warnTheSheep(queue: string[]): string {
  const wolfPosition = queue.indexOf("wolf");
  if (wolfPosition != queue.length - 1) {
    return `Oi! Sheep number ${
      queue.length - 1 - wolfPosition
    }! You are about to be eaten by a wolf!`;
  }
  return "Pls go away and stop eating my sheep";
}
```

<br>
<hr>
<hr>
<br>

## Tuesday

**1. "A divisibility rule is a shorthand way of determining whether a given integer is divisible by a fixed divisor without performing the division, usually by examining its digits."**

**When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:**

**Example:**

```
1, 10, 9, 12, 3, 4 because:
10 ^ 0 ->  1 (mod 13)
10 ^ 1 -> 10 (mod 13)
10 ^ 2 ->  9 (mod 13)
10 ^ 3 -> 12 (mod 13)
10 ^ 4 ->  3 (mod 13)
10 ^ 5 ->  4 (mod 13)
```

**Solution**

```javascript
const rem = [1, 10, 9, 12, 3, 4];

function process(n: number): number {
  let counter: number = 0;
  let sumMultiply = n
    .toString()
    .split("")
    .reverse()
    .reduce((prev, curr) => {
      if (counter > 5) counter = 0;
      return prev + Number(curr) * rem[counter++];
    }, 0);
  if (sumMultiply == n) return sumMultiply;
  return process(sumMultiply);
}

export function thirt(n: number): number {
  return process(n);
}
```

<hr>

**2. Some numbers have funny properties. For example:**

**Example:**

```
89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.
```

**Solution**

```typescript
export class G964 {
  public static digPow = (n: number, p: number) => {
    let number = n
      .toString()
      .split("")
      .reduce((prev, curr) => {
        p++;
        return prev + Math.pow(Number(curr), p - 1);
      }, 0);
    return number % n == 0 ? number / n : -1;
  };
}
```

<hr>

**3. Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.**

**Example:**

```
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
```

**Solution**

```typescript
export function validBraces(braces: string): boolean {
  const arrayBraces = braces.split("");
  let counter: number = 0;
  let result: boolean = false;
  for (let i = 0; i < arrayBraces.length; i++) {
    if (arrayBraces[i] == ")") {
      counter--;
      if (arrayBraces[i - 1] == "(") result = true;
    } else if (arrayBraces[i] == "}") {
      counter--;
      if (arrayBraces[i - 1] == "{") result = true;
    } else if (arrayBraces[i] == "]") {
      counter--;
      if (arrayBraces[i - 1] == "[") result = true;
    } else {
      counter++;
    }
    if (counter < 0) return false;
  }
  return result;
}
```

<hr>

**4. Implement a Tic-Tac-Toe (AKA: Noughts and crosses, Xs and Os) solver. The input to the solver function will be an array of length 9 representing the board. Output of the function will be the index of the desired move (0-8). You will always be X. You must make a valid move, and a winning move if available.**

**Example:**

```
solveTTT(['', '', '', 'O', '', '', 'X', '', ''])

   |   |
---+---+---
 O |   |
---+---+---
 X |   |
```

**Solution**

```typescript

```

<hr>

**5. Assuming that you get all the data in one array, you put a space around each value, | as a columns separator and multiple - as rows separator, with something like** `["O", "X", " ", " ", "X", " ", "X", "O", " "]` **you should be returning this structure (inclusive of new lines):**

**Example:**

```
 O | X |
-----------
   | X |
-----------
 X | O |
```

**Solution**

```typescript
function displayBoard(board, width) {
  let finishBoard = "";
  const rows = board.length / width;
  const rowSeparate = "-";
  let positions = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < width; j++) {
      finishBoard += ` ${board[positions++]} ${j < width - 1 ? "|" : ""}`;
    }
    finishBoard += `${
      i < rows - 1 ? `\n${rowSeparate.repeat(width * 4 - 1)}\n` : ""
    }`;
  }

  return finishBoard;
}
```

<hr>

<br>
<br>
<hr>
<hr>

## Wednesday

**1. The goal of this exercise is to convert a string to a new string where each character in the new string is `"("` if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.**

**Example:**

```
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
```

**Solution**

```typescript
export function duplicateEncode(word: string) {
  return word
    .toLowerCase()
    .split("")
    .reduce((prev, curr, index, array) => {
      let regex = new RegExp(`[${curr}]|\curr`, "g");
      return prev + `${array.join("").match(regex)?.length == 1 ? "(" : ")"}`;
    }, "");
}
```

<hr>

**2. Given an array of integers, find the one that appears an odd number of times.**

**There will always be only one integer that appears an odd number of times.**

**Example:**

```
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
```

**Solution**

```typescript
function findOdd(A) {
  let counter = 1;
  let result = 0;
  A.sort((a, b) => a - b).forEach((value, index, array) => {
    if (value == array[index + 1]) {
      counter++;
    } else {
      if (counter % 2 != 0) {
        result = value;
      }
      counter = 1;
    }
  });
  return result;
}
```

<hr>

**3. Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.**

**Example:**

```
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]
```

**Solution**

```typescript
export class G964 {
  public static inArray(a1: string[], a2: string[]): string[] {
    let result: Array<string> = [];
    a1.forEach((val) => {
      for (let i = 0; i < a2.length; i++) {
        if (a2[i].match(val) && result.indexOf(val) == -1) result.push(val);
      }
    });
    return result.sort();
  }
}
```

<hr>

**4. Let us consider this example (array written in general format):**

**Example:**

```
ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []

The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
```

**Solution**

```typescript
export function partsSums(ls: number[]): number[] {
  let result: Array<number> = ls.map((num, i, arr) => {
    return arr.slice(i).reduce((p, c) => p + c);
  });
  result.push(0);
  return result;
}
```

<hr>

**5. You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.**

**Example:**

```
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
```

**Solution**

```typescript
export function longestConsec(strarr: string[], k: number): string {
  let concatStrings: string[] = strarr.map((v, i, a) => {
    return a.slice(i, i + k).join("");
  });

  let greatest: number = concatStrings
    .map((val) => val.length)
    .sort((a, b) => b - a)[0];

  if (strarr.length == 0 || k > strarr.length || k <= 0) return "";
  return concatStrings.find((val) => val.length == greatest) || "";
}
```

<br>
<br>
<hr>
<hr>

## Thursday

**1. Tile using Typescript**

[Solution](./e1/)

**2. Time using Typescript**

[Solution](./e2/)

**3. Time using Typescript**

[Solution](./e3/)

<br>
<hr>
<br>

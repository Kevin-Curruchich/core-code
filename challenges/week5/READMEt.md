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

<br>
<hr>
<br>

**_[<-- Go Back](../week5/)_**

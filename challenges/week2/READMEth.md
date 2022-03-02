## Thursday

**1. Remove all exclamation marks from the end of sentence.**

**Solution:**

```javascript
function remove(string) {
  let array = Array.from(string);
  let stop = false;
  let position = array.length - 1;

  while (stop == false) {
    if (array[position] == "!") {
      array.pop();
    } else {
      stop = true;
    }
    position--;
  }

  return array.join("");
}
```

<hr>
<br>

**2. Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.**

**Solution:**

```javascript
function shortcut(string) {
  let stringWithoutVowels = string.replace(/[aeiou]/g, "");

  return stringWithoutVowels;
}
```

<hr>
<br>

**3. Let's play! You have to return which player won! In case of a draw return Draw!.**

**Solution:**

```javascript
const rps = (p1, p2) => {
  const options = ["scissors", "paper", "rock"];
  let player1 = options.indexOf(p1);
  let player2 = options.indexOf(p2);
  let result;
  if (player1 == player2) return "Draw!";
  if (player1 == 0 && player2 == 1) result = 1;
  if (player1 == 0 && player2 == 2) result = 2;
  if (player1 == 2 && player2 == 0) result = 1;
  if (player1 == 2 && player2 == 1) result = 2;
  if (player1 == 1 && player2 == 0) result = 2;
  if (player1 == 1 && player2 == 2) result = 1;
  return `Player ${result} won!`;
};
```

<hr>
<br>

**4. Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.**

```
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
```

**Solution**

```javascript
function persistence(num) {
  let number = num.toString();
  let counter = 0;
  let array = Array.from(number);

  while (array.length > 1) {
    number = array[0];
    for (let i = 1; i < array.length; i++) {
      number *= array[i];
    }
    counter++;
    array = Array.from(number.toString());
  }

  return counter;
}
```

<br>
<hr>

**_[<-- Go Back](../week2/)_**

# Index Week 2

- [Monday](#monday)
- [Tuesday](#tuesday)
- [Wednesday](#wednesday)
- [Thursday](#thursday)

<hr>

## Monday

**1. Follow the github course, you can find it here**

- En proceso

**2. Watch this video**

- Para ser buenos programadores debemos tener buenas bases sobre los tipos de datos, existen 6 tipos de tipos de datos.
  **Bool, Char, String, Int, Float, Array**, estos son los principales, pero existen más

**3. Read this**

- Cuando programamos, siempre vamos a tener que estar calculando valores, recibiendo números, etc.
  Es por eso que debemos conocer como funcionan los operadores aritmeticos, operadores de incremento y decremento, como también los operadores de asignación y los operadores de comparación.

**4. Create an account in Codewars**

- [Perfil](https://www.codewars.com/users/Kevin-Curruchich)

<br>
<hr>
<hr>
<br>

## Tuesday

<p align="center">Problems and Solutions</p>

**1. This code does not execute properly. Try to figure out why.**

**Solution:**

```javascript
function multiply(a, b) {
  return a * b;
}
```

<hr>
<br>

2. You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

**Solution:**

```javascript
function uniTotal(string) {
  let result = 0;

  Array.from(string).forEach(function (c) {
    result += c.charCodeAt(0);
  });

  return result;
}
```

<hr>
<br>

**3. Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.**

**Solution:**

```javascript
function getChar(c) {
  return String.fromCharCode(c);
}
```

<hr>
<br>

**4. Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.**

**Solution:**

```javascript
function addBinary(a, b) {
  let sum = a + b;

  return sum.toString(2);
}
```

<hr>
<br>

**5. Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects. This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above); This function should return a number (final grade). There are four types of final grades:**

- 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
- 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
- 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
  0, in other cases

**Solution:**

```javascript
function finalGrade(exam, projects) {
  let finalGrade = 0;

  if (exam == 0) {
    if (projects > 10) {
      finalGrade = 100;
    }
  } else if (exam > 90 || projects > 10) {
    finalGrade = 100;
  } else if (exam > 75 && projects >= 5) {
    finalGrade = 90;
  } else if (exam > 50 && projects >= 2) {
    finalGrade = 75;
  }

  return finalGrade;
}
```

<br>
<hr>
<hr>
<br>

## Wednesday

**1. The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.**

**You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.**

**For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.**

**All inputs will be integers. Please return an integer. Round down.**

**Solution:**

```javascript
function dutyFree(normPrice, discount, hol) {
  let discountForUnity = normPrice * (discount * 0.01);

  return Math.trunc(hol / discountForUnity);
}
```

<hr>
<br>

**2. Your function takes two arguments:**

- current father's age (years)
- current age of his son (years)

**Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).**

**Solution:**

```javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}
```

<hr>
<br>

**3. Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False.**

**For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces.**

**Solution:**

```javascript
function validSpacing(s) {
  let valid = true;

  if (s[0] == " " || s[s.length - 1] == " ") {
    valid = false;
  }

  let counter = 0;
  let stringArray = Array.from(s);

  for (let i = 0, length = stringArray.length; i < length; i++) {
    if (stringArray[i] == " " && stringArray[i + 1] == " ") {
      valid = false;
    }
  }

  return valid;
}
```

<hr>
<br>

**4. Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.**

**Solution:**

```javascript
function fakeBin(x) {
  let result = Array.from(x).map(function (num) {
    let binary;
    if (num < 5) {
      binary = 0;
    } else {
      binary = 1;
    }
    return binary;
  });
  return result.join("");
}
```

<br>
<hr>
<hr>
<br>

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
<br>

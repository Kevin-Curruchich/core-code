## Thursday

**1. In this kata you have to write a method that folds a given array of integers by the middle x-times.**

**Example:**

```
Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\
                    4/            4|          4\
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*

Fold 2-times:
[1,2,3,4,5] -> [9,6]
```

<br>

**Solution:**

```javascript
function foldArray(array, runs) {
  let counterRuns = 0;
  let arrayPrimary = [...array];
  let result = [];
  while (counterRuns != runs) {
    result = arrayPrimary.map((value, index, arr) => {
      if (index != arr.length - 1) {
        value += arr[arr.length - 1];
      }
      arr.pop();
      return value;
    });
    arrayPrimary = result.filter((num) => num != undefined);
    counterRuns++;
  }
  return result.filter((num) => num != undefined);
}
```

<hr>
<br>

**2. Encrypt this!**

**You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:**

**2.1 Your message is a string containing space separated words.**

**2.2 You need to encrypt each word in the message using the following rules:**

**2.3 The first letter must be converted to its ASCII code.**

**2.4 The second letter must be switched with the last letter**

**2.5 Keepin' it simple: There are no special characters in the input.**

**Example:**

```
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
```

<br>

**Solution:**

```javascript
var encryptThis = function (text) {
  return text
    .split(" ")
    .reduce((pre, curr) => {
      let letra = curr[1];
      let letra2 = curr[curr.length - 1];
      console.log(letra);
      let regex = new RegExp(`(${letra})\\D*(${letra2})`);
      console.log(regex);
      return `${pre} ${curr[0].charCodeAt(0)}${curr
        .slice(1)
        .replace(regex, `$2${curr.slice(2, curr.length - 1)}$1`)}`;
    }, "")
    .trim();
};
```

<hr>

**3. Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.**

**Examples :**

```
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
```

**Solution :**

```javascript
function list(names) {
  return names
    .reduce((prev, curr, index, array) => {
      return `${prev}${index != array.length - 1 ? ", " : " & "}${curr.name}`;
    }, "")
    .trim()
    .slice(2);
}
```

<br>
<hr>
<br>

**_[<-- Go Back](../week3/)_**

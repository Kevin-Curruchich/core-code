## Tuesday

**1. Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.**

**Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).**

**If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.**

**Examples:**

```
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
```

**Solution:**

```javascript
function order(words) {
  let expresion = /\d/;
  let inOrderWords = [];

  words.split(" ").forEach((word) => {
    let numOrder = parseInt(word.match(expresion));
    inOrderWords[numOrder - 1] = word;
  });

  return inOrderWords.join(" ");
}
```

<hr>
<br>

**2. Count the number of Duplicates, write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string**

**The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.**

**Examples:**

```
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
```

**Solution:**

```javascript
function duplicateCount(text) {
  let arrayfromText = text.toLowerCase().split("").sort();
  let arrayResult = {};
  let counter = 0;

  arrayfromText.forEach((letter) => {
    if (arrayResult[letter] == undefined) {
      arrayResult[letter] = 1;
    } else {
      arrayResult[letter] = arrayResult[letter] += 1;
    }
  });

  for (const key in arrayResult) {
    if (arrayResult[key] != 1) counter++;
  }

  return counter;
}
```

<hr>
<br>

**3. Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.**

**Exampels:**

```
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
```

**Solution:**

```javascript
function pigIt(str) {
  let regex = /[.!?\\-]/;

  let pigIt = str.split(" ").map((word) => {
    let newWord = "";
    if (word.match(regex) == null) {
      newWord = `${word.substring(1, word.length)}${word[0]}ay`;
      return newWord;
    }
    return word;
  });

  return pigIt.join(" ");
}
```

<br>
<hr>
<br>

**_[<-- Go Back](../../week3/)_**

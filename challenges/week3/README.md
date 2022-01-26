# Index

- [Monday](#monday)
- [Tuesday](#tuesday)
- [Wednesday](#wednesday)
- [Thursday](#thursday)

<hr>

## Monday

**1. You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.**

**Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:**

```
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
```

**Solution**

```javascript
function likes(names) {
  let length = names.length;
  let likesPost;
  if (length == 0) likesPost = "no one likes this";
  if (length == 1) likesPost = `${names[0]} likes this`;
  if (length > 1) {
    if (length == 2) {
      likesPost = `${names[0]} and ${names[1]} like this`;
    } else if (length == 3) {
      likesPost = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
      let rest = length - 2;
      likesPost = `${names[0]}, ${names[1]} and ${rest} others like this`;
    }
  }

  return likesPost;
}
```

**2. Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.**

**Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case**

```javascript
var countBits = function(n) {
  let counter = 0ñ

  Array.from(n.toString(2)).forEach(function(bit){
    if(bit == 1) counter++;
  })

    return counter
};

```

**3. In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.**

**The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is** `···· · −·−− ·−−− ··− −·· ·.`

```javascript
decodeMorse = function (morseCode) {
  let string = "";
  let counterWords = 1;
  let arrayWords = morseCode.trim().split("   ");

  arrayWords.forEach((word) => {
    let letters = word.split(" ");

    letters.forEach((letter) => {
      string += MORSE_CODE[letter];
    });

    if (counterWords != arrayWords.length) {
      string += " ";
    }

    counterWords++;
  });

  return string;
};
```

<br>
<hr>
<br>

## Tuesday

**1. Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.**

**Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).**

**If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.**

**Example**

```
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
```

**Solution**

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

**2. Count the number of Duplicates, write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string**

**The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.**

**Example**

```
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
```

**Solution**

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

**3. Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.**

**Exampels**

```
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
```

**Solution**

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

## Wednesday

<br>
<hr>
<br>

## Thursday

<br>
<hr>
<br>

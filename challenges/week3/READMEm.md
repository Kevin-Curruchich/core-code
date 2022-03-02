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

**Solution:**

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

<hr>
<br>

**2. Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.**

**Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case**

<br>

**Solution :**

```javascript
var countBits = function(n) {
  let counter = 0ñ

  Array.from(n.toString(2)).forEach(function(bit){
    if(bit == 1) counter++;
  })

    return counter
};

```

<hr>
<br>

**3. In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.**

**The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is** `···· · −·−− ·−−− ··− −·· ·.`

<br>

**Solution :**

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

**_[<-- Go Back](../../week3/)_**

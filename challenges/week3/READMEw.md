## Wednesday

**1. Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.**

**Examples:**

```
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
```

**Solution:**

```javascript
function validParentheses(parens) {
  let validator = 0;
  let valid = true;
  let arrayParents = parens.split("");
  let length = arrayParents.length - 1;

  arrayParents.forEach((paren) => {
    if (validator < 0) {
      valid = false;
    }
    paren == "(" ? validator++ : validator--;
  });

  if (validator != 0 || arrayParents[0] == ")" || arrayParents[length] == "(")
    valid = false;

  return valid;
}
```

<hr>
<br>

**2. Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).**

**Examples:**

```
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
```

**Solution:**

```javascript
function toCamelCase(str) {
  let arrayWords = str.split(/[-_]/);
  let WordsCompelte = arrayWords[0];

  for (let i = 1; i < arrayWords.length; i++) {
    let word = arrayWords[i];
    WordsCompelte += `${word[0].toUpperCase()}${word.substring(
      1,
      word.length
    )}`;
  }
  return WordsCompelte;
}
```

<hr>
<br>

**3. Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.**

**Examples:**

```
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
```

**Solution:**

```javascript
var uniqueInOrder = function (iterable) {
  let arrayIterable = Array.from(iterable);
  let result = [];

  for (let i = 0, length = arrayIterable.length; i < length; i++) {
    if (arrayIterable[i] != arrayIterable[i + 1]) {
      result.push(arrayIterable[i]);
    }
  }

  return result;
};
```

<br>
<hr>
<br>

**_[<-- Go Back](../week3/)_**

## Thursday

**1. A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).**

**Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.**

**Solution**

```javascript
function isPangram(string) {
  const alphabeth = "abcdefghijklmnopqrstuvwxyz".split("");

  const otherString = string.toLowerCase().replace(/\s|\./g, "").split("");

  for (let i = 0; i < alphabeth.length; i++) {
    if (!otherString.includes(alphabeth[i])) return false;
  }

  return true;
}
```

<hr>

**2. Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.**

**You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.**

**Example**

```
["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
```

**Solution**

```javascript
function findMissingLetter(array) {
  const initArray = array.join("").charCodeAt(0);

  for (let i = 0; i < array.length; i++) {
    if (array.join("").charCodeAt(i) != initArray + i)
      return String.fromCharCode(initArray + i);
  }
}
```

<hr>

**3. There is an array with some numbers. All numbers are equal except for one. Try to find it!**

**Example**

```
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
```

**Solution**

```javascript
function findUniq(arr) {
  let array = {};
  arr.forEach((element) => {
    array[element] == undefined ? (array[element] = 1) : array[element]++;
  });
  for (const key in array) {
    if (array[key] == 1) return key * 1;
  }
}
```

<hr>

**4. The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).**

**If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.**

if

- sz is <= 0 or if str is empty return ""
- sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

**Example**

```
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> ""
revrot("563000655734469485", 4) --> "0365065073456944"
```

**Solution**

```javascript
function revrot(str, sz) {
  if (sz <= 0 || sz > str.length) return "";
  let regex = new RegExp(`(\\d){${sz}}`, "g");
  return str.match(regex).reduce((prev, curr) => {
    let mod = curr.split("").reduce((prev, cur) => {
      return prev + Math.pow(cur, 3);
    }, 0);
    return `${prev}${
      mod % 2 == 0
        ? curr.split("").reverse().join("")
        : `${curr.substring(1, curr.length)}${curr[0]}`
    }`;
  }, "");
}
```

<hr>

**5. You receive an array of integers (0 to 9), each of them is the number of a rat which died after tasting the wine bottles. Return the number of the bottle (1..1000) which is poisoned.**

**Solution**

```javascript
function find(rats) {
  let bottle = 0;
  rats.forEach((value) => (bottle += Math.pow(2, value)));
  return bottle;
}
```

<br>
<hr>
<br>

**_[<-- Go Back](../../week4/)_**

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

**_[<-- Go Back](../../week1/)_**

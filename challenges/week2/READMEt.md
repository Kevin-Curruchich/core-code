## Tuesday

**1. This code does not execute properly. Try to figure out why.**

**Solution:**

```javascript
function multiply(a, b) {
  return a * b;
}
```

<hr>
<br>

**2. You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.**

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

**_[<-- Go Back](../week2/)_**

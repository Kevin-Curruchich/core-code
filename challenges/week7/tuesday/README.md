## Tuesday

**1. Generics Using Typescript**

[Solution](./generics/)

<hr>
<br>

**2. Encrypt this!**

**You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:**

1. Your message is a string containing space separated words.
2. You need to encrypt each word in the message using the following rules:
   - The first letter must be converted to its ASCII code.
   - The second letter must be switched with the last letter
3. Keepin' it simple: There are no special characters in the input.

**Exampes:**

```
encryptThis "Hello" == "72olle"
encryptThis "good" == "103doo"
encryptThis "hello world" == "104olle 119drlo"
```

**Solution:**

```typescript
export const encryptThis = (str: string): string => {
  if (str.length === 0) return "";
  return str
    .split(" ")
    .reduce((pre, curr) => {
      return (
        pre +
        `${curr.charCodeAt(0)}${curr
          .slice(1)
          .replace(/(\w)(\w*)(\w)/, "$3$2$1")} `
      );
    }, "")
    .trim();
};
```

<br>
<hr>

**3. Make the Deadfish Swim**

**Write a simple parser that will parse and run Deadfish.**

**Deadfish has 4 commands, each 1 character long:**

- i increments the value (initially 0)
- d decrements the value
- s squares the value
- o outputs the value into the return array
- Invalid characters should be ignored.

```
parse("iiisdoso") => [8, 64]
```

**Solution:**

```typescript
export function parse(data: string): number[] {
  let number: number = 0;
  let arrayResult: number[] = [];
  data.split("").forEach((letter) => {
    if (letter === "i") number++;
    if (letter === "s") number = Math.pow(number, 2);
    if (letter === "d") number--;
    if (letter === "o") arrayResult.push(number);
  });
  return arrayResult;
}
```

<br>
<hr>

**_[<-- Go Back](./../week7/)_**

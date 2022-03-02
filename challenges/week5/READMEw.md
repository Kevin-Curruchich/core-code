## Wednesday

**1. The goal of this exercise is to convert a string to a new string where each character in the new string is `"("` if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.**

**Example:**

```
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
```

**Solution**

```typescript
export function duplicateEncode(word: string) {
  return word
    .toLowerCase()
    .split("")
    .reduce((prev, curr, index, array) => {
      let regex = new RegExp(`[${curr}]|\curr`, "g");
      return prev + `${array.join("").match(regex)?.length == 1 ? "(" : ")"}`;
    }, "");
}
```

<hr>

**2. Given an array of integers, find the one that appears an odd number of times.**

**There will always be only one integer that appears an odd number of times.**

**Example:**

```
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
```

**Solution**

```typescript
function findOdd(A) {
  let counter = 1;
  let result = 0;
  A.sort((a, b) => a - b).forEach((value, index, array) => {
    if (value == array[index + 1]) {
      counter++;
    } else {
      if (counter % 2 != 0) {
        result = value;
      }
      counter = 1;
    }
  });
  return result;
}
```

<hr>

**3. Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.**

**Example:**

```
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]
```

**Solution**

```typescript
export class G964 {
  public static inArray(a1: string[], a2: string[]): string[] {
    let result: Array<string> = [];
    a1.forEach((val) => {
      for (let i = 0; i < a2.length; i++) {
        if (a2[i].match(val) && result.indexOf(val) == -1) result.push(val);
      }
    });
    return result.sort();
  }
}
```

<hr>

**4. Let us consider this example (array written in general format):**

**Example:**

```
ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []

The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
```

**Solution**

```typescript
export function partsSums(ls: number[]): number[] {
  let result: Array<number> = ls.map((num, i, arr) => {
    return arr.slice(i).reduce((p, c) => p + c);
  });
  result.push(0);
  return result;
}
```

<hr>

**5. You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.**

**Example:**

```
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
```

**Solution**

```typescript
export function longestConsec(strarr: string[], k: number): string {
  let concatStrings: string[] = strarr.map((v, i, a) => {
    return a.slice(i, i + k).join("");
  });

  let greatest: number = concatStrings
    .map((val) => val.length)
    .sort((a, b) => b - a)[0];

  if (strarr.length == 0 || k > strarr.length || k <= 0) return "";
  return concatStrings.find((val) => val.length == greatest) || "";
}
```

<br>
<hr>

**_[<-- Go Back](../week5/)_**

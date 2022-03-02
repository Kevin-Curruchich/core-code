## Monday

**1. Read [this](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) from The primitives: string, number and boolean to Differences Between Type Aliases and Interfaces section**

<hr>

**2. Complete the square sum function so that it squares each number passed into it and then sums the results together.**

**Examples**

```
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
```

**Solution**

```typescript
export function squareSum(numbers: number[]): number {
  return numbers.reduce((prev: number, curr: number) => {
    return prev + Math.pow(curr, 2);
  }, 0);
}
```

<hr>

**3. In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?**

**Examples**

```
At the end of the first year there will be:
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be:
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
```

**Solution**

```typescript
export class G964 {
  public static nbYear = (
    p0: number,
    percent: number,
    aug: number,
    p: number
  ) => {
    let years = 0;
    while (p > p0) {
      p0 += p0 * (percent / 100) + aug;
      years++;
    }
    return years;
  };
}
```

<hr>

**4. This time no story, no theory. The examples below show you how to write function accum:**

**Examples**

```
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
```

**Solution**

```typescript
export function accum(s: string): string {
  return s.split("").reduce((prev, curr, index, arr) => {
    return `${prev}${curr[0].toUpperCase()}${curr.repeat(index).toLowerCase()}${
      index < arr.length - 1 ? "-" : ""
    }`;
  }, "");
}
```

<hr>

**5. Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.**

**If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.**
**Examples**

```
[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
```

**Solution**

```typescript
export function warnTheSheep(queue: string[]): string {
  const wolfPosition = queue.indexOf("wolf");
  if (wolfPosition != queue.length - 1) {
    return `Oi! Sheep number ${
      queue.length - 1 - wolfPosition
    }! You are about to be eaten by a wolf!`;
  }
  return "Pls go away and stop eating my sheep";
}
```

<br>
<hr>
<br>

**_[<-- Go Back](../../week7/)_**

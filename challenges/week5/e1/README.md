## Description

In the board game Scrabble2, each tile contains a letter, which is used to spell words, and a score, which is used to determine the value of words.

1. Write a definition for a class named Tile that represents Scrabble tiles. The instance variables should be a string named letter and an number named value.

2. Write a constructor that takes parameters named letter and value and initializes the instance variables.

3. Write a method named printTile that prints the instance variables in a reader-friendly format (not the { ... } format way).

4. Don't worry you don't have to check if the letter is no more than one String length.

5. You can use this Main class to test your code.

```typescript
import { Tile } from "./Tile";
export class Main {
  start() {
    const A = new Tile("A", 10);
    A.printTile(); // Example of a reader-friendly format above
    /*
      ==================
        Letter: A
        Value: 10
      ==================
    */
    const W = new Tile("W", "50"); // This should show and error
  }
}
```

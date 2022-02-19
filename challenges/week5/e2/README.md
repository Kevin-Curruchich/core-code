## Description

You have been hired by a brand of digital watches to be able to create the functionality of keeping track of time, for this you have been asked to do the following:

1. Write a definition for the class name Time this class would be use to build a digital clock. This class should have 3 attributes of type number. hour, minute and second.

2. Write a constructor that takes parameters named hour, minute and second and initializes the instance variables.

3. Write a method called getInSeconds that returns a number representing the actual time in the instance represented in seconds.

4. Write a method named printTime that prints the instance variables in a reader-friendly format (not the { ... } format way).

```typescript
import { Time } from "./Time";
export class Main {
  start() {
    const t = new Time(10, 45, 1);
    t.printTime(); // Example of a reader-friendly format above
    /*
      ==================
        Hours: 10
        Minutes: 45
        Seconds: 1
      ==================
    */
    console.log(t.getInSeconds()); // 38701
  }
}
```

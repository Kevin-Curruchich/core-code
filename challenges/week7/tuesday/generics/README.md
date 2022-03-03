# Description

[Code](./src/)

We have just learn about generics, an we where creating our own implementation for the Linkedlist structure, but it is incomplete, you task is to finish the missing methods.

- addFirst: Adds a new node at the start of the structure
- removeLast: Removes the last node of the structure

# Example

```typescript
let list = new LinkedList<number>();
list.add(1); // [1]
list.add(2); // [1,2]
list.add(3); // [1,2,3]
list.add(4); // [1,2,3,4]
list.addFirst(5); // [5,1,2,3,4]
console.log(list.toString()); // [5,1,2,3,4]
console.log(list.size); // 5
list.remove(); // [1,2,3,4]
console.log(list.toString()); // [1,2,3,4]
console.log(list.size); // 4
list.removeLast(); // [1,2,3]
console.log(list.toString()); // [1,2,3]
console.log(list.size); // 3
```

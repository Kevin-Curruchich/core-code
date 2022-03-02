## Wednesday

**1. Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.**

**It should remove all values from list a, which are present in list b keeping their order.**

**Example:**

```
arrayDiff([1,2,2,2,3],[2]) == [1,3]
```

**Solution:**

```javascript
function arrayDiff(a, b) {
  return a.filter((num) => !b.includes(num));
}
```

<hr>

**2. Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.**

**Example:**

```
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
```

**Solution:**

```javascript
function createPhoneNumber(numbers) {
  return numbers.join("").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}
```

<hr>

**3. Watch [this](https://www.youtube.com/watch?v=m_MQYyJpIjg)**

La programación orientada a objetos es una de las formas que tenemos para programar que tiene un paradigma fácil de entender, podemos pensar en un objeto de la vida real, el cual tiene atributos y funcionalidades, lo mismo podemos pensar cuando programamos con este paradigma

Los fundamentos de este paradigma de programación son la abstracción, encapsulamiento, herencia y polimorfismo.

- Abstracción podemos decir que es lo esencial del objeto, la esencia de este, la información y los procesos relevantes que conlleva

- Encapsulamiento nos dice que los datos y métodos del objeto estarán de alguna forma oculta, vamos a poder acceder a ellos mediante las operaciones definidas

- Herencia, permite tener derivados de un objeto en otro objeto que estamos creando, con esto tenemos conceptos como clases padre e hijos

- Polimorfismo, en resumidas palabras podemos decir que es la forma en como se comportan el mismo método desde diferentes objetos

<hr>

**4. Watch [this](https://www.youtube.com/watch?v=08CWw_VD45w)**

No podemos dar un ganador, o decir que paradigma de programación es mejor entre programación funcional y programación orientada a objetos, todo va a depender de lo que queremos solucionar.

Cuando necesitamos que un conjunto indefinido de cosas tengan los mismos métodos y atributos utilizamos POO y cuando tenemos un conjunto finito de cosas y podemos agregar nuevas operaciones a estas cosas.

<br>
<hr>
<br>

**_[<-- Go Back](../../week4/)_**

## Wednesday

**1. More About Generics**

Recordemos que Typescript es un **lenguaje tipado**, por lo que puede ayudarnos a tener un mejor control sobre nuestras variables, al final de cuenta podemos verlo como una ventaja para la seguridad de nuestro código

En situaciones no conocemos el tipo de dato que estaremos recibiendo, podriamos solucionarlo con un tipo **any** pero no es una practica muy recomendada

Podemos decir que las funciones generics ademas de tener la capacidad de recibir parametros, van a tener la capacidad de recibir tipos de datos, pero estos no se limitan solo a las funciones, podemos utilizar generics en clases e interaces.

Algo super importante de los generics, es que no se limitan a pasar un solo tipo de dato, podemos utilizar dos, esto dependiendo nuestra implementación.

```typescript
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}
```

Un ejemplo simple para crear un arreglo de un tipo especifico de datos.

<hr>
<br>

**2. Read and follow [this](https://learntypescript.dev/04/l5-union)**

Las union type son super utiles cuando sabemos que estamos esperando uno u otro tipo de dato como parametro, o para una variable.

```typescript
type numberOrString = number | string;
```

Si declaramos una variable como tipo **numberOrString** y vamos a intentar inicializarla con algún tipo **bool** typescript nos dará error ya que no se está cumpliendo con el tipo de dato; puede llegar a ser tan complejo como nosotros lo requiramos

<hr>
<br>

**3. Read and follow [this](https://learntypescript.dev/04/l6-intersection)**

Existen otros tipos de datos, como lo son **intersection type**, al igual que las union type vamos a poder combinar tipos de datos existentes o construr uno

A diferencia de unoin type, ahora no vamos a esperar alguno de los tipos que nosotros tenemos, aqui debemos cumplir con todos lo que se le asigna a la intersection type

```typescript
type brand = { brand: string };
type tyres = { noTyres: number };
type color = { hexColor: string };

type car = brand & tyres & color;

const myCar: car = {
  brand: "Mazda",
  noTyres: 4,
  hexColor: "#fff",
};
```

Podemos ver que para construir un carro necesitamos de todo lo que necesita el **type** car, de lo contrario tendriamos un error.

<br>
<hr>

**4. Dashatize it**

**Given a variable n,**

**If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.**

**If n is not an integer, return an empty value.**

**Example:**

```
dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
```

**Solution:**

```typescript
export const dashatize = (num: number) => {
  const abNumber = Math.abs(num);
  if (isNaN(num)) return num.toString();
  return abNumber
    .toString()
    .split("")
    .reduce((ac, cur, i, ar) => {
      let odd: boolean = Number(cur) % 2 != 0;
      if (odd && ac[ac.length - 1] === "-") return ac + `${cur}-`;
      if (!odd) return ac + cur;
      return ac + `-${cur}-`;
    }, "")
    .replace(/(^-)/, "")
    .replace(/(-)$/, "");
};
```

<br>
<hr>

**_[<-- Go Back](../week7/)_**

## Monday

**1. Check [this](https://www.youtube.com/watch?v=sXQxhojSdZM) video**

- Las expresiones regulares nos ayudan a buscar un patrón dentro de una cadena de caracteres, esto es útil para validar, reemplazar y algunas otras opciones que tenemos al utilizar expresiones regulares

<hr>

**2. Follow [this](https://www.youtube.com/watch?v=909NfO1St0A) video**

- Las expresiones regulares pueden ser simples o bastante complejas como nosotros lo necesitemos, podemos estar buscando una palabra en concreto dentro de la cadena de caracteres, podríamos estar buscando una carácter al inicio o final, super útiles para recoger los dígitos de una fecha ingresada, otra opción puede ser extraer el correo electrónico del usuario y muchas más utilidades

<hr>

**3. Follow [this](https://dev.to/codebubb/javascript-regex-exercises-01-5078) guide**

```
const ex1 = 'The quick brown fox jumped over the lazy dog';
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const ex3 = 'The salad costs $9.99';
const ex4 = 'Contact customer support on 0800 300 500';
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';

// Exercise 01
// Using a regex pattern, get the 3 letter words in the ex1 string.

SOLUTION
ex1.match(/(^|\s)[a-zA-Z]{3}{&|\s}/g)


// Exercise 02
// Using a regex pattern, remove all of the numbers from the ex2 string.

SOLUTION
ex2.replace(/[0-9]/g,)

// Exercise 03
// Using a regex pattern, find the monetary value contained within the ex3 string.

SOLUTION
ex3.match(/\$\d{1,3}.\d\d/)[0]

// Exercise 04
// Using a regex pattern, find the telephone number contained within the ex4 string.

SOLUTION
ex4.match(/(\d{3,4}\s?){3}/g)

// Exercise 05
// Using a regex pattern, find the email address contained within the ex5 string.

SOLUTION
ex5.match(/\S+@\S+\.\S+/)

```

<hr>

**4. Check [this](https://www.youtube.com/watch?v=RvYYCGs45L4) video**

- Las promesas en la programación son bastante útiles cuando vamos a trabajar con asincronismo, cuando creamos promesa pueden ser resueltas y entregarnos un valor o puede ser que surja un inconveniente y este nos retorne un error

<hr>

**5. Follow [this](https://www.youtube.com/watch?v=DHvZLI7Db8E) video**

- Cuando estamos iniciando, probablemente se nos complica entender las promesas, pero podríamos simplificarlo y entenderlo de una manera fácil, asociarlo con algo de la vida real sería como cuando nosotros hacemos un pedido en una heladería, nosotros pedimos cierto helado, y quien nos está atendiendo puede darnos dos respuestas, la primera puede ser que nos entregue nuestro helado tal como lo pedimos, o nos puede decir que el sabor que le pedimos está agotado, por lo tanto no vamos a recibir nuestro pedido, en esta forma funcionan las promesas

<hr>

**6. Check [this]() video**

<br>
<hr>
<br>

**_[<-- Go Back](../../week4/)_**

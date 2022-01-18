 # Index
- [Tuesday](#tuesday)
- [Wednesday](#wednesday)
- [Thursday](#thursday)

<hr>

 ## Tuesday
  **1. Watch this video about compilation and interpretation.**
  - Existen dos tipos de lenguajes de programación, los compilados e interpretados.
  Podríamos decir que la principal diferencia la encontramos en como pasans su código a binario, para empezar el lenguaje interpretado lee linea por linea las instrucciónes que   escribimos y las ejecuta, en cambio un lenguaje compilado va a leer todas las instrucciónes y si encuentra un error no ejecuta nuestro programa
  
  **2. Search and answer the question: Java language is compiled or interpreted?.**
  - Java es un lenguaje interpretado y complidado, esto porque utiliza JIT compiler y JVM, porque al iniciar el programa se va a compilar el código fuente a byte code, para luego en cada ejecución se estará interpretando el bytecode.
  
  **3. Create an algorithm to calculate the equivalent of your local currencty to USD**
  ```
  const usd = 0.13;
  const convert = (q) => q * usd;
  console.log("Quetzales to USD: ", convert(13));
  ```
  **4. Read about Pseudocode here, you can also find some examples here**
  - Completado
 
  **5. Anwser to the question: Why is pseudocode helpful?**
  - Los pseudocodigos son de mucha ayuda porque nos permiten escribir sin reglas ni limitaciones la lógica de nuestro programa, utilizando nuestras palabras, obteniendo tiempos de desarrollo más rápidos
 
  **6. Create a pseudocode to calculate the aproximated age of a user base on the year they born, (you can define a variable with the actual year if you need it, like for example i could define Y <-- 2022)**
  ```
  Inicio
  defino variable Y = 2022
  creo variable U
  Pido al usuario que ingrese año de nacimiento y guardo en U
  creo variable age
  guardo en variable age, el resultado de Y - U
  muestro en pantalla “Your age is ” y la variable age
  fin
  ```
  
  **7. Read about flowcharts here**
  - Completado
 
 **8. Answer to the question: Why are flowcharts important to us as developers?**
  - Son importante para crear de manera visual y legible el funcionamiento de nuestro programa, en que pasos podría dejar de funcionar o que posibles problemas nos faltan contemplar
 
 **9. Search about High-level languages and Low-level languages, you can start with this video**
  - Los lenguajes de alto nivel van a ser lo que son faciles de entener para las personas, mientras que los de bajo nivel será más dificil entenderlo para nosotras las personas, pero la computadora tiene la capacidad de entenderlo más rápidor

<br>
<hr>
<br>

## Wednesday
**1. Learn about binary, decimal and hexadecimal numbers**
- A diario nosotros utilizamos el sistema decimal para contar, pero existen también otros sistemas de numeración, como lo son el binario y hexadecimal, donde en binario tenemos únicamente para contar el cero y el uno, para hexadecimal tenemos del 0 al 9 y luego de la “A” a la “F”

**2. Translate the year you where born to binary, decimal and hexadecimal**

#### Translate 2001 to binary
```
2001 / 2 = 1
1000 / 2 = 0
500 / 2 = 0
250 / 2 = 0
125 / 2 = 1
62 / 2 = 0
31 / 2 = 1
15 / 2 = 1
7 / 2 = 1
3 / 2 = 1
1
```
Binary = 11111010001

#### Translate 2001 to Decimal
```
2001 / 10 = 1
200 / 10 = 0
20 / 10 = 0
2
```
Decimal = 2001

#### Translate 2001 to hexadecimal
```
2001 / 16 = 1
125 / 16 = D
7
```
Hexadecimal = 7D1

**3. Translate 51966 into hexadecimal and binary**
#### Translate 51966 to binary

- Process
    ```
    51966 / 2 = 0
    25983 / 2 = 1
    12991 / 2 = 1
    6495 / 2 = 1
    3247 / 2 = 1
    1623 / 2 = 1
    811 / 2 = 1
    405 / 2 = 1
    202 / 2 = 0
    101 / 2 = 1
    50 / 2 = 0
    25 / 2 = 1
    12 / 2 = 0
    6 / 2 = 0
    3 / 2 = 1
    1
    ```
    Binary = 1100101011111110

#### Translate 51966 to Hexadecimal

- Process
    ```
    51966 / 16 = E
    3247 / 16 = F
    202 / 16 = A
    12 = C
    ```
    Hexadecimal = CAFE

**4. Use a Low-level language, for example MIPS aseembler, to do so, you will need to follow this guide. We recomend to check the guide first but also this presentation could be helpful.**
- Completed

**5. Base on the examples and the guide of the low-level language**

***5.1 Create a program to add two numbers given by the user***
  ```
  .data
	welcome: .asciiz "\n Bienvenido\n"
	number1: .asciiz "\nIngrese el primer numero: "
	number2: .asciiz "\nIngrese el segundo numero: "
	firstNumber: .asciiz "\nPrimer numero: "
	secondNumber: .asciiz  "\nSegundo numero: "
.text
	main:
		li $v0, 4
		la $a0, welcome
		syscall 
		
		li $v0, 4
		la $a0, number1
		syscall

		li $v0, 5
		syscall

		move $t1, $v0

		li $v0, 4
		la $a0, number2
		syscall

		li $v0, 5
		syscall

		move $t2, $v0

		li $v0, 4
		la $a0, firstNumber
		syscall
		
		li $v0, 1
		move $a0, $t1
		syscall
		
		li $v0, 4
		la $a0, secondNumber
		syscall
		
		li $v0, 1
		move $a0, $t2
		syscall
  ```
  
***5.2 Create a program that display your name***
```
.data
	welcome: .asciiz "\n welcome human\n"
	name: .asciiz "\nMy name is Kevin Curruchich "
	nickname: .asciiz  "\nBut you can call me Chiwy "
.text
	main:
		li $v0, 4
		la $a0, welcome
		syscall 
		
		li $v0, 4
		la $a0, name
		syscall

		li $v0, 4
		la $a0, nickname
		syscall
```

<br>
<hr>
<br>

## Thursday
1. Search for real word applications of Javascript

    - JS lo podemos encontrar en muchas aplicaciones, principalmente fue creado para darle a las páginas web interacción con el usuario, en la actualidad existen varias tecnologías basadas en JS, como  lo pueden ser las aplicaciones multiplataforma, donde tanto la parte del Frontend y del Backend están realizadas en JS
    
2. (optional but great) Watch this video

3. (optional but great) Watch this video
Follow the github course, you can find it here
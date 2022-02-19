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

**_5.1 Create a program to add two numbers given by the user_**

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

**_5.2 Create a program that display your name_**

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
<hr>
<br>

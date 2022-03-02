"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rational = void 0;
class Rational {
    constructor(n, d) {
        this.numerator = n;
        this.denominator = d;
    }
    printRational() {
        console.log(`${this.numerator} / ${this.denominator}`);
    }
    invert() {
        let aux = this.numerator;
        let aux2 = this.denominator;
        this.numerator = aux2;
        this.denominator = aux;
    }
    toFloat() {
        return this.numerator / this.denominator;
    }
    gcd(num1, num2) {
        if (num1 == 0)
            return num2;
        if (num2 == 0)
            return num1;
        let div = Math.trunc(num1 / num2);
        let rest = num1 - num2 * div;
        return this.gcd(num2, rest);
    }
    reduce() {
        let num1;
        let num2;
        if (this.numerator > this.denominator) {
            num1 = this.numerator;
            num2 = this.denominator;
        }
        else {
            num1 = this.denominator;
            num2 = this.numerator;
        }
        const result = this.gcd(num1, num2);
        this.numerator = this.numerator / result;
        this.denominator = this.denominator / result;
    }
}
exports.Rational = Rational;

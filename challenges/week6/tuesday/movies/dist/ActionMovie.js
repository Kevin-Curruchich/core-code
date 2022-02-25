"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionMovie = void 0;
const Movie_1 = require("./Movie");
class ActionMovie extends Movie_1.Movie {
    constructor(name, director, languague, runningTime, ry, explotions, guns, martialArts) {
        super(name, director, languague, runningTime, ry);
        this.explotions = explotions;
        this.guns = guns;
        this.martialArts = martialArts;
    }
    printActionMovie() {
        console.log(` 
      ===== Action Movie Info ========
        Name: ${this.name}
        Director: ${this.director}
        Explotions: ${this.explotions}
        Guns: ${this.expectGuns()}
        Martial Arts: ${this.expectMartilArts()}
      ================================  
      `);
    }
    incrementExplosions() {
        console.log('Explotion has been added');
        this.explotions++;
    }
    expectGuns() {
        return this.guns ? `🔫` : '(´▽`ʃ♡ƪ)';
    }
    expectMartilArts() {
        return this.martialArts ? `🥷🏻` : '(´▽`ʃ♡ƪ)';
    }
}
exports.ActionMovie = ActionMovie;

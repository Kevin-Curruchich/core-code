"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorrorMovie = void 0;
const Movie_1 = require("./Movie");
class HorrorMovie extends Movie_1.Movie {
    constructor(name, director, language, runningTime, rY, jumpScares, ghosts, visions) {
        super(name, director, language, runningTime, rY);
        this.jumpScares = jumpScares;
        this.ghosts = ghosts;
        this.visions = visions;
    }
    incrementJumpscares() {
        console.log('Jump Scares has been added');
        this.jumpScares++;
    }
    printHorrorMovie() {
        console.log(` 
      ===== Horror Movie Info ========
        Name: ${this.name}
        Director: ${this.director}
        Jump Scares: ${this.jumpScares}
        Ghosts: ${this.expectGhosts()}
        Visions: ${this.expectVisions()}
      ================================  
      `);
    }
    expectGhosts() {
        return this.ghosts ? '👻' : '◑﹏◐';
    }
    expectVisions() {
        return this.visions ? '🔮' : '◑﹏◐';
    }
}
exports.HorrorMovie = HorrorMovie;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const uuid_1 = require("uuid");
class Movie {
    constructor(name, director, language, runningTime, year) {
        this.name = name;
        this.director = director;
        this.language = language;
        this.runningTime = runningTime;
        this.releaseYear = year;
        this.id = (0, uuid_1.v4)();
    }
}
exports.Movie = Movie;

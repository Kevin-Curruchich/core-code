import { v4 as uid } from 'uuid';

export class Movie {
    id: string;
    name: string;
    director: string;
    language: string;
    runningTime: number;
    releaseYear: number;

    constructor(
        name: string,
        director: string,
        language: string,
        runningTime: number,
        year: number
    ) {
        this.name = name;
        this.director = director;
        this.language = language;
        this.runningTime = runningTime;
        this.releaseYear = year;
        this.id = uid();
    }
}

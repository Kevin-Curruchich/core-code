import { Movie } from './Movie';

export class ActionMovie extends Movie {
    explotions: number;
    guns: boolean;
    martialArts: boolean;
    constructor(
        name: string,
        director: string,
        languague: string,
        runningTime: number,
        ry: number,
        explotions: number,
        guns: boolean,
        martialArts: boolean
    ) {
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

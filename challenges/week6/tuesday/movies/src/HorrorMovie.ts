import { Movie } from './Movie';

export class HorrorMovie extends Movie {
    jumpScares: number;
    ghosts: boolean;
    visions: boolean;
    constructor(
        name: string,
        director: string,
        language: string,
        runningTime: number,
        rY: number,
        jumpScares: number,
        ghosts: boolean,
        visions: boolean
    ) {
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

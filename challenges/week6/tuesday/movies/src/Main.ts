import { Choice, Input, SelectChoice, UserInput, UserOption } from './Input';
import { Movie } from './Movie';
import { ActionMovie } from './ActionMovie';
import { HorrorMovie } from './HorrorMovie';

type actionMovieInput = {
    name: string;
    director: string;
    language: string;
    runningTime: number;
    yearRelease: number;
    explotions: number;
};
type horrorMovieInput = {
    name: string;
    director: string;
    language: string;
    runningTime: number;
    yearRelease: number;
    jumpScares: number;
};

export class Main {
    movies: Movie[] = [];

    actionMovieForm: Choice[] = [
        { name: 'name', message: 'Name' },
        { name: 'director', message: 'Director' },
        { name: 'language', message: 'Language' },
        { name: 'runningTime', message: 'Running Time (min)' },
        { name: 'yearRelease', message: 'Year' },
        { name: 'explotions', message: 'Explotioins count' },
    ];

    horrorMovieForm: Choice[] = [
        { name: 'name', message: 'Name' },
        { name: 'director', message: 'Director' },
        { name: 'language', message: 'Language' },
        { name: 'runningTime', message: 'Running Time (min)' },
        { name: 'yearRelease', message: 'Year' },
        { name: 'jumpScares', message: 'Jump Scares Count' },
    ];

    menuOptions: SelectChoice[] = [
        { option: 1, message: 'Add Action Movie' },
        { option: 2, message: 'Add Horror Movie' },
        { option: 3, message: 'Show Action Movies' },
        { option: 4, message: 'Show Horror Movies' },
        { option: 5, message: 'Increment Explosions in Movie' },
        { option: 6, message: 'Increment Jump Scares in Movie' },
        { option: 7, message: 'Exit' },
    ];

    async addActionMovie() {
        const data: actionMovieInput = (
            await Input.getForm('Add Action Movie', this.actionMovieForm)
        ).data;
        const guns = (await Input.getConfirm('Have guns')).data;
        const martialArts = (await Input.getConfirm('Have Martial arts')).data;

        const actionToPush = new ActionMovie(
            data.name,
            data.director,
            data.language,
            data.runningTime,
            data.yearRelease,
            data.explotions,
            guns,
            martialArts
        );

        this.movies.push(actionToPush);
    }

    async addHorrorMovie() {
        const data: horrorMovieInput = (
            await Input.getForm('Add Horror Movie', this.horrorMovieForm)
        ).data;
        const ghosts = (await Input.getConfirm('are there ghosts')).data;
        const visions = (await Input.getConfirm('are there Visions')).data;

        const actionToPush = new HorrorMovie(
            data.name,
            data.director,
            data.language,
            data.runningTime,
            data.yearRelease,
            data.jumpScares,
            ghosts,
            visions
        );

        this.movies.push(actionToPush);
    }

    showActionMovies() {
        this.movies.forEach((movie) => {
            if (movie instanceof ActionMovie) movie.printActionMovie();
        });
    }

    showHorrorMovies() {
        this.movies.forEach((movie) => {
            if (movie instanceof HorrorMovie) movie.printHorrorMovie();
        });
    }

    async incrementExplotions() {
        let actionMovieChoices: Choice[] = [];
        this.movies.forEach((movie) => {
            if (movie instanceof ActionMovie) {
                let toPush: Choice = {
                    name: `${movie.id}`,
                    message: `${movie.name}`,
                };
                actionMovieChoices.push(toPush);
            }
        });
        let choice = await Input.getSelectById(
            'Select Action Movie',
            actionMovieChoices
        );
        let toIncrement = this.movies.find((movie) => movie.id == choice.data);
        if (toIncrement instanceof ActionMovie)
            toIncrement.incrementExplosions();
    }

    async incrementJumpScares() {
        let horrorMovieChoices: Choice[] = [];
        this.movies.forEach((movie) => {
            if (movie instanceof HorrorMovie) {
                let toPush: Choice = {
                    name: `${movie.id}`,
                    message: `${movie.name}`,
                };
                horrorMovieChoices.push(toPush);
            }
        });
        let choice = await Input.getSelectById(
            'Select Horror Movie',
            horrorMovieChoices
        );
        let toIncrement = this.movies.find((movie) => movie.id == choice.data);
        if (toIncrement instanceof HorrorMovie)
            toIncrement.incrementJumpscares();
    }

    async showMoviesOptions() {
        let input: UserOption;
        let option: number = 0;

        while (option !== 7) {
            input = await Input.getSelect('Blockbuster', this.menuOptions);
            option = input.data;
            switch (option) {
                case 1:
                    await this.addActionMovie();
                    break;
                case 2:
                    await this.addHorrorMovie();
                    break;
                case 3:
                    this.showActionMovies();
                    break;
                case 4:
                    this.showHorrorMovies();
                    break;
                case 5:
                    await this.incrementExplotions();
                    break;
                case 6:
                    await this.incrementJumpScares();
                    break;
            }
        }
    }
    async start() {
        await this.showMoviesOptions();
    }
}

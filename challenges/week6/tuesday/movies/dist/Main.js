"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Input_1 = require("./Input");
const ActionMovie_1 = require("./ActionMovie");
const HorrorMovie_1 = require("./HorrorMovie");
class Main {
    constructor() {
        this.movies = [];
        this.actionMovieForm = [
            { name: 'name', message: 'Name' },
            { name: 'director', message: 'Director' },
            { name: 'language', message: 'Language' },
            { name: 'runningTime', message: 'Running Time (min)' },
            { name: 'yearRelease', message: 'Year' },
            { name: 'explotions', message: 'Explotioins count' },
        ];
        this.horrorMovieForm = [
            { name: 'name', message: 'Name' },
            { name: 'director', message: 'Director' },
            { name: 'language', message: 'Language' },
            { name: 'runningTime', message: 'Running Time (min)' },
            { name: 'yearRelease', message: 'Year' },
            { name: 'jumpScares', message: 'Jump Scares Count' },
        ];
        this.menuOptions = [
            { option: 1, message: 'Add Action Movie' },
            { option: 2, message: 'Add Horror Movie' },
            { option: 3, message: 'Show Action Movies' },
            { option: 4, message: 'Show Horror Movies' },
            { option: 5, message: 'Increment Explosions in Movie' },
            { option: 6, message: 'Increment Jump Scares in Movie' },
            { option: 7, message: 'Exit' },
        ];
    }
    addActionMovie() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = (yield Input_1.Input.getForm('Add Action Movie', this.actionMovieForm)).data;
            const guns = (yield Input_1.Input.getConfirm('Have guns')).data;
            const martialArts = (yield Input_1.Input.getConfirm('Have Martial arts')).data;
            const actionToPush = new ActionMovie_1.ActionMovie(data.name, data.director, data.language, data.runningTime, data.yearRelease, data.explotions, guns, martialArts);
            this.movies.push(actionToPush);
        });
    }
    addHorrorMovie() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = (yield Input_1.Input.getForm('Add Horror Movie', this.horrorMovieForm)).data;
            const ghosts = (yield Input_1.Input.getConfirm('are there ghosts')).data;
            const visions = (yield Input_1.Input.getConfirm('are there Visions')).data;
            const actionToPush = new HorrorMovie_1.HorrorMovie(data.name, data.director, data.language, data.runningTime, data.yearRelease, data.jumpScares, ghosts, visions);
            this.movies.push(actionToPush);
        });
    }
    showActionMovies() {
        this.movies.forEach((movie) => {
            if (movie instanceof ActionMovie_1.ActionMovie)
                movie.printActionMovie();
        });
    }
    showHorrorMovies() {
        this.movies.forEach((movie) => {
            if (movie instanceof HorrorMovie_1.HorrorMovie)
                movie.printHorrorMovie();
        });
    }
    incrementExplotions() {
        return __awaiter(this, void 0, void 0, function* () {
            let actionMovieChoices = [];
            this.movies.forEach((movie) => {
                if (movie instanceof ActionMovie_1.ActionMovie) {
                    let toPush = {
                        name: `${movie.id}`,
                        message: `${movie.name}`,
                    };
                    actionMovieChoices.push(toPush);
                }
            });
            let choice = yield Input_1.Input.getSelectById('Select Action Movie', actionMovieChoices);
            let toIncrement = this.movies.find((movie) => movie.id == choice.data);
            if (toIncrement instanceof ActionMovie_1.ActionMovie)
                toIncrement.incrementExplosions();
        });
    }
    incrementJumpScares() {
        return __awaiter(this, void 0, void 0, function* () {
            let horrorMovieChoices = [];
            this.movies.forEach((movie) => {
                if (movie instanceof HorrorMovie_1.HorrorMovie) {
                    let toPush = {
                        name: `${movie.id}`,
                        message: `${movie.name}`,
                    };
                    horrorMovieChoices.push(toPush);
                }
            });
            let choice = yield Input_1.Input.getSelectById('Select Horror Movie', horrorMovieChoices);
            let toIncrement = this.movies.find((movie) => movie.id == choice.data);
            if (toIncrement instanceof HorrorMovie_1.HorrorMovie)
                toIncrement.incrementJumpscares();
        });
    }
    showMoviesOptions() {
        return __awaiter(this, void 0, void 0, function* () {
            let input;
            let option = 0;
            while (option !== 7) {
                input = yield Input_1.Input.getSelect('Blockbuster', this.menuOptions);
                option = input.data;
                switch (option) {
                    case 1:
                        yield this.addActionMovie();
                        break;
                    case 2:
                        yield this.addHorrorMovie();
                        break;
                    case 3:
                        this.showActionMovies();
                        break;
                    case 4:
                        this.showHorrorMovies();
                        break;
                    case 5:
                        yield this.incrementExplotions();
                        break;
                    case 6:
                        yield this.incrementJumpScares();
                        break;
                }
            }
        });
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.showMoviesOptions();
        });
    }
}
exports.Main = Main;

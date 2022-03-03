"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicTacToe = void 0;
const Board_1 = require("./Board");
class TicTacToe {
    constructor() {
        this.players = [];
        this.endMessage = '';
        this.history = [];
        this.board = new Board_1.Board(3, 3);
    }
    checkEndOfGameByWinning() { }
}
exports.TicTacToe = TicTacToe;

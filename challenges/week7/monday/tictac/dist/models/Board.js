"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
class Board {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.boardGame = [];
        this.player1 = "X";
        this.player2 = "O";
        this.initializeMatrix(rows, columns);
    }
    initializeMatrix(r, c) {
        for (let i = 0, lengthr = r; i < length; i++) {
            this.boardGame[i] = [i];
            for (let j = 0, lengthc = c; j < lengthc; j++) {
                this.boardGame[i][j] = -1;
            }
        }
    }
    clearMatrix() {
        this.initializeMatrix(this.rows, this.columns);
    }
    showBoard() {
        return this.boardGame.reduce((pre, curr) => {
            return (pre +
                ` ${curr[0]}   |   ${curr[1]}   |   ${curr[2]}\n-------------------`);
        }, "");
    }
}
exports.Board = Board;

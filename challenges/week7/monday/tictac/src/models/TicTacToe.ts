import { Board } from './Board';
import { Player } from './Player';
export class TicTacToe {
    private players: Array<Player> = [];
    private board: Board;
    private endMessage: string = '';
    private history: Array<number> = [];

    constructor() {
        this.board = new Board(3, 3);
    }

    private checkEndOfGameByWinning() {}
}

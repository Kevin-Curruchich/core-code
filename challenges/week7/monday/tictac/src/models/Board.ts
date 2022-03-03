type xo = "X" | "O";

export class Board {
    private boardGame: number[][] = [];
    private player1: string = "X";
    private player2: string = "O";

    constructor(private rows: number, private columns: number) {
        this.initializeMatrix(rows, columns);
    }

    private initializeMatrix(r: number, c: number) {
        for (let i = 0, lengthr = r; i < length; i++) {
            this.boardGame[i] = [i];
            for (let j = 0, lengthc = c; j < lengthc; j++) {
                this.boardGame[i][j] = -1;
            }
        }
    }

    public clearMatrix() {
        this.initializeMatrix(this.rows, this.columns);
    }

    public showBoard() {
        return this.boardGame.reduce((pre, curr) => {
            return (
                pre +
                ` ${curr[0]}   |   ${curr[1]}   |   ${curr[2]}\n-------------------`
            );
        }, "");
    }
}

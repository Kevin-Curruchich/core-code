"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Tile_1 = require("./Tile");
class Main {
    start() {
        const A = new Tile_1.Tile('A', 10);
        A.printTile();
    }
}
exports.Main = Main;

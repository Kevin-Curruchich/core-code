"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(nickname) {
        this.nickname = nickname;
    }
    get playerNickname() {
        return this.nickname;
    }
    set setNickname(nick) {
        this.nickname = nick;
    }
}
exports.Player = Player;

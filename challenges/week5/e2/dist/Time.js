"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
class Time {
    constructor(h, m, s) {
        this.hour = h;
        this.minute = m;
        this.second = s;
    }
    getInSeconds() {
        return this.hour * 3600 + this.minute * 60 + this.second;
    }
    printTime() {
        console.log(`==================\nHours: ${this.hour}\nMinutes: ${this.minute}\nSeconds: ${this.second}\n==================`);
    }
}
exports.Time = Time;

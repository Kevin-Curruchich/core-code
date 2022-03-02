export class Time {
    hour: number;
    minute: number;
    second: number;

    constructor(h: number, m: number, s: number) {
        this.hour = h;
        this.minute = m;
        this.second = s;
    }

    getInSeconds() {
        return this.hour * 3600 + this.minute * 60 + this.second;
    }

    printTime() {
        console.log(
            `==================\nHours: ${this.hour}\nMinutes: ${this.minute}\nSeconds: ${this.second}\n==================`
        );
    }
}

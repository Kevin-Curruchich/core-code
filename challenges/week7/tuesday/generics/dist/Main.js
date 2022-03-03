"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const LinkdList_1 = require("./LinkdList");
class Main {
    start() {
        let list = new LinkdList_1.LinkedList();
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(6);
        list.add(7);
        console.log(list.toString());
        list.removeLast();
        list.remove();
        console.log(list.toString());
        list.addFirst(1);
        list.add(1);
        console.log(list.toString());
    }
}
exports.Main = Main;

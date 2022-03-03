import { LinkedList } from './LinkdList';

export class Main {
    start() {
        let list = new LinkedList<number>();
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

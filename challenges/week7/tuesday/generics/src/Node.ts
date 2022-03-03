export class Node<T> {
    public data: T;
    public next: null | Node<T> = null;

    constructor(data: T) {
        this.data = data;
    }
}

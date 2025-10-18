
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    pushFront(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    pushBack(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    popFront() {
        if (this.isEmpty()) return null;
        const value = this.head.value;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
        return value;
    }

    popBack() {
        if (this.isEmpty()) return null;
        const value = this.tail.value;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return value;
    }

    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + (current.next ? " <-> " : "");
            current = current.next;
        }
        console.log(result);
    }
}

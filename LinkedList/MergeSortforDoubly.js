function splitList(head) {
    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    const secondHalf = slow.next;
    slow.next = null;
    if (secondHalf) secondHalf.prev = null;
    return secondHalf;
}

function merge(a, b) {
    if (!a) return b;
    if (!b) return a;

    if (a.value <= b.value) {
        a.next = merge(a.next, b);
        if (a.next) a.next.prev = a;
        a.prev = null;
        return a;
    } else {
        b.next = merge(a, b.next);
        if (b.next) b.next.prev = b;
        b.prev = null;
        return b;
    }
}

function mergeSort(head) {
    if (!head || !head.next) return head;
    const second = splitList(head);
    const firstSorted = mergeSort(head);
    const secondSorted = mergeSort(second);
    return merge(firstSorted, secondSorted);
}

function sortDoublyLinkedList(list) {
    if (!list.head) return;
    list.head = mergeSort(list.head);
    let temp = list.head;
    while (temp.next) temp = temp.next;
    list.tail = temp;
}

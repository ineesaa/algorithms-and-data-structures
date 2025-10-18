// find the middle node of the list
function getMiddle(head) {
    if (!head) return head;
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  
  // merge two sorted lists
  function mergeLists(left, right) {
    if (!left) return right;
    if (!right) return left;
  
    let result = null;
  
    if (left.data <= right.data) {
      result = left;
      result.next = mergeLists(left.next, right);
    } else {
      result = right;
      result.next = mergeLists(left, right.next);
    }
  
    return result;
  }
  
  // recursive merge sort
  function mergeSort(head) {
    if (!head || !head.next) return head;
  
    const middle = getMiddle(head);
    const nextToMiddle = middle.next;
    middle.next = null; // split the list
  
    const left = mergeSort(head);
    const right = mergeSort(nextToMiddle);
  
    return mergeLists(left, right);
  }
  
  // apply merge sort to SList object
  function sortSingleLinkedList(list) {
    if (!list.head) return;
    list.head = mergeSort(list.head);
  }
  
  
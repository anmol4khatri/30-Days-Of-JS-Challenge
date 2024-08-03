class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;
        const sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummyHead.next;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

let l1 = createLinkedList([2,4,3]);
let l2 = createLinkedList([5,6,4]);
console.log(linkedListToArray(addTwoNumbers(l1, l2))); // [7,0,8]

l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
console.log(linkedListToArray(addTwoNumbers(l1, l2))); // [0]

l1 = createLinkedList([9,9,9,9,9,9,9]);
l2 = createLinkedList([9,9,9,9]);
console.log(linkedListToArray(addTwoNumbers(l1, l2))); // [8,9,9,9,0,0,0,1]
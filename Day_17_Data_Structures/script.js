console.log("Task 1: Implement Node class for linked list");
// Node class to represent an element in a linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

console.log("\nTask 2: Implement LinkedList class");
// LinkedList class with methods to add, remove, and display nodes
class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    removeNode() {
        if (!this.head) return null;
        if (!this.head.next) {
            const value = this.head.value;
            this.head = null;
            return value;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        const value = current.next.value;
        current.next = null;
        return value;
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Test LinkedList
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
console.log("Linked List:");
linkedList.display();
console.log("Removed:", linkedList.removeNode());
console.log("Updated Linked List:");
linkedList.display();

console.log("\nTask 3: Implement Stack class");
// Stack class with push, pop, and peek methods
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

console.log("\nTask 4: Use Stack to reverse a string");
// Function to reverse a string using Stack
function reverseString(str) {
    const stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }
    let reversed = '';
    while (!stack.isEmpty()) {
        reversed += stack.pop();
    }
    return reversed;
}

console.log("Reversed string:", reverseString("Hello, World!"));

console.log("\nTask 5: Implement Queue class");
// Queue class with enqueue, dequeue, and front methods
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

console.log("\nTask 6: Simulate a printer queue");
// Function to simulate a printer queue
function simulatePrinterQueue() {
    const printerQueue = new Queue();
    printerQueue.enqueue("Document 1");
    printerQueue.enqueue("Document 2");
    printerQueue.enqueue("Document 3");

    console.log("Printing jobs:");
    while (!printerQueue.isEmpty()) {
        console.log("Printing:", printerQueue.dequeue());
    }
}

simulatePrinterQueue();

console.log("\nTask 7: Implement TreeNode class for binary tree");
// TreeNode class to represent a node in a binary tree
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

console.log("\nTask 8: Implement BinaryTree class");
// BinaryTree class with methods for inserting values and performing in-order traversal
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this._insertRecursive(this.root, value);
    }

    _insertRecursive(node, value) {
        if (node === null) {
            return new TreeNode(value);
        }

        if (value < node.value) {
            node.left = this._insertRecursive(node.left, value);
        } else if (value > node.value) {
            node.right = this._insertRecursive(node.right, value);
        }

        return node;
    }

    inOrderTraversal() {
        this._inOrderRecursive(this.root);
    }

    _inOrderRecursive(node) {
        if (node !== null) {
            this._inOrderRecursive(node.left);
            console.log(node.value);
            this._inOrderRecursive(node.right);
        }
    }
}

// Test BinaryTree
const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(1);
binaryTree.insert(9);
console.log("In-order traversal of binary tree:");
binaryTree.inOrderTraversal();

class Node {
    // An object for storing a single node of a linked list
    // Models two attributes - data and the link to the next node in the list
    constructor(data) {
        this.data = data;
        this.nextNode = null;  // On initialise nextNode dans le constructor
    }

    toString() {  // En JavaScript, on utilise toString() plutôt que repr()
        return `<Node data=${this.data}>`; // Template literal pour plus de lisibilité
    }
}

let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);

node1.nextNode = node2;
node2.nextNode = node3;

console.log(node2.nextNode.data);


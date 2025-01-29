class Node {
    // An object for storing a single node of a linked list
    // Models two attributes - data and the link to the next node in the list
    data = null;
    nextNode = null;

    constructor(data) {
        this.data = data;
    }

    repr() {
        return "<Node data=" + this.data + ">";
    }
}

let node1 = new Node(1);

console.log(node1.repr());
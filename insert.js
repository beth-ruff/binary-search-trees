//create a new node
//starting at the root
//check if there is a root, if not, the root now becomes the new node
//if there is a root, check if the value of the new node is greater than or less than the value of the root
//if it is greater...
    //check to see if there is a node to the right
        //if there is, move to that node and repeat these steps
        //if not, add tha tnode as the right property
//if it is less...
    //check to see if there is a node to the left
        //if there is, move to that node and repeate these steps
        //if not, add that node as the left property

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(val === current.value) return undefined;
            if(val < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
}
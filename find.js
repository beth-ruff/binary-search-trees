//starting at the root
    //check if there is a root, if not - done searching
    //if there is a root, check if value of the new node is the value we are looking for. if we found it, we're done.
    //if not, check to see if the value is greater than or less than the value of the root
    //if it's greater...
        //check to see if there is a node to the right
        //if there is, move to that node and repeate these steps
        //if there is not, we're done searching
    //if it's less...
        //check to see if there is a node to the left
        //if there is, move to that node and repeat these steps
        //if there is not, we're done searching.

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

    find(val){
        if(!this.root) return false;
        let current = this.root;
        let found = false;
        while(current && !found){
            if(val < current.value){
                current = current.left
            } else if(val > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    includes(val){
        if(!this.root) return false;
        let current = this.root;
        let found = false;
        while(current && !found){
            if(val < current.value){
                current = current.left
            } else if(val > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

}
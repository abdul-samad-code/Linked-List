import Node from './node.js';



export default class LinkedList{
    constructor(){
        this.headnode = null;
    }

// Append function
append(value){
    const newNode = new Node(value);
    if(this.headnode === null){
        this.headnode = newNode
    } else{
        let current = this.headnode

        while(current.nextNode !== null){
            current = current.nextNode;
        }

        current.nextNode = newNode;
    }
   
}

// Prepend function
prepend(value){
    const newNode = new Node(value);
    if(this.headnode === null)    {
        this.headnode = newNode;
    } else{
       newNode.nextNode = this.headnode
       this.headnode = newNode
    }
}


// Size functon
size(){
    let count = 0;
    let current = this.headnode;

    while(current !== null){
        count++
        current = current.nextNode;
    }

    return count; 
}



}


const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);



// prepend
list.prepend(5);
// console.log(list);


// size
console.log(list.size());

// const list = new LinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);

// console.log(list.headnode);


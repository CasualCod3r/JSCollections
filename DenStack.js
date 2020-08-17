class Stack {

    constructor(size_of_stack) {
        this.stackSize = size_of_stack;
        this.items = [];
        this.position =-1;
    }

    contains(searchItem) {
        var i = 0;
        if (!this.isEmpty()) {
            for (i; i < this.stackSize; i++) {
                if (searchItem == this.items[i]) {
                    return true;
                }
            }
        }
        return false;
    }

    isEmpty() {
        if (this.items.length == 0)
            return true;
        else
            return false;
    }

    printStack() {
        var i = 0;
        var stackPrintStr = "";
        for (i; i < this.stackSize; i++) {
            if (this.items[i] == undefined)
                stackPrintStr += " | *";
            else
                stackPrintStr += " | " + this.items[i];
        }
        stackPrintStr += " | ";
        console.log(stackPrintStr);
    }

    push(newItem) {
        if (this.position == this.stackSize-1) {
            console.log("ERROR : Cannot push new items. Stack of size " + this.stackSize +" -- "+this.items.length +" full");
        }
        else if (this.contains(newItem)) {
            //Items already exist
            console.log("ERROR : Item " + newItem + " already exists in the stack");
        }
        else {
            this.items[this.position+1] = newItem;
            ++this.position;
            console.log ("Item inserted. New position "+this.position);
            
        }

    }

    pop() {
        var itemPopped;
        if (this.isEmpty())
            console.log("ERROR: Stack is empty. Nothing to pop")
        else {
            //itemPopped = this.items[this.items.length-1];
            itemPopped = this.items[this.position];
            this.items[this.position]=undefined;
            --this.position;

            console.log("Stack items array size >"+this.items.length+" Position "+this.position);
            
            /*
            //rearrange the whole stack - move the elements left by one
            for (var i = 1; i < this.items.length; i++) {
                this.items[i - 1] = this.items[i];
            }
            */
           
            
        }
        return itemPopped;

    }



}

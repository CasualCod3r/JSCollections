class Stack {

    constructor(size_of_stack) {
        this.stackSize = size_of_stack;
        this.items = [];
    }

    contains(searchItem) {
        var i = 0;
        for (i; i < this.stackSize; i++) {
            if (searchItem == this.items[i]) {
                return true;
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
        if (this.items.length == this.stackSize) {
            console.log("ERROR : Cannot push new ietms. Stack of size " + this.stackSize + " full");
        }
        else if (this.contains(newItem)) {
            //Items already exist
            console.log("ERROR : Item " + newItem + " already exists in the stack");
        }
        else {
            this.items[this.items.length] = newItem
        }

    }

    pop()
    {
        var itemPopped;
        if (this.isEmpty())
        console.log ("ERROR: Stack is empty. Nothing to pop")
        else{
            itemPopped=this.items[0];

            //rearrange the whole stack - move the elements left by one
            for (var i=1;i<this.items.length;i++)
            {
                this.items[i-1]=this.items[i];
            }
            this.items[this.items.length-1]=undefined;
        }
        return itemPopped;

    }  



}
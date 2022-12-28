class Node {
    #next = null;
    #value = null;
    
    constructor(next, value) {
        this.#next = next;
        this.#value = value;
    }
    
    get value() {
        return this.#value;
    }
    
    set value(value) {
        this.#value = value;
    }
    
    get next() {
        return this.#next;
    }
    
    set next(value) {
        this.#next = value;
    }
}

class LinkedList {
    #head = null;
    
    append(value) {
        if (!this.#head) this.#head = new Node(null, value);
        else {
            let node = this.#head;
            while (node.next) node = node.next;
            
            node.next = new Node(null, value);
        }
    }
    
    prepend(value) {
        this.#head = new Node(this.#head, value);
    }
    
    pop() {
        let node = this.#head;
        while (node.next.next) node = node.next;
        node.next = null;
    }
    
    size() {
        let size = 0;
        let node = this.#head;
        
        while (node) {
            size++;
            node = node.next;
        }
        
        return size;
    }
    
    head() {
        return this.#head;
    }
    
    tail() {
        let node = this.#head;
        while (node.next) node = node.next;
        return node;
    }
    
    at(index) {
        if (index >= this.size()) return null;
        
        let node = this.#head;
        for (let i = 0; i < index; ++i) {
            if (!node.next) return null;
            node = node.next;
        }
        return node.value;
    }
    
    toString() {
        let node = this.#head;
        let str = '';
        
        while (node) {
            if (node != this.#head) str += ' -> ';
            str += node.value;
            node = node.next;
        }
        return str;
    }
    
    contains(value) {
        let node = this.#head;
        
        while (node) {
            if (node.value === value) return true;
            node = node.next;
        }
        return false;
    }
    
    find(value) {
        let node = this.#head;
        let index = 0;
        
        while (node) {
            if (node.value === value) return index;
            node = node.next;
            ++index;
        }
        return null;
    }
    
    insertAt(value, index) {
        let node = this.#head;
        let i = 0;
        
        while (node) {
            if (i === index) {
                let next = node.next;
                node.next = new Node(next, value);
                return;
            }
            else if (i > index) return;
            
            node = node.next
            i++;
        }
    }
    
    removeAt(index) {
        let node = this.#head;
        let i = 1;
        
        if (index === 0) {
            this.#head = this.#head.next;
            return;
        }
        else if (this.size() < 1);
        
        while (node.next) {
            if (i === index) {
                let next = node.next.next;
                node.next = next;
                return;
            }
            else if (i > index) return;
            
            node = node.next;
            i++;
        }
    }
}

export default LinkedList;
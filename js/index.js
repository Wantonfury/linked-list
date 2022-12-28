class Node {
    #prev;
    #next;
    
    get prev() {
        return this.#prev;
    }
    
    set prev(value) {
        this.#prev = value;
    }
    
    get next() {
        return this.#next;
    }
    
    set next(value) {
        this.#next = value;
    }
}
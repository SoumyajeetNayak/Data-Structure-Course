export class ListNode {
    public data: number;
    public next: ListNode | null;

    constructor(item: number) {
        this.data = item;
        this.next = null
    }
}

export class SingleLinkedList {
    public head: ListNode | null;
    constructor() {
        this.head = null;
    }

    insertAtBeginning(item: number) {
        const node = new ListNode(item);
        if(this.head === null) {
            // here list is empty
            this.head = node;
            return;
        }
        node.next = this.head;
        this.head = node;
    }

    insertAtEnd(item: number) {
        const node = new ListNode(item);
        if(this.head === null) {
            this.head = node;
            return;
        }
        let iterator = this.head;
        while (iterator.next !== null) {
            iterator = iterator.next;
        }
        iterator.next = node;
    }

    bulkInsert(items: number[]){
        items.forEach(item => {
            this.insertAtEnd(item)
        })
    }

    getList(): number[] {
       let arr: number[] = [];
       if(this.head === null) return arr;
       let iterator: ListNode | null = this.head;
       while (iterator !== null) {
           arr.push(iterator.data);
           iterator = iterator.next;
       }
       return arr;
    }




}


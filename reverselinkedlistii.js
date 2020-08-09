//Objective is to reverse a linked list from index m to n in a linked list,
//assuming the head starts at index 1

class Node {
    constructor(val, next = null) { //if next is not given, assume it is empty
      this.val = val
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(4)
head.next = new Node(1)
head.next.next = new Node(8)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

let m = 2
let n = 4


//O(n) solution that finds the starting point of the reverse,
//then reverses the list normally

if (!head) {
    return null
}

let newNode = new ListNode(-1)
newNode.next = head
let temp = newNode

for (let i = 0; i < m - 1; i++) {
    temp = temp.next
}

let tail = temp.next
for (let i = 0; i < n - m; i++) {
    let temp2 = temp.next 
    temp.next = tail.next 
    tail.next = tail.next.next
    temp.next.next = temp2
}

return newNode.next
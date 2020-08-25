/**
 * 链表
 * 链表是一组节点组成的集合，每个节点都使用一个对象的引用指向它的后继，指向另外一个节点的引用叫做链。
 * 数组元素靠它们的位置进行引用，链表元素则是靠相互之间的关系进行引用。
 * 链表的尾元素指向null
 * 
 */

//用来表示节点
class Node {
    constructor(data) {
        this.data = data; //节点上的数据
        this.next = null; //指向下一个节点的链接
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head');
    }

    insert(newItem, item) {
        var newNode = new Node(newItem);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

    find(item) {
        var curNode = this.head;
        while(curNode.data != item) {
            curNode = curNode.next;
        }
        return curNode;
    }

    findPrevious(item) {
        var curNode = this.head;
        while(!(curNode.next == null) && (curNode.next.data != item)) {
            curNode = curNode.next;
        }
        return curNode;
    }

    remove(item) {
        var parentNode = this.findPrevious(item);
        if (!(parentNode.next == null)) {
            parentNode.next = parentNode.next.next;
        }
    }
}


// 双向链表
// 让每个节点有一个指向前驱的属性



//用来表示节点
class Node {
    constructor(data) {
        this.data = data; //节点上的数据
        this.next = null; //指向下一个节点的链接
        this.previous = null; //指向上一个节点的链接
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head');
    }

    insert(newItem, item) {
        var newNode = new Node(newItem);
        var current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    }

    find(item) {
        var curNode = this.head;
        while(curNode.data != item) {
            curNode = curNode.next;
        }
        return curNode;
    }

    remove(item) {
        var curNode = this.find(item);
        if (curNode.next != null) {
            curNode.previous.next = curNode.next;
            curNode.next.previous = curNode.previous;
            curNode.next = null;
            curNode.previous = null;
        }
    }
}
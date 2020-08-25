/**
 * 队列
 * 是一种列表，队列只能在队尾插入元素，在队首删除元素
 * 先进先出，first-in-first-out, F-I-F-O
 * 
 * 应用：打印任务池，银行排队顾客...
 */


 class Queue {
    constructor() {
        this.dataStore = [];
        this.length = 0;
    }
    // 队尾添加元素
    push(item) {
        this.dataStore.push(item);
        this.length++;
    }
    // 返回队首元素并删除
    shift() {
        this.length--;
        return this.dataStore.shift();
    }
    // 返回队首元素，不删除
    peek() {
        return this.dataStore[0];
    }
 }


// 队列应用
//  1.排序 --- 基数排序
// 基数排序： 对于0-99的数字扫描两次，第一次按个位数字进行排序，第二次按照十位数字排序


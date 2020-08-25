/**
 * 栈是一种高效的数据类型
 * 数据只能在栈顶添加或者删除，所以操作很快，容易实现
 * LIFO： last-in-first-out
 * 栈具有后入先出的特点，所以不在栈顶的数据无法访问
 */


 class Stack {
     constructor() {
         this.dataStore = [];
         this.length = 0;
     }

     push(item) {
        this.dataStore[this.length++] = item;
     }

     pop() {
        return this.dataStore[--this.length];
     }

     peek() {
         return this.dataStore[this.length - 1];
     }

     clear() {
         this.length = 0;
     }
 }

// 栈的使用例子
//  1.数制间的相互转换（基数为2-9）

function mulBase(num, base) {
    var s = new Stack();
    while(num > 0) {
        s.push(num % base);
        num = Math.floor(num /= base);
    }
    var res = '';
    while(s.length > 0) {
        res += s.pop();
    }
    return res;
}


mulBase(10, 2); // 1010
mulBase(9, 2); // 1001
mulBase(8, 2); // 1000


// 2. 判断一个字符串是否为回文
function isPalindrome(word) {
    word = word.toString();
    var s = new Stack();
    for (var i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    var rword = '';
    while(s.length > 0) {
        rword += s.pop();
    }

    if (rword === word) {
        return true;
    }
    return false;
}

// 3. 用栈模拟递归实现阶乘
function factorial(n) {
    var s = new Stack();
    while(n > 1) {
        s.push(n--);
    }
    var res = 1;
    while(s.length > 0) {
        res *= s.pop();
    }
    return res;
}

// 计算"2.3 + 23 / 12 + (3.14159×0.24"算式中丢失括号的位置
function check() {
    var s = new Stack();
    var left = ['[', '(', '{'];
    var right = [']', ')', '}'];
    for (var i = 0; i < str.length; i++) {
        if (left.indexOf(str[i]) > -1) {
            s.push(str[i]);
        } else if (right.indexOf(str[i]) > -1){
            var topV = s.peek();
            switch(str[i]) {
                case ']': 
                    if (topV === '[') {
                        s.pop();
                        break;
                    }
                    return i + 1;
                case ')':
                    if (topV === '(') {
                        s.pop();
                        break;
                    }
                    return i + 1;
                case '}':
                    if (topV === '{') {
                        s.pop();
                        break;
                    }
                    return i + 1;
                defalult: break;
            }
        }
    }
    if (s.length > 0) {
        return str.length + 1;
    }
    return -1;
}

check("2.3 + 23 / 12 + (3.14159×0.24");  // 30
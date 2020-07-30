function Queue(str) {
    console.log(str);
    this.store = [];
    this.push = push;
    this.getItem = getItem;
    this.dequeue = dequeue;
    this.time = 0;
    this.task = task;
    this.restFirst = restFirst;
    this.rest = rest;
}


function push(value) {
    this.store.push(value);
}

function getItem(index) {
    return this.store[index];
}

function dequeue() {
    return this.store.shift();
}

function task(val) {
    this.push(val);
    if (this.time) {
        this.timeid = setTimeout( () => {
            console.log(`do ${val}`);
            this.time = 0;
            clearTimeout(this.timeid);
            this.dequeue();
        }, this.time * 1000);
    }
    return this;
}

function restFirst(time) {
    this.time = time;
    this.task(this.getItem(0));
    return this;
}

function rest(time) {
    this.time = time;
    return this;
}


// ===================================


function QueueList() {
    this.store = [];
    this.push = push;
    this.getItem = getItem;
    this.dequeue = dequeue;
    this.hasValue = hasValue;
}

function push(value) {
    this.store.push(value);
}

function getItem(index) {
    return this.store[index];
}

function dequeue() {
    return this.store.shift();
}

function hasValue(value) {
    return this.store.indexOf(value) > -1;
}


function Queue(str) {
    console.log(str);
    this.timeQueue = new QueueList();
    this.valueQueue = new QueueList();
    this.task = task;
    this.rest = rest;
    this.restFirst = restFirst;
    return this;
}

function task(value) {
    if (!this.valueQueue.hasValue(value)) {
        this.valueQueue.push(value);
    }
    if (this.timeQueue.getItem(0)) {
        this.timeId = setTimeout(() => {
            console.log(`do ${value}`);
            this.valueQueue.dequeue();
            this.timeQueue.dequeue();
        }, this.timeQueue.getItem(0) * 1000);
    }
    return this;
}

function rest(time) {
    this.timeQueue.push(time);
    return this;
}

function restFirst(time) {
    this.timeQueue.push(time);
    this.task(this.valueQueue.getItem(0));
    return this;
}

// ======================================
// https://blog.csdn.net/weixin_43199838/article/details/107290727


// function QueueList() {
//     this.store = [];
//     this.push = push;
//     this.getItem = getItem;
//     this.dequeue = dequeue;
//     this.hasValue = hasValue;
// }

// function push(value) {
//     this.store.push(value);
// }

// function getItem(index) {
//     return this.store[index];
// }

// function dequeue() {
//     return this.store.shift();
// }

// function hasValue(value) {
//     return this.store.indexOf(value) > -1;
// }


function Queue(str) {
    console.log(str);
    this.eventQueue = [];
    this.valueQueue = [];
}

Queue.prototype.getItem = function(type) {
    if (type === 'event') {
        return this.eventQueue.shift();
    } else {
        return this.valueQueue.shift();
    }
}

Queue.prototype.push = function(value, type) {
    if (type === 'event') {
        return this.eventQueue.push(value);
    } else {
        return this.valueQueue.push(value);
    }
}

Queue.prototype.task = function(value) {
    if (this.valueQueue.indexOf(value) == -1) {
        this.push(value, 'value');
    }
    const fn = this.getItem('event');
    fn && typeof fn === 'function' && fn(value);
    return this;
}

Queue.prototype.rest = function(time) {
    const fn = (value) => {
        setTimeout(() => {
            console.log('do ' + value);
        }, time * 1000);
    };
    this.push(fn, 'event');
    return this;
}

Queue.prototype.restFirst = function(time) {
    const fn = (value) => {
        setTimeout(() => {
            console.log('do ' + value);
        }, time * 1000);
    };
    this.push(fn, 'event');
    this.task(this.getItem('value'));
    return this;
}
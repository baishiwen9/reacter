/**
 * 实现一个简单的发布订阅
 */
export default class EventEmitter {
    constructor () {
        this.events = {};
    }

    on (type, cb) {
        if (!this.events[type]) {
            this.events[type] = [cb];
        } else {
            this.events[type].push(cb);
        }
    }

    off (type, cb) {
        if (!this.events[type]) {
            return;
        } else {
            this.events[type] = this.events[type].filter(fn => fn !== cb);
        }
    }

    emit (type, ...args) {
        if (this.events[type]) {
            this.events[type].map(fn => fn.apply(this, args));
        }
    }
}


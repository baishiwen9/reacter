/**
 * 列表
 *  eg：待办事项列表，购物清单，十佳榜单等等
 */
class List {
    constructor() {
        this.listsize = 0;
        this.pos = 0;
        this.dataStore = [];
    }

    clear() {
        delete this.dataStore;
        this.dataStore.length = 0;
        this.listsize = 0;
        this.pos = 0;
    }

    find(item) {
        for (var i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === item) {
                return i;
            }
        }
        return -1;
    }

    insertByIndex(item, index) {
        if (index < 0) {
            return false;
        }
        this.dataStore.splice(index, 0, item);
        ++this.listsize;
        return true;
    }
    /**
     * @param {*} item 要插入的元素
     * @param {*} targetItem 插入元素的参考元素，即膜表元素
     * @param {*} positionType 1表示出入到目标元素的后面，-1表示插入到目标元素的前面（默认为1）
     */
    insertItem(item, targetItem, positionType = 1) {
        const index = this.find(targetItem);
        if (positionType == 1) {
            this.insertByIndex(item, index + 1);
        } else {
            this.insertByIndex(item, index);
        }
    }

    append(item) {
        this.dataStore[this.listsize++] = item;
    }

    remove(item) {
        const index = this.find(item);
        if (index > -1) {
            this.dataStore.splice(index, 1);
            --this.listsize;
            return true;
        }
        return false;
    }

    front() {
        this.pos = 0;
    }

    end() {
        this.pos = this.listsize - 1;
    }
    
    prev() {
        --this.pos;
    }

    next() {
        if (this.pos < this.listsize) {
            ++this.pos;
        }
    }

    currPos() {
        return this.pos;
    }

    moveTo(index) {
        this.pos = index;
    }

    getCurrentItem() {
        return this.dataStore[this.pos];
    }

    hasNext() {
        return this.pos < this.listsize;
    }

    hasPrev() {
        return this.pos >= 0;
    }

    contains(item) {
        return this.find(item) > -1;
    }
}
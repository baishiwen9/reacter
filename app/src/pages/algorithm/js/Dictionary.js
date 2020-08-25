/**
 * 字典
 *  是一种键-值对形式存储的数据结构
 *  js中的Object就是以字典形式设计的
 *  
 */

class Dictionary {
    constructor() {
        this.dataStore = new Array();
    }
    add(key, value) {
        this.dataStore[key] = value;
    }

    get(key) {
        return this.dataStore[key];
    }

    delete(key) {
        return delete this.dataStore[key];
    }

    getLength() {
        return Object.keys(this.dataStore).length;
    }
    clear() {
        const keys = Object.keys(this.dataStore);
        keys.forEach(key => delete this.dataStore[key]);
    }
}
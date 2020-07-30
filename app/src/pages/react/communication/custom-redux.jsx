import React, { Component } from 'react';
import Code from './../../comp/Code';


export default class ContextComp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">自己实现redux核心功能</span>
                </p>
                <div className="article-desc">
                    参考文档：<a href="https://juejin.im/post/5b29025ee51d4558b64f10bf" target="_blank">https://juejin.im/post/5b29025ee51d4558b64f10bf</a>
                    <br /><br />
                    redux使用的基础场景：<br />
                    <Code code={`
//reducer：通过action用来改变state，返回一个新的state
function reducer(state, action) {
    // ...
    return state;
}

//将reducer和store关联起来，只有通过action通知reducer改变state后同步到store，返回一个store对象
const store = createStore(reducer);

//订阅store中的state，如果有state发生变化，则会触发监听函数
store.subscribe(function() {
    store.getState();
});

//通过dispatch发送一个action
store.dispatch({
    type: 'ADD',
    data: 1
})`} />
                </div>
                <p className="item-title">
                    <span className="textShadow">一、实现createStore方法</span>
                </p>
                <div className="article-desc">
                    <Code code={`
function createStore(reducer) {
    let state = null; //存储全部的状态
    const events = []; //保存订阅状态变化的回调函数
    //订阅
    const subscribe = (fn) => {
        events.push(fn);
        //订阅成功后返回一个取消订阅的方法
        return function () {
            events = events.filter(itemFn => itemFn !== fn);
        }
    }
    //获取最新的state
    const getState = () => state;

    const dispatch = (action) => {
        //通过action执行reducer改变state
        state = reducer(state, action);
        //state改变后执行订阅的回调函数
        events.forEach(fn => fn());
    }
    //初始化全局状态
    dispatch({});
    return { subscribe, getState, dispatch };
}`} />
                </div>
                <p className="item-title">
                    <span className="textShadow">二、实现combineReducers方法</span>
                </p>
                <div className="article-desc">
                combineReducers方法会将所有的reducer合并成一个传给createStore方法。<br />
                    <Code code={`
function combineReducers(reducers) {
    return function(state = {}, action) {
        let newState = {};
        for (let key in reducers) {
            newState[key] = reducers[key](state[key], action);
        }
        return newState;
    }
}
//使用
const rootReducer = combineReducers({
    userInfoReducer,
    adminReducer,
});
creatStore(rootReducer);`} />
                </div>
                <p className="item-title">
                    <span className="textShadow">三、实现bindActionCreators方法</span>
                </p>
                <div className="article-desc">
                bindActionCreators这个方法，这是redux提供的一个辅助方法，能够让我们以方法的形式来调用action。同时，自动dispatch对应的action。它接收2个参数，第一个参数是接收一个action creator，第二个参数接收一个 dispatch 函数，由 Store 实例提供。<br/><br/>
                <span className="mark">不使用bindActionCreators方法：</span><br/><br/>
                <Code code={`
// TodoActions.js

function add(text) {
    return {
        type: 'ADD',
        text,
    }
}

function remove(id) {
    return {
        type: 'REMOVE',
        id,
    }
}

//使用
import * as TodoActionCreators from './TodoActions';
//生成action
let addReadAction = TodoActionCreators.add('看书');
// 手动调用dispatch
dispatch(addReadAction);

let removeEatAction = TodoActionCreators.remove('看书');
dispatch(removeEatAction);
`} /><br />
                为了简化上述过程， 我们可以使用bindActionCreators方法。<br />
                <Code code={`
import * as TodoActionCreators from './TodoActions';

function bindActionCreators(actions, dispatch) {
    let newActions = {};
    for (let key in actions) {
        newActions[key] = function() {
            dispatch(actions[key].apply(null, arguments));
        };
    }
    return newActions;
}

const TodoAction = bindActionCreators(TodoActionCreators, store.dispatch);
TodoAction.add('看书');
TodoAction.remove('看书');
`} />
                </div>
                <p className="item-title">
                    <span className="textShadow">四、实现compose方法</span>
                </p>
                <div className="article-desc">
                compose这个方法，这是一个redux里的辅助方法，其作用是把一系列的函数，组装生成一个新的函数，并且从后到前依次执行，后面函数的执行结果作为前一个函数执行的参数。<br /><br />

                示例：<br />
                <Code code={`
function add1(str) {
    return str + 1
}

function add2(str) {
    return str + 2
}

function add3(str) {
    return str + 3
}

compose(add3(add2(add1('abc')))); //'abc123'`} /><br />
                    如果使用compose函数会简化上述操作：<br />
                    <Code code={`
function compose(...funs) {
    return funs.reduce((preFn, curFn) => {
        return (..args) {
            preFn(curFn(...args));
        }
    })
}

const composeFn = compose(add3, add2, add1);
composeFn('abc'); //'abc123'`} />
                </div>

                <p className="item-title">
                    <span className="textShadow">五、所有代码</span>
                </p>
                <div className="article-desc">
                    <Code code={`
function createStore(reducer) {
    let state = null;
    const events = [];
    const getState = () => state;
    const dispatch = (action) => {
        reducer(state, action);
        events.forEach(fn => fn());
    }
    const subscribe = (fn) => {
        events.push(fn);
        return function() {
            events = events.filter(itemFn => itemFn !== fn);
        }
    }
    dispatch({});
    return {
        getState,
        dispatch,
        subscribe,
    }
}

function combineReducers(reducers) {
    return (state, action) => {
        let newState = {};
        for (let key in reducers) {
            newState[key] = reducers[key](state[key], action);
        }
        return newState;
    }
}

function bindActionCreators(actionsFn, dispatch) {
    let newActions = {};
    for (let key in actionsFn) {
        newActions[key] = (...args) => dispatch(actionsFn[key].apply(null, args));
    }
    return newActions;
}

function compose(...fns) {
    return fns.reduce((preFn, curFn) => {
        return (...args) => {
            return preFn(curFn(...args));
        }
    })
}
`} />
                </div>
            </div>
        )
    }
}
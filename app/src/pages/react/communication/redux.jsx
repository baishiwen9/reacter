import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class CommunicationRedux extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title">
                    <span className="textShadow">react组件间的通信---redux</span>
                </p>
                <p className="item-title">
                    <span className="textShadow">一、学习redux</span>
                </p>
                <div >
                    redux中文官网： <a href="https://www.redux.org.cn/" target="_blank">https://www.redux.org.cn/</a><br />
                    <br />
                    <span className="mark">1. redux三大原则</span>
                    <div className="quote">
                      a、单一数据源。 整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。<br /><br />
                      b、State 是只读的。唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。<br /><br />
                      c、使用纯函数来执行修改。为了描述 action 如何改变 state tree ，需要编写 reducers。
                    </div>

                    <span className="mark">2. Action</span>
                    <div className="quote">
                      a、Action: Action 是把数据从应用传到 store 的有效载荷。它是 store 数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store。<br /><br />
                      b、Action 本质: 是 JavaScript 普通对象<br /><br />
                      c、对Action的约定：action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。多数情况下，type 会被定义成字符串常量。当应用规模越来越大时，建议使用单独的模块或文件来存放 action。<br /><br />
                      d、应该尽量减少在 action 中传递的数据<br /><br />
                      e、Action 创建函数： 就是生成 action 的方法
                    </div> 

                    <span className="mark">3. Reducer</span>
                    <div className="quote">
                      a、Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。<br /><br />
                      b、reducer: 就是一个纯函数，接收旧的 state 和 action，返回新的 state。<br /><br />
                      c、由于reducer是一个纯函数，所以在reducer中不能：修改传入参数；执行有副作用的操作，如 API 请求和路由跳转；调用非纯函数，如 Date.now() 或 Math.random()。<br /><br />
                      d、处理多个 action: reducers可以处理多个action
                    </div>

                    <span className="mark">4. Store</span>
                    <div className="quote">
                      a、Store 是把action，reducer联系到一起的对象<br /><br />
                      b、Store 的职责：<br /><br />
                          维持应用的 state；<br />
                          提供 getState() 方法获取 state；<br />
                          提供 dispatch(action) 方法更新 state；<br />
                          通过 subscribe(listener) 注册监听器;<br />
                          通过 subscribe(listener) 返回的函数注销监听器。
                    </div>
                </div>
                <p className="item-title">
                    <span className="textShadow">二、API</span>
                </p>
                <div>
                    <span className="mark">1、createStore</span><br />
                    <div className="code-desc">
                        createStore(reducer, [preloadedState], enhancer)
                    </div>
                    作用： 创建一个 Redux store 来以存放应用中所有的 state。<br /><br />
                    参数： <br />
                    reducer (Function): 接收两个参数，分别是当前的 state 树和要处理的 action，返回新的 state 树。<br /><br />
                    [preloadedState] (any): 初始时的 state。<br /><br />
                    enhancer (Function): Store enhancer 是一个组合 store creator 的高阶函数，返回一个新的强化过的 store creator。这与 middleware 相似，它也允许你通过复合函数改变 store 接口。<br /><br />
                    返回值： 保存了应用所有 state 的对象。<br /><br />
                    <Code code={`
import { createStore } from 'redux'

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

let store = createStore(todos, ['Use Redux'])

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
})

console.log(store.getState())
// [ 'Use Redux', 'Read the docs' ]`} /><br /><br />

                        <span className="mark">2、Store</span><br />
                        Store 就是用来维持应用所有的 state 树 的一个对象。 改变 store 内 state 的惟一途径是对它 dispatch 一个 action。<br /><br />
                        Store 方法: <br />
                        getState(), dispatch(action), subscribe(listener), replaceReducer(nextReducer)
                        <br /><br />

                        getState(): 返回应用当前的 state 树。它与 store 的最后一个 reducer 返回值相同。<br /><br />
                        dispatch(action): 分发 action。这是触发 state 变化的惟一途径。返回值object： 要 dispatch 的 action。<br /><br />
                        subscribe(listener)： 添加一个变化监听器。每当 dispatch action 的时候就会执行，state 树中的一部分可能已经变化。你可以在回调函数里调用 getState() 来拿到当前 state。 返回值： 一个可以解绑变化监听器的函数。<br /><br />
                        replaceReducer(nextReducer)： 替换 store 当前用来计算 state 的 reducer。<br /><br />
                
                        <span className="mark">3、combineReducers(reducers)</span><br />
                        combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore 方法。<br /><br />
                        参数： reducers (Object): 一个对象，它的值（value）对应不同的 reducer 函数，这些 reducer 函数后面会被合并成一个。<br /><br />
                        返回值： (Function)：一个调用 reducers 对象里所有 reducer 的 reducer，并且构造一个与 reducers 对象结构相同的 state 对象。<br /><br />
                        
                        <span className="mark">4、applyMiddleware(...middlewares)</span><br />
                        使用包含自定义功能的 middleware 来扩展 Redux 是一种推荐的方式。Middleware 可以让你包装 store 的 dispatch 方法来达到你想要的目的。同时， middleware 还拥有“可组合”这一关键特性。多个 middleware 可以被组合到一起使用，形成 middleware 链。其中，每个 middleware 都不需要关心链中它前后的 middleware 的任何信息。<br /><br />
                        参数： ...middlewares (arguments): 遵循 Redux middleware API 的函数。每个 middleware 接受 Store 的 dispatch 和 getState 函数作为命名参数，并返回一个函数。该函数会被传入 被称为 next 的下一个 middleware 的 dispatch 方法，并返回一个接收 action 的新函数，这个函数可以直接调用 next(action)，或者在其他需要的时刻调用，甚至根本不去调用它。调用链中最后一个 middleware 会接受真实的 store 的 dispatch 方法作为 next 参数，并借此结束调用链。<br /><br />
                </div>
                <p className="item-title">
                    <span className="textShadow">三、react-redux</span>
                </p>
                <div >
                    react-redux API: <br /><br />
                    <span className="mark">1. Provider</span>
                    Provider 组件的属性：store， 使组件层级中的 connect() 方法都能够获得 Redux store。正常情况下，你的根组件应该嵌套在 Provider 中才能使用 connect() 方法。<br /><br />
                    使用实例：
                    <Code code={`
ReactDOM.render(
    <Provider store={store}>
      <MyRootComponent />
    </Provider>,
    document.getElementById('root')
)
//和router配合使用
ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="foo" component={Foo} />
          <Route path="bar" component={Bar} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
)`} /><br /><br />
                    <span className="mark">2. connect</span><br />
                    <div className="code-desc">connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])</div>
                    connect的作用是连接 React 组件与 Redux store。连接操作不会改变原来的组件类。反而返回一个新的已与 Redux store 连接的组件类。<br />
                    connect是一个高阶组件。<br /><br />
                    <span className="mark">connect的参数：</span><br />
                    mapStateToProps： Function， mapStateToProps(state, [ownProps])<br /><br />
                    如果定义该参数，组件将会监听 Redux store 的变化。任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用。该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并。如果你省略了这个参数，你的组件将不会监听 Redux store。<br /><br />
                    state: 是全局store里的状态，是父组件（provider）传给当前组件的props<br /><br />
                    ownProps: 是当前组件自己的props，如果组件接受到的props变动的时候会重新调用mapStateToProps函数进行计算。<br /><br />
                
                    mapDispatchToProps： Function， mapDispatchToProps(dispatch, [ownProps])<br /><br />
                    如果mapDispatchToProps是一个对象：那么每个定义在该对象的函数都将被当作 Redux action creator，对象所定义的方法名将作为属性名；每个方法将返回一个新的函数，函数中dispatch方法会将 action creator 的返回值作为参数执行。这些属性会被合并到组件的 props 中。<br /><br />
                    如果mapDispatchToProps是一个函数：该函数将接收一个 dispatch 函数，然后由你来决定如何返回一个对象，这个对象通过 dispatch 函数与 action creator 以某种方式绑定在一起。如果你省略这个 mapDispatchToProps 参数，默认情况下，dispatch 会注入到你的组件 props 中。<br /><br />
                
                    mergeProps： Function， mergeProps(stateProps, dispatchProps, ownProps)<br /><br />
                    如果指定了这个参数，mapStateToProps() 与 mapDispatchToProps() 的执行结果和组件自身的 props 将传入到这个回调函数中。该回调函数返回的对象将作为 props 传递到被包装的组件中。你也许可以用这个回调函数，根据组件的 props 来筛选部分的 state 数据，或者把 props 中的某个特定变量与 action creator 绑定在一起。如果你省略这个参数，默认情况下返回 Object.assign({}, ownProps, stateProps, dispatchProps) 的结果。
                </div>
            </div>
        )
    }
}
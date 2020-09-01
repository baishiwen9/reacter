import React, { Component } from 'react';
import Code from './../../comp/Code';


export default class ContextComp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title">
                    <span className="textShadow">react组件间的通信---context</span>
                </p>
                <div className="quote">
                    官网文档： https://zh-hans.reactjs.org/docs/context.html#gatsby-focus-wrapper
                    <br />
                    <span className="mark">Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。</span>
                    <br /><br />
                    1、为什么要用context？<br />
                    在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），这些属性是应用程序中许多组件都需要的。Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。
                    <br /><br />
                    2、什么时候使用context？<br />
                    Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。
                    <br /><br />
                    3、使用context对项目有什么影响？<br />
                    Context 主要应用场景在于很多不同层级的组件需要访问同样一些的数据。请谨慎使用，因为这会使得组件的复用性变差。
                </div>
                <p className="item-title">
                    <span className="textShadow">一、context的API</span>
                </p>
                <div className="quote">
                    1. React.createContext<br />
                    <div className="code-desc">const MyContext = React.createContext(defaultValue);</div>
                    创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值。
                    <br />
                    只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。

                    <br /><br />
                    2. Context.Provider<br />
                    <div className="code-desc">{'<MyContext.Provider value="某个值"></MyContext.Provider>'}</div>
                    每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。<br /><br />
                    Provider 接收一个 value 属性，传递给消费组件。一个 Provider 可以和多个消费组件有对应关系。多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。<br /><br />

                    当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。Provider 及其内部 consumer 组件都不受制于 shouldComponentUpdate 函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。

                    <br /><br />
                    3. Class.contextType<br />
                    挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。这能让你使用 this.context 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中。
                    <br />

                    <Code code={`
class MyClass extends React.Component {
    componentDidMount() {
      let value = this.context;
      /* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
    }
    componentDidUpdate() {
      let value = this.context;
      /* ... */
    }
    componentWillUnmount() {
      let value = this.context;
      /* ... */
    }
    render() {
      let value = this.context;
      /* 基于 MyContext 组件的值进行渲染 */
    }
  }
  MyClass.contextType = MyContext;`}></Code>
<br />
                    <Code code={`
class MyClass extends React.Component {
    static contextType = MyContext;
    render() {
      let value = this.context;
      /* 基于这个值进行渲染工作 */
    }
}`} /><br /><br />

                    4. Context.Consumer<br />
                    这里，React 组件也可以订阅到 context 变更。这能让你在函数式组件中完成订阅 context。
                    <br /><br />
                    这需要函数作为子元素（function as a child）这种做法。这个函数接收当前的 context 值，返回一个 React 节点。传递给函数的 value 值等同于往上组件树离这个 context 最近的 Provider 提供的 value 值。如果没有对应的 Provider，value 参数等同于传递给 createContext() 的 defaultValue。
                    <Code code={`
<MyContext.Consumer>
    {value => /* 基于 context 值进行渲染*/}
</MyContext.Consumer>`} /><br /><br />
                    5. Context.displayName<br />
                    context 对象接受一个名为 displayName 的 property，类型为字符串。<br />
                    <Code code={`
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> // "MyDisplayName.Provider" 在 DevTools 中
<MyContext.Consumer> // "MyDisplayName.Consumer" 在 DevTools 中`} />
                </div>
            </div>
        )
    }
}
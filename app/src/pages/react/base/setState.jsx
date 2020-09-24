import React, { Component } from 'react';
import Code from './../../comp/Code';

export default class SetState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    componentDidMount() {
        this.setState({
            value: this.state.value + 2
        })
        console.log('--- first ---',this.state.value);
        this.setState({
            value: this.state.value + 1
        })
        console.log('--- second ---', this.state.value);

        setTimeout(() =>  {
            this.setState({
                value: this.state.value + 1,
            })
            console.log('--- third ---', this.state.value);
            this.setState({
                value: this.state.value + 1,
            })
            console.log('--- fifth ---', this.state.value);
        })
        // ===================================
        // this.setState({
        //     value: this.state.value + 1,
        // });
        // console.log('---componentDidMount---', this.state.value);
        // this.setState({
        //     value: this.state.value + 2,
        // });
        // this.setState({
        //     value: this.state.value + 3,
        // });
        // this.setState({
        //     value: this.state.value + 4,
        // });

        // document.body.addEventListener('click', () => {
        //     this.setState({
        //         value: this.state.value + 1,
        //     });
        //     console.log('---addEventListener---', this.state.value);
        // }, false);

        // setTimeout(() => {
        //     this.setState({
        //         value: this.state.value + 1,
        //     });
        //     console.log('---setTimeout---', this.state.value);
        // }, 3000);

        // setInterval(() => {
        //     this.setState({
        //         value: this.state.value + 1,
        //     });
        //     console.log('---setInterval---', this.state.value);
        // }, 4000);
    }

    btnClick() {
        this.setState({
            value: this.state.value + 1,
        });
        console.log('---合成事件---', this.state.value);
    }

    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">setState</span></p>
                <div className="quote">
                    1. setState只有在合成事件和钩子函数中是“异步”执行的；<br/><br/>
                    2. setState在原生事件和setTimeout中是同步执行的；<br/><br/>
                    3. setState的异步内部并不是由异步代码实现的，其实本身代码合执行的顺序都是同步的；只是因为合成事件和钩子函数的执行在更新之前，导致在合成事件和钩子函数中不能立即拿到更新后的值（可以通过setState的第二个参数callback获取最新值）。<br/><br/>
                    <button onClick={() => this.btnClick()}>点我</button><br /><br />
                
                    <span className="mark">为什么setTimeout中的setState是同步的？</span><br />
                    这是由于setTimeout是异步代码，根据event loop，先会执行调用栈中同步代码，只到调用栈为空的时候，回去检查事件队列里有没有事件，如果有则拿出来执行。所以setTimeout中的setState是“同步”执行的。<br/><br/>
                    react的事件机制：react为了解决跨平台，兼容性问题，自己封装了一套事件机制，代理了原生的事件，像在jsx中常见的onClick、onChange这些都是合成事件。
                </div>

                <p className="item-title">react的哪些生命周期中可以setState</p>
                <div className="quote">
                    componentDidMount可以<br />
                    shouldComponentUpdate 和 componentWillUpdate中禁止调用setState，否则会形成一个死循环直至浏览器崩溃<br />
                    componentDidUpdate中可以，效果和componentDidMount一样<br />
                    componentWillReceviceProps中可以调用setState
                </div>
            </div>
        )
    }
}
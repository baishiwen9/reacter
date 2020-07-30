import React, { Component } from 'react';
import Code from './../../comp/Code';


export default class MatchMedia extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">window.matchMeida</span>
                </p>


                <p className="item-title">
                    <span className="textShadow">window.matchMeida</span>
                </p>
                <div className="article-desc">
                    MDN文档：<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia" target="_blank">https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia</a><br />
                    菜鸟文档：<a href="https://www.runoob.com/jsref/met-win-matchmedia.html" target="_blank">https://www.runoob.com/jsref/met-win-matchmedia.html</a>
                    实例代码：<br /><br />
                    <Code code={`
const checkMediaQuery = () => {
    const type = window.matchMedia("(min-width: 1025px)").matches ? 'desktop' : 'mobile';
    console.log('---type---', type);
};

window.addEventListener('resize', checkMediaQuery);`} />
                </div>
            </div>
        )
    }
}
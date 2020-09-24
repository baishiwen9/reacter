//浅拷贝 & 深拷贝

import React, { Component } from 'react';
import Code from './../../comp/Code';


export default class Router extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title">
                    <span className="textShadow">前端路由</span>
                </p>
                <div className="quote">
                    在 Web SPA 中，前端路由描述的 URL 与 UI 之间的单向映射关系，即 URL 变化引起 UI 页面的更新（无需刷新页面）.<br /><br />
                    要解决的核心问题：<br />
                    1. 如何检测 URL 是否变化？<br />
                    2. 如何改变 URL 却不引起页面刷新？<br /><br />

                    解决问题的办法：<br />
                    1. 在hash方式中，可以通过hashchange事件监听url的变化，可以触发hashchange事件的方式有：<br />
                    a. 通过浏览器前进后退改变url<br />
                    b. 通过标签改变url<br />
                    c. 通过window.location改变url<br />
                    hash是url中#及后面的部分，改变url中的hash部分不会引起页面刷新<br /><br />

                    2. 在history方式中，可以通过popstate事件监听url的变化，可通过调用pushState和replaceState两种方法，改变url而不引起页面刷新。<br />
                    可以触发popstate事件的方式有：<br />
                    a. 浏览器前进或后退<br />
                    通过pushState和replaceState或标签改变url并不会触发popstate事件，因此需要手动拦截。<br />
                    参考资料： <a href="https://www.juejin.im/post/6844904056754798600" target="_blank">前端路由</a>
                </div>
                <h3>一、hash方式</h3>
                <Code code={`
// html
// 定义路由
<ul>
    <li><a href="#/home">home</a></li>
    <li><a href="#/about">about</a></li>
</ul>

// 渲染路由对应的UI
<div id="routeView"></div>

// js
function getRouterView() {
    return document.querySelector('#routeView');
}
function onHashChange() {
    switch(window.location.hash) {
        case '':
        case '#/home':
            getRouterView().innerHTML = 'home';
            break;
        case '#/about':
            getRouterView().innerHTML = 'about';
            break;
        default:
            break;
    }
}
// 页面加载完成不会触发hashchange事件，这里主动触发一次hashchange事件
window.addEventListener('DOMContentLoaded', () => {
    onHashChange();
});
// 监听路由变化
window.addEventListener('hashchange', onHashChange);
`} />

                <h3>二、history方式</h3>
                <Code code={`
// html
// 定义路由
<ul>
    <li><a href="/home">home</a></li>
    <li><a href="/about">about</a></li>
</ul>

// 渲染路由对应的UI
<div id="routeView"></div>

// js
function getRouterView() {
    return document.querySelector('#routeView');
}
function onPopState() {
    switch(window.location.pathname) {
        case '/':
        case '/home':
            getRouterView().innerHTML = 'home';
            break;
        case '/about':
            getRouterView().innerHTML = 'about';
            break;
        default:
            break;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    onPopState();
    // 拦截a标签的点击事件默认行为，点击时使用pushstate修改url并手动更新ui，从而实现点击链接更新url和ui的效果。
    const links = document.querySelectorAll('a[href]');
    links.forEach(el => {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            // 手动拦截
            window.history.pushState(null, '', el.getAttribute('href'));
            onPopState();
        })
    })
});

// 监听路由变化
window.addEventListener('popstate', onPopState);
`} />
                
            </div>
        )
    }
}
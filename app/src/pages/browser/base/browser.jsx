

import React, { Component } from 'react';
import Code from '../../comp/Code';
import NeiHe from '../../../img/neihe.jpg';

export default class BrowserNote extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">浏览器进程、渲染、运行机制解密</span></p>
                
                <p className="item-title">一、线程和进程</p>
                <div className="quote">
                    参考文档： <a href="https://segmentfault.com/a/1190000012925872" target="_blank">https://segmentfault.com/a/1190000012925872</a><br/><br/>
                    1、进程：进程是CPU分配的最小单位，是能拥有资源和独立运行的最小单位， 不同的进程之间可以通讯，但是代价较大。<br/>
                    2、线程：是CPU调度的最小单位, 线程是建立在进程的基础上的一次程序运行单位，一个进程可以有多个线程；单线程和多线程是指一个进程里的单和多；<br/>
                    <br />
                    举例说明：<br />
                    进程是一个工厂，线程是工厂的工人，工厂之间独立，一个工厂可以有一个或者多个工人，每个工人协作完成任务，工人之间共享空间。<br />
                </div>

                <p className="item-title">二、浏览器是多进程的</p>
                <div className="quote">
                    1. 浏览器是多进程的<br />
                    2. 浏览器之所以能够运行，是因为系统给他的进程分配了资源（CPU，内存）<br />
                    3. 简单点理解，每打开一个Tab页，相当于创建了一个独立的浏览器进程。<br /><br />

                    <span className="mark">浏览器包含哪些进程？</span><br />
                    1. browser进程：浏览器的主进程（负责协调，主控），只有一个，作用有：<br />
                        <span className="text-placeholder" />负责浏览器界面显示，与用户交互，如前进后退等；<br />
                        <span className="text-placeholder" />负责各个页面的管理，创建和销毁其他进程；<br />
                        <span className="text-placeholder" />将Renderer进程得到的内存中的Bitmap，绘制到用户界面上；<br />
                        <span className="text-placeholder" />网络资源的下载，管理等<br /><br />
                    2. 第三方插件进程：每种类型的插件对应一个进程，仅当使用该插件的时候才会创建<br /><br />
                    3. GPU进程：最多一个，用于3D绘制等<br /><br />
                    4. 浏览器渲染进程（Renderer进程，内部是多线程的）：默认每个Tab页一个进程，互不影响, 作用有：<br />
                        <span className="text-placeholder" />页面渲染，脚本执行，事件处理<br /><br />

                    <span className="mark">浏览器多进程的优点</span><br />
                    1. 防止单个tab崩溃影响整个浏览器<br />
                    2. 避免第三方插件crash影响整个浏览器<br />
                    3. 多进程能充分利用多核优势<br />
                    4. 方便使用沙盒模型隔离插件等进程，提高浏览器稳定性<br />
                </div>

                <p className="item-title">三、浏览器内核--渲染进程</p>
                <div className="quote">
                    页面的渲染，js的执行，事件的循环都在这个进程中执行。<br />
                    <span className="mark">浏览器的渲染是多线程的。</span><br /><br />
                    主要的线程有：<br />
                    1. GUI渲染线程：<br />
                    <span className="text-placeholder" />负责渲染浏览器界面, 解析HTML，CSS，构建DOM树和RenderObject树，布局和绘制等；<br /><br />
                    <span className="text-placeholder" />当界面需要重绘（repaint）或由于某种操作引发回流时（reflow），该线程就会执行；<br /><br />
                    <span className="text-placeholder" />GUI线程和JS引擎线程是互斥的，当JS线程执行的时候GUI线程会被挂起，GUI更新会被保存在一个队列中等到JS引擎空闲时立即执行。<br /><br />

                    2. JS引擎线程：<br />
                    <span className="text-placeholder" />也称为JS内核，负责处理js脚本程序；<br /><br />
                    <span className="text-placeholder" />JS引擎线程负责解析js脚本，运行代码；<br /><br />
                    <span className="text-placeholder" />JS引擎线程一直等待着任务队列中任务的到来，然后加以处理，一个tab页中无论何时都只有一个JS线程在运行js程序；<br /><br />
                    <span className="text-placeholder" />JS引擎线程和GUI线程是互斥的，如果js执行的时间过长的话，就会造成页面的渲染不连贯，导致页面加载阻塞。<br /><br />


                    3. 事件触发线程：<br />
                    <span className="text-placeholder" />归属于浏览器而不是JS引擎，用来控制时间循环；<br /><br />
                    <span className="text-placeholder" />当JS引擎执行代码块如setTimeout（也可来自浏览器内核的其他线程，如鼠标点击，ajax异步请求）时，会将对应的任务添加到事件线程中；<br /><br />
                    <span className="text-placeholder" />当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理；<br /><br />
                    <span className="text-placeholder" />由于JS是单线程的，所以这些待处理队列中的事件都要排队等待JS引擎的处理（当JS引擎空闲的时候才会去处理）。<br /><br />

                    4. 定时器触发线程：<br />
                    <span className="text-placeholder" />setInterval和setTimeout所在的线程；<br /><br />
                    <span className="text-placeholder" />浏览器中定时器计数不是由JS引擎计数的，因为JS引擎是单线程的，如果处于阻塞情况下那计时就会不准；<br /><br />
                    <span className="text-placeholder" />所以计时器是有单独的线程来处理的，计时完成后，添加到事件队列，等待JS引擎空闲的时候来执行；<br /><br />
                    <span className="text-placeholder" />W3C在HTML标准中规定setTimeout时间间隔最小为4ms。<br /><br />

                    5. 异步http请求线程：<br />
                    <span className="text-placeholder" />在XMLHttpRequest连接后是通过浏览器新开的一个线程请求；<br /><br />
                    <span className="text-placeholder" />在检测到状态改变时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入到事件队列中，等待JS引擎来执行。<br /><br />

                    <img style={{width: '150px'}} alt="" src={NeiHe}/>
                </div>
            </div>
        )
    }
}
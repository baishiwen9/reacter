

import React, { Component } from 'react';
import Code from '../../comp/Code';
import {Table} from 'antd';
import htmlImage from '../../../img/html.jpg';

export default class BrowserLoad extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const columns_prop = [
            {
                title: '状态码',
                dataIndex: 'statusNum',
                key: 'statusNum',
            },
            {
                title: '说明',
                dataIndex: 'desc',
                key: 'desc',
            },
        ];

        const dataSource_prop = [
            {
                key: '1',
                statusNum: '1XX',
                desc: '信息性状态码，表示服务器已接收了客户端请求，客户端可继续发送请求',
            },
            {
                key: '2',
                statusNum: '100',
                desc: 'Continue',
            },{
                key: '3',
                statusNum: '101',
                desc: ' Switching Protocols',
            },{
                key: '4',
                statusNum: '2xx',
                desc: '成功状态码，表示服务器已成功接收到请求并进行处理'
            },{
                key: '5',
                statusNum: '200',
                desc: 'OK 表示客户端请求成功'
            },{
                key: '6',
                statusNum: '204',
                desc: 'No Content 成功，但不返回任何实体的主体部分'
            },{
                key: '7',
                statusNum: '206',
                desc: 'Partial Content 成功执行了一个范围（Range）请求'
            },{
                key: '8',
                statusNum: '3xx',
                desc: '重定向状态码，表示服务器要求客户端重定向。'
            },{
                key: '9',
                statusNum: '301',
                desc: 'Moved Permanently 永久性重定向，响应报文的Location首部应该有该资源的新URL'
            },{
                key: '10',
                statusNum: '302',
                desc: 'Found 临时性重定向，响应报文的Location首部给出的URL用来临时定位资源'
            },{
                key: '11',
                statusNum: '303',
                desc: 'See Other 请求的资源存在着另一个URI，客户端应使用GET方法定向获取请求的资源'
            },{
                key: '12',
                statusNum: '304',
                desc: 'Not Modified 服务器内容没有更新，可以直接读取浏览器缓存'
            },{
                key: '13',
                statusNum: '307',
                desc: 'Temporary Redirect 临时重定向。与302 Found含义一样。302禁止POST变换为GET，但实际使用时并不一定，307则更多浏览器可能会遵循这一标准，但也依赖于浏览器具体实现'
            },{
                key: '14',
                statusNum: '4xx',
                desc: '客户端错误状态码，表示客户端的请求有非法内容。'
            },{
                key: '15',
                statusNum: '400',
                desc: 'Bad Request 表示客户端请求有语法错误，不能被服务器所理解'
            },{
                key: '16',
                statusNum: '401',
                desc: 'Unauthonzed 表示请求未经授权，该状态代码必须与 WWW-Authenticate 报头域一起使用'
            },{
                key: '17',
                statusNum: '403',
                desc: 'Forbidden 表示服务器收到请求，但是拒绝提供服务，通常会在响应正文中给出不提供服务的原因'
            },{
                key: '18',
                statusNum: '404',
                desc: 'Not Found 请求的资源不存在，例如，输入了错误的URL'
            },{
                key: '19',
                statusNum: '5xx',
                desc: '服务器错误状态码，表示服务器未能正常处理客户端的请求而出现意外错误。'
            },{
                key: '20',
                statusNum: '500',
                desc: 'Internel Server Error 表示服务器发生不可预期的错误，导致无法完成客户端的请求'
            },{
                key: '21',
                statusNum: '503',
                desc: 'Service Unavailable 表示服务器当前不能够处理客户端的请求，在一段时间之后，服务器可能会恢复正常'
            }
        ];

        const columns_response_header = [
            {
                title: 'key',
                dataIndex: 'keys',
                key: 'keys',
            },
            {
                title: 'value',
                dataIndex: 'value',
                key: 'value',
            },
        ];

        const dataSource_response_header = [
            {
                key: '1',
                keys: 'Allow',
                value: '服务器支持哪些请求方法，eg： get， post等'
            },{
                key: '2',
                keys: 'Content-Encoding',
                value: '文章的编码方法，只有在解码之后才可以得到Content-type头指定的内容类型。利用gzip压缩文档能够显著的减少HTML文档的下载时间。'
            },{
                key: '3',
                keys: 'Content-length',
                value: '表示内容的长度，只有当浏览器使用持久HTTP连接时才要这个数据。'
            },{
                key: '4',
                keys: 'Content-type',
                value: '表示后面的文档属于什么MIME类型，servlet默认为text/plain，但是通常要显式的指定为text/html.'
            },{
                key: '5',
                keys: 'Date',
                value: '当前的GMT时间'
            },{
                key: '6',
                keys: 'Expires',
                value: '过期时间'
            },{
                key: '7',
                keys: 'Last-Modified',
                value: '文档最后的修改时间，客户端可以通过If-Modified-Since请求头提供一个日期。'
            },{
                key: '8',
                keys: 'Location',
                value: '表示客户端应该去哪里提取文档，该方法同时设置的状态码为302'
            },{
                key: '9',
                keys: 'Refresh',
                value: '表示浏览器应该在多长时间后刷新文档，以秒记。也可以通过设置meta标签实现同样的功能。'
            },{
                key: '10',
                keys: 'Refresh',
                value: '表示浏览器应该在多长时间后刷新文档，以秒记。也可以通过设置meta标签实现同样的功能。'
            },{
                key: '11',
                keys: 'server',
                value: '服务器名字，servlet一般不设置这个值，而是由web服务器自己设置。'
            },{
                key: '12',
                keys: 'Set-cookie',
                value: '设置和页面关联的Cookie'
            },{
                key: '13',
                keys: 'www-Authenticate',
                value: '客户端应该在authenticate头中提供什么类型的授权信息。'
            },
        ]

        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">从地址栏输入url到页面加载完成都发生了什么</span></p>
                <div className="quote">
                    参考链接： https://juejin.im/entry/59c1e43e6fb9a00a53275fcc<br />
                    参考链接： https://juejin.im/post/5cb44c365188257ab74c639c<br />
                    参考链接： https://juejin.im/post/5cb44c365188257ab74c639c<br />
                    参考链接：https://juejin.im/post/6844903503677095949<br />
                    参考链接：https://juejin.im/post/6844904020935606285
                </div>
                <h3>1. 在浏览器地址栏输入url后回车经历的过程</h3>
                <div className="quote">
                    1. 查找ip即域名解析（DNS）<br />
                    2. 客户端根据ip地址和服务器建立连接<br />
                    3. 客户端和服务端进行通信<br />
                    4. 客户端和服务器断开连接<br />
                    5. 浏览器开始解析渲染页面<br />
                </div>
                <h3>2. 名词解释</h3>
                <div className="quote">
                    1. ip地址: 指互联网协议地址。是 IP 协议提供的一种统一的地址格式，它为互联网上的每一个网络和每一台主机分配一个逻辑地址，以此来屏蔽物理地址的差异。 <br />
                    2. 域名： 是由一串用点分隔的名字组成的 Internet上某一台计算机或计算机组的名称，用于在数据传输时标识计算机的电子方位（有时也指地理位置）。由于纯数字的 IP 地址难以被记忆，所以使用有代表意义的字符（域名）来代替纯数字的 IP 地址，但最终仍需要通过域名来查找其对应的 IP 地址才能够找到相应主机的位置。<br />
                    3. DNS: 域名系统，是互联网的一项服务。它作为将域名和 IP 地址相互映射的一个分布式数据库，能够使人更方便地访问互联网。<br />
                    4. URL: 统一资源定位符，也被称为网页地址（网址）。指的是因特网上各种资源的地址。
                </div>
                <h3>3. IP查找</h3>
                <div className="quote">
                    输入url后回车，这是浏览器通过域名进行查找ip地址（也称为DNS解析），具体过程如下：<br />
                    1. 浏览器搜索自己的DNS缓存，查找成功返回ip，失败则进行下一步；<br />
                    2. 搜索系统中的DNS缓存，查找成功返回ip，失败则进行下一步；<br />
                    3. 查找系统中的hosts文件，查找成功返回ip，失败则进行下一步；<br />
                    4. 系统发送一个请求到路由器上，路由器查找缓存，查找成功返回ip，失败则进行下一步；<br />
                    5. 系统将域名发送至本地域名服务器（LDNS），查找成功返回ip，失败则LDNS会向根域名服务器（Root Name Server）发起请求获得域的顶级域名服务器地址，然后依次获得各级域名服务器地址， 最后获取域名对应的ip地址；<br />
                    6. LDNS将域名地址返回给操作系统并缓存起来；<br />
                    7. 系统将ip地址返回给浏览器并缓存起来；<br />
                    8. 浏览器获得ip地址，发起建立连接的请求。
                </div>

                <h3>4. 建立连接--3次握手</h3>
                <div className="quote">
                    浏览器获得ip地址后，就会对目标服务器发起建立TCP连接的请求，建立主要有三个步骤(称为3次握手)：<br />
                    1. 浏览器向服务器发起要建立连接的请求；<br />
                    2. 服务器向浏览器发送同意建立的响应；<br />
                    3. 浏览器向服务器发送收到确认响应的请求，客户端和服务器建立连接。
                </div>
                <h3>5. 开始通信</h3>
                <div className="quote">
                    上一步浏览器和服务器已经建立了连接，这时候便会进行通信，客户端向服务器请求网络资源步骤如下: <br />
                    1. 浏览器向服务器发起一个 HTTP 请求；<br />

                    http请求报文由3部分组成：请求行，请求头，请求正文<br />
                    请求行格式： eg： GET home.html HTTP/1.1<br />
                    常用的方法有: GET, POST, PUT, DELETE, OPTIONS, HEAD。<br />

                    请求报头：常见的请求报头有：Accept, Accept-Charset, Accept-Encoding, Accept-Language, Content-Type, Authorization, Cookie, User-Agent等<br />
                    请求正文：当使用POST, PUT等方法时，通常需要客户端向服务器传递数据，请求的数据格式一般为json。这时就需要设置Content-Type: application/json。<br />
                </div>
                <h3>6. 服务器返回一个 HTTP 响应</h3>
                <div className="quote">
                    HTTP响应报文也是由三部分组成: 状态码, 响应头和响应报文。<br />
                    状态码： eg： HTTP/1.1 200 OK <br />
                    协议版本：是用http1.0还是其他版本<br />
                    状态描述：状态描述给出了关于状态代码的简短的文字描述。比如状态代码为200时的描述为 ok<br /><br />
                    状态代码： <br />

                    <Table 
                        dataSource={dataSource_prop} 
                        columns={columns_prop} 
                        pagination={false} 
                    />

                    <br />响应头：由关键字/值对组成，每行一对，关键字和值用英文冒号":"分隔，典型的响应头有：<br />
                    
                    <Table 
                        dataSource={dataSource_response_header} 
                        columns={columns_response_header} 
                        pagination={false} 
                    />
                </div>
                <h3>7. html解析</h3>
                <div className="quote">
                    webkit的渲染过程为：解析html以构建dom树 ==》 构建render树 ==》 布局render树 ==》 绘制render树<br /><br />
                    <img className="big-img" alt="" src={htmlImage} /><br />
                    浏览器在解析html文件时，会自上而下加载，并在加载过程中进行解析渲染，在解析过程中，如果遇到请求外部资源时，如图片，外链css，请求是异步的，并不会影响html文档进行加载。<br /><br />

                    解析过程中会先解析html文件构建DOM树，然后解析css构建渲染树，等到渲染树构建完成后，浏览器开始布局渲染树并将其渲染在屏幕上，这里会涉及到回流和重绘。<br /><br />

                    DOM节点中的各个元素都是以盒模型形式存在，这些都要浏览器去计算它的大小和位置，这个过程为回流，当盒模型的大小和位置，颜色，字体等属性确定好了浏览器便开始绘制内容，这个过程为重绘。<br /><br />
                    页面在首次加载的时候必然会经历回流和重绘，这两个过程会十分消耗性能，尤其在移动端，所以应该尽量减少回流和重绘。<br /><br />

                    当文档加载过程中遇到js文件的时候，html文档会挂起渲染（js引擎线程和GUI渲染线程互斥），不仅要等js文件加载完成，还要等js文件解析执行完毕，才可以恢复html渲染线程。因为js有可能会修改dom，最为经典的document.write，这意味着，在JS执行完成前，后续所有资源的下载可能是没有必要的，这是js阻塞后续资源下载的根本原因。<br /><br />
                    js的解析是由浏览器的js引擎完成的，js是单线程运行的，也就是说同一时间只能执行一件事，所有的任务都要进行排队，前一个任务结束，后一个任务才能开始。但是又存在某些任务很耗时，所以需要一种机制可以先执行后面的任务，这就是同步任务和异步任务。<br /><br />
                    js的执行机制就可以看做是一个主线程加上一个任务队列，同步任务就是放在主线程来执行，异步任务是放在任务队列中。所有的同步任务在主线程上执行，线程一个执行栈，异步任务有了运行结果就会在任务队列中放置一个事件；脚本运行时先依次运行执行栈，然后会从任务队列里提取事件，运行任务队列中的任务，这个过程是不断重复的，所以又叫事件循环（Event Loop）。
                </div>

                <h3>8. 断开连接---TCP四次挥手</h3>
                <div className="quote">
                    客户端与服务器的相互通信完成后，便会断开连接，断开连接主要有四个步骤，一般称为客户端与服务器端的四次挥手：<br />
                    1. 浏览器向服务器发送向断开连接的请求；<br />
                    2. 服务器向浏览器发送收到请求的响应；<br />
                    3. 服务器向浏览器发送断开连接的请求；<br />
                    4. 浏览器断开连接并向服务器发送一个反馈请求，服务器收到后断开连接。<br /><br />

                    为什么需要4次？<br />
                    主要是因为当客户端向服务器发送断开连接时，服务器的数据不一定处理完毕了，所以服务器是先告诉客户端已经收到了它想断开连接的请求，然后等服务器数据处理完毕时，
                    便通知客户端请求断开连接，客户端收到后便断开连接并通知服务器，服务器收到后才断开连接。

                </div>
            </div>
        )
    }
}
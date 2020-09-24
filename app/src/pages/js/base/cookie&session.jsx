import React, { Component } from 'react';
import Code from './../../comp/Code';
// import './../../comp/common/style.css';


export default class CookieSession extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title">
                    <span className="textShadow">cookie & session</span>
                </p>

                <p className="item-title">1. cookie出现的原因</p>
                <div className="quote">
                    参考文档： https://www.juejin.im/post/6844903858615877639<br />
                    因为http协议是无状态的，服务器不知道用户上一次做了什么，验证阻碍了交互式web应用程序的实现。<br />
                    因此cookie是用来绕开http无状态性的额外手段之一。
                </div>
                <p className="item-title">2. session出现的原因</p>
                <div className="quote">
                    cookie带来了安全问题，它可以被任意的修改和伪造<br />
                </div>

                <p className="item-title">3. cookie和session的使用</p>
                <div className="quote">
                    cookie：<br />
                    1. 服务器通过Response-Header 的 Set-Cookie给客户端一串字符串<br />
                    2. 客户端每次访问相同域名的网页时,带上这串字符串，服务器可以通过这串字符串去读取客户端的信息<br />
                    3. 客户端要在一段时间内保存这个Cookie<br />
                    4. Cookie默认在用户关闭页面后就会失效，但是后台代码可以任意设置Cookie的过期时间<br /><br />

                    Session：<br />
                    1. 将SessionId通过Cookie发给客户端<br />
                    2. 客户端访问服务器时，服务器读取SessionId<br />
                    3. 服务器有一块内存保存了所有的Session<br />
                    4. 通过SessionId可以得到对应用户的隐私信息<br />
                    5. 这块内存就是服务器上的所有session<br /><br />

                    Session与Cookie的联系与区别：<br />
                    1. Session是依赖于Cookie实现的<br />
                    2. Cookie存储在客户端，Session则存储在服务器上
                </div>
            </div>
        )
    }
}
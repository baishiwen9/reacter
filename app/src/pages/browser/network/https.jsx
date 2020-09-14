

import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class Https extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">https握手过程</span></p>
                <div className="quote">
                    1、客户端使用https的url访问web服务器,要求与服务器建立ssl连接<br />
                    2、web服务器收到客户端请求后, 会将网站的证书(包含公钥)传送一份给客户端<br />
                    3、客户端收到网站证书后会检查证书的颁发机构以及过期时间, 如果没有问题就随机产生一个秘钥<br />
                    4、客户端利用公钥将会话秘钥加密, 并传送给服务端, 服务端利用自己的私钥解密出会话秘钥<br />
                    5、之后服务器与客户端使用秘钥加密传输<br />
                </div>
            </div>
        )
    }
}
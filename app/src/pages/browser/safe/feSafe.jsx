

import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class FeSafe extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">前端安全</span></p>
                <div className="quote">
                   前端安全主要分为两类：<br />
                   1. CSRF攻击<br />
                   2. XSS攻击
                </div>

                <p className="item-title">1. CSRF攻击</p>
                <div className="quote">
                    CSRF攻击的防范方法：<br />
                    1、验证码<br />
                    2、Referer Check<br />
                    3、添加token验证
                </div>

                <p className="item-title">2. XSS攻击</p>
                <div className="quote">
                    XSS攻击的防范方法：<br />
                    1、HttpOnly 防止劫取 Cookie<br />
                    2、输入检查-不要相信用户的所有输入<br />
                    3、输出检查-存的时候转义或者编码
                </div>
            </div>
        )
    }
}
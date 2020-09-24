import React, { Component } from 'react';
import Code from './../../comp/Code';
// import './../../comp/common/style.css';


export default class JsBridge extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title">
                    <span className="textShadow">JsBridge原理</span>
                </p>

                <p className="item-title">ajax请求过程</p>
                <div className="quote">
                    参考文档： https://blog.csdn.net/yuzhengfei7/article/details/93468914
                </div>
                <p className="item-title">ajax使用</p>
                <Code code={`
var xhr;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
}
// get请求：
xhr.open("get", url, async);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        var text = xhr.reponseText;
        var xml = xhr.responseXML;
    }
}
xhr.send();

// post请求：
xhr.open("post", url, true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.state == 200) {
        var text = xhr.reponseText;
        var xml = xhr.responseXML;
    }
}
xhr.send('id=1')`} />

                <p className="item-title">readyState状态码</p>
                <div className="quote">
                    0: XMLHttpRequest对象创建完成，但没有调用open方法；<br />
                    1: 初始化，XMLHttpRequest没有调用send方法；<br />
                    2: XMLHttpRequest开始发送数据给服务器；<br />
                    3: 正在获取服务器返回的数据；<br />
                    4: 获取数据完毕，可以通过XMLHttpRequest获得服务器返回的所有数据。
                </div>

                <p className="item-title">使用Promise封装ajax</p>
                <div className="quote">
                    返回一个新的Promise实例<br />
                    创建HMLHttpRequest异步对象<br />
                    调用open方法，打开url，与服务器建立链接（发送前的一些处理）<br />
                    监听Ajax状态信息<br />
                    如果xhr.readyState == 4（表示服务器响应完成，可以获取使用服务器的响应了）<br />
                    xhr.status == 200，返回resolve状态<br />
                    xhr.status == 404，返回reject状态<br />
                    xhr.readyState !== 4，把请求主体的信息基于send发送给服务器
                </div>
                <Code code={`
function ajax(url, method) {
    return new Promise((resolve, reject) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new window.XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Mircosoft.XMLHTTP');
        }
        xhr.open(url, method, true);
        xhr.onreadystatechange = function() {
            if (xhr.readystate == 4) {
                if (xhr.state == 200) {
                    resolve(xhr.responseText);
                } else if (xhr.state == 404){
                    reject(new Error('404'));
                }
            } else {
                reject('xxxx');
            }
        }
        xhr.send();
    })
}`} />
            </div>
        )
    }
}
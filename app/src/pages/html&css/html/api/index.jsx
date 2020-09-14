import React, { Component } from 'react';
import Code from '../../../comp/Code';

export default class Api extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">h5中新增的api</span></p>
                <div className="article-desc">
                    <h3>1. localStorage & seessionStorage</h3>
                    <div className="quote">
                        window.localStorage.getItem(key);<br />
                        window.localStorage.setItem(key, value);<br />
                        window.localStorage.removeItem(key);<br />
                        window.localStorage.clear();<br /><br />

                        window.sessionStorage.getItem(key);<br />
                        window.sessionStorage.setItem(key, value);<br />
                        window.sessionStorage.removeItem(key);<br />
                        window.sessionStorage.clear();
                    </div>
                    <Code code={`
const storage = {
    localStorage: {
        set(key, value) {
           window.localStorage.setItem(key, value); 
        },
        get(key) {
            window.localStorage.getItem(key);
        },
        clear() {
            window.localStorage.clear();
        },
        remove(key) {
            window.localStorage.removeItem(key);
        }    
    },
    sessionStorage: {
        set(key, value) {
            window.sessionStorage.setItem(key, value);
        },
        get(key) {
            window.sessionStorage.getItem(key);
        },
        clear() {
            window.sessionStorage.clear();
        },
        remove(key) {
            window.sessionStorage.removeItem(key);
        }
    }, 
}`} />
                    <h3>2. geolocation</h3>
                    <div className="quote">
                        1. getCurrentPosition() : 调用该方法就会触发请求用户共享地理位置信息的对话框。此方法接受三个参数：成功的回调函数，可选的失败的回调函数，可选的选项对象。<br /><br />
                        2. 跟踪用户位置使用watchPosition()方法，此方法的参数和getCurrentPosition的参数一模一样。调用watchPosition方法后会返回一个数值标识符，用户跟踪监控的操作，基于这个标识符可以通过clearWatch方法取消跟踪操作。
                    </div>
                    <Code code={`
navigator.geolocation.getCurrentPosition(function(position) {
    const 
        {
            coords: 
                {
                    latitude, //(十进制维度)
                    longitude, //（十进制经度）
                    accuracy,  //（经纬度坐标的经度，单位米）
                    altitude,   //（海拔高度，单位米）
                    altitudeAccuracy, //（海拔高度的经度，单位米）
                    heading, //（指南针的方向，0度表示正北）
                    speed, //（速度，每秒移动多少米）
                },
            timestamp,
        } = position;
    console.log(latitude, longitude);
}, function(err) {
    const {code, message} = err;
    console.log(code, message);
}, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 25000
});

const watchId = navigator.geolocation.watchPosition(function(position) {
    const {latitude, longitude} = position.coords;
    console.log(latitude, longitude);
}, function(err) {
    const {code, message} = err;
    console.log(code, message);
}, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 25000
});

clearWatch(watchId);

`} />
                </div>
            </div>
        )
    }
}
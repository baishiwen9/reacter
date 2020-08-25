

import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class Light extends Component {
    constructor(props) {
        super(props);

        function red(time) {
            console.log('%c红灯亮 ' + time + 's', 'padding: 6px; background: red; font-size: 10px; color: white;border-radius: 4px;');
        }
        
        function yellow(time) {
            console.log('%c黄灯亮 ' + time + 's', 'padding: 6px; background: yellow; font-size: 10px; color: red;border-radius: 4px;');
        }
        
        function green(time) {
            console.log('%c绿灯亮 ' + time + 's', 'padding: 6px; background: green; font-size: 10px; color: white;border-radius: 4px;');
        }
        
        function executor(cb, count) {
            let time = 0;
            return new Promise(resolve => {
                let timeid = setInterval(() => {
                    cb(count - time);
                    time++;
                    if (time === count) {
                        clearInterval(timeid);
                        resolve();
                    }
                }, 1000);
            });
        }
        
        function step() {
            Promise.resolve().then(() => {
                return executor(red, 6);
            }).then(() => {
                return executor(yellow, 3);
            }).then(() => {
                return executor(green, 15);
            }).then(() => {
                step();
            });
        }

        async function step() {
            await executor(red, 6); 
            await executor(yellow, 3); 
            await executor(green, 15);
            step();
        }
        
        step();
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">实现红绿灯🚥</span></p>
                <div className="article-desc">
					实现红绿灯交替亮灯变化<br />
					
                    实现技术： Promise，setInterval<br />
                    <Code code={`
function red(time) {
    console.log('%c红灯亮 ' + time + 's', 'padding: 6px; background: red; font-size: 10px; color: white;border-radius: 4px;');
}

function yellow(time) {
    console.log('%c黄灯亮 ' + time + 's', 'padding: 6px; background: yellow; font-size: 10px; color: red;border-radius: 4px;');
}

function green(time) {
    console.log('%c绿灯亮 ' + time + 's', 'padding: 6px; background: green; font-size: 10px; color: white;border-radius: 4px;');
}

function executor(cb, count) {
    let time = 0;
    return new Promise(resolve => {
        let timeid = setInterval(() => {
            cb(count - time);
            time++;
            if (time === count) {
                clearInterval(timeid);
                resolve();
            }
        }, 1000);
    });
}

function step() {
    Promise.resolve().then(() => {
        return executor(red, 3);
    }).then(() => {
        return executor(yellow, 1);
    }).then(() => {
        return executor(green, 10);
    }).then(() => {
        step();
    });
}
// 或者
// async function step() {
//     await executor(red, 6); 
//     await executor(yellow, 3); 
//     await executor(green, 15);
//     step();
// }

step();
`} />
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class Myfetch extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">实现一个带并发数限制的fetch请求函数</span></p>
                <div className="article-desc">
                    <Code code={`
function myFetch(urls, max, callback) {
    let pending_count = 0;
    const allUrls = [...ulrs];
    
    async function _fetch(url) {
        if (!url) {
            return;
        }
        pending_count++;
        await fetch(url);
        pending_count--;
        _fetch(allUrls.shift());
        if (!pending_count) {
            callback && callback();
        }
    }
    while(pending_count < max) {
        _fetch(allUrls.shift());
    }
}`} />
                </div>
            </div>
        )
    }
}
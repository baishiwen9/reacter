import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MySelf extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">自己实现各种方法</span></p>
                <div className="article-desc">
                    1. 实现console.log方法：<br />
                    <Code code={`
function log() {
    console.log(console, arguments);
}`} />              
                </div>
            </div>
        )
    }
}
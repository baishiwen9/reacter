import React, { Component } from 'react';
import Code from './../../../comp/Code';
import './layout.scss';

export default class SanjiaoPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">实现三角形</span>
                </p>
                <div className="article-desc">
                    <div className="sanjiao-wrap">
                        <div className="sanjiao-1 sanjiao-item"></div>
                        <div className="sanjiao-2 sanjiao-item"></div>
                        <div className="sanjiao-3 sanjiao-item"></div>
                        <div className="sanjiao-4 sanjiao-item"></div>
                    </div>
                    <Code code={`
//html
<div className="sanjiao-1 sanjiao-item"></div>
//css
.sanjiao-item{
    width: 0;
    height: 0;
    border-top: 40px solid red;
    
    &.sanjiao-1{
        border-left: 0px solid transparent;
        border-right: 40px solid transparent;
        border-bottom: 40px solid transparent;
    }
    &.sanjiao-2{
        border-left: 40px solid transparent;
        border-right: 0px solid transparent;
        border-bottom: 40px solid transparent;
    }
    &.sanjiao-3{
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        border-bottom: 0px solid transparent;
    }
    &.sanjiao-4{
        border-top: 0px solid transparent;
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        border-bottom: 40px solid red;
    }
}
`} />
                </div>
            </div>
            
        )
    }
}
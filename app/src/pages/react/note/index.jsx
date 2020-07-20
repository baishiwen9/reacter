// https://kutlugsahin.github.io/smooth-dnd-demo/


import React, { Component } from 'react';
import Code from './../../comp/Code';
// import './index.scss';
import { Button } from 'antd';

export default class Note extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">一些好用的react代码库</span>
                </p>
                <p className="item-title">
                    <span className="textShadow">一、可拖拽组件：react-smooth-dnd</span>
                </p>
                <div className="article-desc">
                    github: https://github.com/kutlugsahin/react-smooth-dnd<br />
                    demo: https://kutlugsahin.github.io/smooth-dnd-demo/
                </div>

                <p className="item-title">
                    <span className="textShadow">一、SVG组件：vivus</span>
                </p>
                <div className="article-desc">
                    github: https://github.com/maxwellito/vivus<br />
                    demo: http://maxwellito.github.io/vivus/
                </div>
            </div>
        )
    }
}
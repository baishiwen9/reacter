import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class Note extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">笔记</span></p>
                <div className="article-desc">
                    AST查看器： https://astexplorer.net/
                </div>
            </div>
        )
    }
}
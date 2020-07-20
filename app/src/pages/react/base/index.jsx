import React, { Component } from 'react';
import Code from './../../comp/Code';

export default class Base extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Code 
                    code={`
function aaa() {
    console.log('hello world!!!');
}
                    `}
                />
            </div>
        )
    }
}
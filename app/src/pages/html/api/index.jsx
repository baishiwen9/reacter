import React, { Component } from 'react';
import Code from './../../comp/Code';

export default class H5APIPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                h5新增api----是的发生
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
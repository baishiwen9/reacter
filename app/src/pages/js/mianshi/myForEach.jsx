import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MyMap extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">实现forEach</span></p>
                <div className="article-desc">
                    forEach没有返回值<br />
                    <Code code={`
Array.prototype.myForEach = function(fn, context) {
	var arr = this;
	context = context || window;
	for (var i = 0; i < arr.length; i++) {
		fn.call(context, arr[i], i, arr);
	}
}`} />
                </div>
            </div>
        )
    }
}
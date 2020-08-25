import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MyMap extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">实现Map</span></p>
                <div className="article-desc">
                    <Code code={`
Array.prototype.myMap = function(fn, context) {
	var arr = this;
	context = context || window;
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		result.push(fn.call(context, arr[i], i, arr));
	}
	return result;
}`} />

                用reduce实现map: <br />
                <Code code={`
Array.prototype.myMap = function(fn, context) {
	return this.reduce((prev, item, index, arr) => {
        prev.push(fn.call(context, item, index, arr));
        return prev;
    }, []);
}`} />
                </div>
            </div>
        )
    }
}
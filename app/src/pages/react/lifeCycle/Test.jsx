import React, { Component } from 'react';

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '我是子组件'
        }
        console.log('%c我是子组件---constructor---', 'background: red; color: white;');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('%c我是子组件---getDerivedStateFromProps---', 'background: red; color: white;', props, state);
        return null;
    }
    componentDidMount() {
        console.log('%c我是子组件---componentDidMount---', 'background: red; color: white;');
    }
    componentDidUpdate() {
        console.log('%c我是子组件---componentDidUpdate---', 'background: red; color: white;');
    }
    shouldComponentUpdate() {
        console.log('%c我是子组件---shouldComponentUpdate---', 'background: red; color: white;');
        return true;
    }
    getSnapshotBeforeUpdate() {
        console.log('%c我是子组件---getSnapshotBeforeUpdate---', 'background: red; color: white;');
        return null;
    }
    render() {
        console.log('%c我是子组件---render---', 'background: red; color: white;');
        return (
            <div>我是子组件---{this.props.value}</div>
        )
    }
}
import React, { Component } from 'react';
import Code from './../../../comp/Code';
import './common.scss';

export default class Col2Page extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">两列自适应布局</span>
                </p>
                <p className="item-title">
                    <span className="textShadow">常见的两列布局方案</span>
                </p>
                <div className="article-desc">
                    1. flex布局<br />
                    2. float布局<br />
                    3. position: absolute布局<br />
                    4. table布局<br />
                    5. grid布局<br />
                </div>
                <p className="item-title">
                    <span className="textShadow">一、flex布局</span>
                </p>
                <div className="article-desc">
                    <div className="layout-flex">
                        <div className="left">左，定宽100px</div>
                        <div className="right">右，自适应</div>
                    </div>
                    <br />
                    <Code code={`
//html
<div className="layout-flex">
    <div className="left">左，定宽100px</div>
    <div className="right">右，自适应</div>
</div>

//css
.layout-flex{
    display: flex;
    height: 100px;
    .left{
        width: 100px;
        border: 1px solid red;
    }
    .right{
        flex: 1;
        border: 1px solid green;
    }
}
`} />

                <span className="mark">flex布局的优缺点：</span><br/>
                1. 优点：简单易上手，代码少<br/>
                2. 缺点：兼容性较差，只能兼容到ie9及以上<br />
                </div>


                <p className="item-title">
                    <span className="textShadow">二、float布局</span>
                </p>
                <div className="article-desc">
                    <div className="layout-float">
                        <div className="left">左，定宽100px</div>
                        <div className="right">右，自适应</div>
                    </div>
                    <br />
                    <Code code={`
//html
<div className="layout-float">
    <div className="left">左，定宽100px</div>
    <div className="right">右，自适应</div>
</div>

//css
.layout-float{
    width: 100%;
    .left{
        float: left;
        width: 100px;
        border: 1px solid red;
    }
    .right{
        margin-left: 100px;
        border: 1px solid green;
    }
}
`} />
                <span className="mark">float布局的优缺点：</span><br/>
                1. 优点：简单易上手，代码少,兼容性好<br/>
                2. 缺点：会造成父元素高度塌陷（要对父元素进行清浮动处理）, 脱离文档流<br />
                </div>


                <p className="item-title">
                    <span className="textShadow">三、position: absolute布局</span>
                </p>
                <div className="article-desc">
                    <div className="layout-position">
                        <div className="left">左，定宽100px</div>
                        <div className="right">右，自适应</div>
                    </div>
                    <br />
                    <Code code={`
//html
<div className="layout-position">
    <div className="left">左，定宽100px</div>
    <div className="right">右，自适应</div>
</div>

//css
.layout-position{
    width: 100%;
    height: 100px;
    position: relative;
    .left{
        width: 100px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .right{
        margin-left: 100px;
        height: 100%;
    }
}
`} />
                <span className="mark">position: absolute布局的优缺点：</span><br/>
                1. 优点：简单易上手，代码少,兼容性好<br/>
                2. 缺点：会造成父元素高度塌陷（要对父元素进行清浮动处理）, 脱离文档流<br />
                </div>



                <p className="item-title">
                    <span className="textShadow">四、table布局</span>
                </p>
                <div className="article-desc">
                    <div className="layout-table">
                        <div className="table-row">
                            <div className="left">左，定宽100px</div>
                            <div className="right">右，自适应</div>
                        </div>
                    </div>
                    <br />

                    <Code code={`
//html
<div className="layout-table">
    <div className="table-row">
        <div className="left">左，定宽100px</div>
        <div className="right">右，自适应</div>
    </div>
</div>

//css
.layout-table{
    width: 100%;
    height: 100px;
    display: table;
    .table-row{
        display: table-row;
    }
    .left{
        width: 100px;
        height: 100%;
        display: table-cell;
    }
    .right{
        display: table-cell;
    }
}
`} />
                <span className="mark">position: absolute布局的优缺点：</span><br/>
                1. 优点：简单易上手，代码少,兼容性好<br/>
                2. 缺点：<br />
                </div>

                <p className="item-title">
                    <span className="textShadow">五、grid布局</span>
                </p>
                <div className="article-desc">
                    <div className="layout-gird">
                        <div className="left">左，定宽100px</div>
                        <div className="right">右，自适应</div>
                    </div>
                    <br />
                    <Code code={`
//html
<div className="layout-gird">
    <div className="left">左，定宽100px</div>
    <div className="right">右，自适应</div>
</div>

//css
.layout-gird{
    display: grid;
    grid-template-columns: 100px auto;
    grid-template-rows: 100px;
}
`} />
                <span className="mark">position: absolute布局的优缺点：</span><br/>
                1. 优点：简单易上手，代码少<br/>
                2. 缺点：有兼容性问题<br />
                </div>
            </div>
        )
    }
}
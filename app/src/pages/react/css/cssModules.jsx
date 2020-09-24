import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class CssModules extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className='article-title'><span className="textShadow">CSS Modules</span></p>
                <div className="quote">
                    css模块化的解决方案主要有两类：<br />
                    1. inline style: 这种方案彻底放弃css，使用js或者json来写样式，能给css提供js同样强大的模块化能力。但是缺点也很明显，inline style几乎不能利用css本身的特性，如级联，媒体查询等。<br />
                    2. CSS Modeules: 依然使用css，但使用js来管理样式依赖。css modules能最大化结合现有css生态和js模块化能力。
                </div>
                <h3>1. CSS模块化遇到的问题</h3>
                <div className="quote">
                    css模块化重要的是解决了：css样式的导入和导出。<br />
                    1. 全局污染：css使用全局选择器机制来设置样式，优点是方便重写，缺点是所有的样式都是全局生效，样式可能被错误覆盖。<br />
                    2. 命名混乱：由于全局污染的问题，为了避免样式冲突，选择器越来越负责，容易形成不同的命名风格，很难统一，样式变多后，命名将更加混乱。<br />
                    3. 依赖管理不彻底：组件应该相互独立，引入一个组件时，应该只引入它所需的css样式。<br />
                    4. 无法共享变量：复杂组件要使用js和css来共同处理样式，就会造成有些变量在js和css中冗余，而预编译语言不能提供跨js和css共享的这种能力。<br />
                    5. 代码压缩不彻底：由于移动端网络的不确定性，现代工程项目对css的压缩要求已经到了变态的程度，很多压缩工具魏莉节省一个字节，会把16px转成1pc。
                </div>

                <h3>2. CSS Modules模块化方案</h3>
                <div className="quote">
                    css modules内部通过icss来解决样式的导入和导出两个问题，分别对应的:import和:export两个新增的伪类。
                    <Code code={`
:import("path/to/dep.css") {
    localAlias: keyFromDep;
    /* ... */
}

:export{
    exportedKey: exportedValue;
}`} />
                    1. 启用css Modules<br />
                    <Code code={`
// webpack.config.js
css?modules&localIdentName=[name]__[local]-[hash:base64:5]`} />
                    加上上述代码modules即为启用，其中localIdentName是设置生成样式的命名规则。<br />
                    css modules对css中的class名都做了处理，使用对象来保存原class和混淆后class的对应关系。通过这些简单的处理，css modules实现了以下几点：<br />
                    a. 所有样式都是局部化的，解决了命名冲突和全局污染问题<br />
                    b. class名的生成规则配置灵活，可以以此来压缩class名<br />
                    c. 只需引用组件的js，就能搞定组件所有的js和css<br />
                    d. 依然是css，学习成本几乎为0<br /><br />

                    2. 样式默认局部<br />
                    使用了css modules后，就相当于给每个class名外加了:local， 以此来实现样式的局部化。<br />
                    <Code code={`
.normal{ color: green; }
// 等价于
:local(.normal) { color: green; }
//定义全局样式
:global(.btn) {color: red;}
//定义多个全局样式
:global{
    .link { color: green; }
    .box { color: yellow; }
} 
`} />
                    3. 使用composes来组合样式<br />
                    对于样式复用，css modules提供了唯一的方式来处理---composes组合。<br />
                    <Code code={`
// components/button.css
.base{ /* 所有通用的样式 */}
.normal{
    composes: base;
    // 其他样式
}
.disabled{
    composes: base;
    // 其他样式
}
// 使用
import styles from './button.css';
buttonEle.outerHTML = '<button class={styles.normal}>submit</button>';
`} />
                    composes组合外部文件中的样式：<br />
                    <Code code={`
// settings.css
.primary{ color: red; }
// components/button.css
.base{ /* 所有通用的样式 */}
.primary{
    composes: base;
    composes: $primary from './settings.css';
    // 其他样式
}`} />
                对于大多数项目来说，有了composes后，已经不再需要预编译处理器了，但是如果想用的话， 由于composes不是标准的css语法，编译会报错，此时就只能使用预处理器自己的语法来做样式复用了。<br /><br />

                4. class 命名技巧<br />
                css modules的命名规范是从BFM（block name - element name - modifier name）扩展而来。具体如下：<br />
                a. Block: 对应模块名，如dialog<br />
                b. Element: 对应模块中的节点名，如confirm button<br />
                c. Modifier: 对应节点相关的状态，如disabled，highlight <br /><br />

                5. 实现css与js变量共享<br />
                使用:export关键字可以将css中的变量输出到js中：<br />
                <Code code={`
// config.scss
$primary-color: red;
:export {
    primaryColor: $primary-color;
}

// app.js
import style from 'config.scss';
console.log(style.primaryColor);`} />
                </div>
                <h3>3. CSS Modules使用技巧</h3>
                <div className="quote">
                    css modules是对现有的css做减法。可遵循如下原则：<br />
                    a. 不使用选择器，只是用class名来定义样式；<br />
                    b. 不层叠多个class，只使用一个class把所有样式定义好；<br />
                    c. 所有样式通过composes组合来实现复用；<br />
                    d. 不嵌套。
                </div>
            </div>
        )
    }
}
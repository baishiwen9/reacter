import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class WebpackMode extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">mode</span></p>
                <p className="item-title"><span className="textShadow">一、用法</span></p>
                <div className="article-desc">
                    提供 mode 配置选项，告知 webpack 使用相应模式的内置优化。<br /><br />
                    <Code code={`
// webpack.config.js
module.exports = {
    mode: 'production'
}`} />       
                或者从 CLI 参数中传递： webpack --mode=production<br /><br />

                mode的可选值： <br />
                <span className="text-placeholder" />1. development: 会将 process.env.NODE_ENV 的值设为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。<br /><br />
                <span className="text-placeholder" />2. production: 会将 process.env.NODE_ENV 的值设为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin.

                </div>
            </div>
        )
    }
}
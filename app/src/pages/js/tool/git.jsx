//浅拷贝 & 深拷贝

import React, { Component } from 'react';
import Code from './../../comp/Code';


export default class Git extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title">
                    <span className="textShadow">git</span>
                </p>
                <div className="quote">
                    git学习手册：<a href="https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%85%B3%E4%BA%8E%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6">git</a><br/>
                </div>
                <h3> 1. 常用命令</h3>
                <div className="quote"></div>

                <h3> 2. 常见问题</h3>
                <div className="quote">
                    rebase 和 merge的区别？ <a href="https://www.cnblogs.com/xueweihan/p/5743327.html" target="_blank">参考</a><br /><br />
                    merge和rebase都是用来合并分支的.<br />
                    git log的区别： merge命令不会保留merge的分支的commit.<br />
                    处理冲突： 使用merge合并分支，解决完冲突，执行git add和git commit，会产生一个commitid。使用rebase合并分支，解决完冲突，执行git add和git rebase --continue 不会产生commitid。<br />
                    git pull: git pull做了两个操作分别是“获取”和“合并”， 默认是merge， git pull --rebase就是以rebase的方式合并。<br />
                </div>
                <div className="quote">
                    如何解决冲突？
                </div>
                
            </div>
        )
    }
}
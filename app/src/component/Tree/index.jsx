import React from 'react';
import './index.scss';


const treeList = [
    {
        pid: null,
        id: 'caneat',
        title: '能不能吃',
        icon: '',
        children: [
            {
                pid: 'caneat',
                id: 'caneat-home',
                title: '能不能吃-首页',
                url: '',
            },
            {
                pid: 'caneat',
                id: 'caneat-detail',
                title: '能不能吃-详情页',
                url: '',
            },
        ]
    },
    {
        pid: null,
        id: 'canido',
        title: '能不能做',
        icon: '',
        children: [
            {
                pid: 'canido',
                id: 'canido-home',
                title: '能不能做-首页',
                url: '',
            },
            {
                pid: 'canido',
                id: 'canido-detail',
                title: '能不能做-详情页',
                url: '',
            },
        ]
    },
]

export default class Tree extends React.Component {
    render() {
        return (
            <ul className="tree-component">
                {
                    treeList.map(item => {
                        return (
                            <li key={item.id} className="tree-list-li">
                                <div className="tree-list-parent">
                                    <img className="tree-list-icon" alt="" src={item.icon} />
                                    <div className="tree-list-title">{item.title}</div>
                                    {
                                        !item.pid && <span className="iconfont dropDown-icon" >+</span>
                                    }
                                </div>
                                <ul className="tree-list-child">
                                    {
                                        item.children && item.children.map(list => {
                                            return (
                                                <li key={list.id} className="tree-list-li-child">
                                                    <div className="tree-list-title">{list.title}</div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
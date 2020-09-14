import React from 'react';
import { Drawer, Tabs } from 'antd';
import './index.scss';

const { TabPane } = Tabs;

const TabsData = [
    {
        type: 'css',
        text: 'css',
        notes: [
            {
                id: 'css-gradient',
                text: 'css生成渐变背景工具',
                link: 'https://www.colorzilla.com/gradient-editor/',
            },
            {
                id: 'css-process',
                text: 'css实现进度条',
                link: 'https://juejin.im/post/6844903758074216462',
            },
            {
                id: 'css-layout',
                text: 'css各种布局',
                link: 'https://chokcoco.github.io/CSS-Inspiration/#/./layout/flex-waterfalls-flow',
            },
        ]
    },
    {
        type: 'js',
        text: 'js',
        notes: [
            {
                id: 'js-promise',
                text: '45道promise面试题',
                link: 'https://mp.weixin.qq.com/s?__biz=MzU5NDM5MDg1Mw==&mid=2247484225&idx=1&sn=b1d26191a41b9a3961f6798d1218fd79&chksm=fe00b96bc977307d2eab27dbd25bf6d27194d7fcdd9d9515822639b0206ad6ca1f946a0de7a9&token=1408690735&lang=zh_CN#rd',
            },
            {
                id: 'js-ast',
                text: 'AST查看器',
                link: 'https://astexplorer.net/',
            },
            {
                id: 'js-promise-self',
                text: '自己实现promise',
                link: 'https://juejin.im/post/6856213486633304078',
            },
            {
                id: 'js-this',
                text: 'this试题',
                link: 'https://mp.weixin.qq.com/s/1iw1MBfitockO5U0ZJIeXQ',
            },
            {
                id: 'js-js30', 
                text: 'javascript30',
                link: 'https://github.com/wesbos/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/index-FINISHED.html',
            },
            {
                id: 'js-vdom', 
                text: '虚拟DOM性能',
                link: 'https://www.zhihu.com/question/31809713/answer/53544875',
            },
            {
                id: 'js-browser', 
                text: '浏览器进程&线程',
                link: 'https://segmentfault.com/a/1190000012925872',
            },
            {
                id: 'js-custom',
                text: '自己实现js方法',
                link: 'https://juejin.im/post/6870319532955828231',
            },
            {
                id: 'js-babel',
                text: 'babel在线转换',
                link: 'https://www.babeljs.cn/repl'
            }
        ]
    },
    {
        type: 'react',
        text: 'react',
        notes: []
    }
];

export default function DrawerComp(props) {
    const { onClose, visible } = props;
    return (
        <Drawer 
            title="笔记 & 记录"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
            width='50%'
        >
            <Tabs defaultActiveKey="1" tabPosition='left' style={{ height: 220 }}>
                {TabsData.map(item => (
                    <TabPane tab={`${item.text}`} key={item.type}>
                        {
                            item.notes.map((one, index) => <p key={one.id}>{index + 1}.  {one.text}<a href={one.link} target="_blank"> =={'>'} 链接</a></p>)
                        }
                    </TabPane>
                ))}
            </Tabs>
        </Drawer>
    )
} 
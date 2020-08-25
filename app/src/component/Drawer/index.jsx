import React from 'react';
import { Drawer, Tabs } from 'antd';
import './index.scss';

const { TabPane } = Tabs;

const TabsData = [
    // {
    //     type: 'html',
    //     text: 'html',
    // },
    {
        type: 'css',
        text: 'css',
        render: () => {
            return (
                <div className="css-note">
                    <p>css生成渐变背景工具：<a href="https://www.colorzilla.com/gradient-editor/" target="_blank">https://www.colorzilla.com/gradient-editor/</a></p>
                    <p>css实现进度条：<a href="https://juejin.im/post/6844903758074216462" target="_blank">https://juejin.im/post/6844903758074216462</a></p>
                    <p>css各种布局：<a href="https://chokcoco.github.io/CSS-Inspiration/#/./layout/flex-waterfalls-flow" target="_blank">https://chokcoco.github.io/CSS-Inspiration/#/./layout/flex-waterfalls-flow</a></p>
                    
                </div>
            );
        },
    },{
        type: 'js',
        text: 'js',
        render: () => {
            return (
                <div className="js-note">
                    <p>45道promise面试题：<a href="https://mp.weixin.qq.com/s?__biz=MzU5NDM5MDg1Mw==&mid=2247484225&idx=1&sn=b1d26191a41b9a3961f6798d1218fd79&chksm=fe00b96bc977307d2eab27dbd25bf6d27194d7fcdd9d9515822639b0206ad6ca1f946a0de7a9&token=1408690735&lang=zh_CN#rd" target="_blank">promise面试题</a></p>
                </div>
            )
        }
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
                            item.render && item.render()
                        }
                    </TabPane>
                ))}
            </Tabs>
        </Drawer>
    )
} 
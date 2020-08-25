import React from 'react';
import LeftSider from './../comp/LeftSider';



import BrowserLoad from './base/browserload';
import BrowserCache from './base/cache';
import BrowserNote from './base/browser';


import HTTPNote from './network/http';
import HTTPsNote from './network/https';
import TcpNote from './network/tcp';



// 侧边栏
const SliderMenuList = [
    {
        label: '浏览器基础',
        prop: 'browser-base',
        children: [
            {
              label: '在地址栏输入url到页面加载的过程',
              prop: 'browser-load',
              comp: function() {
                  return <BrowserLoad />;
              },
            },{
                label: '浏览器缓存',
                prop: 'browser-cache',
                comp: function() {
                    return <BrowserCache />;
                },
            },{
                label: '浏览器进程、渲染、运行机制',
                prop: 'browser-render',
                comp: function() {
                    return <BrowserNote />;
                },
            },
        ]
    },{
        label: '网络相关知识',
        prop: 'network-base',
        children: [
            {
              label: 'http',
              prop: 'network-http',
              comp: function() {
                  return <HTTPNote />;
              },
            },{
                label: 'https',
                prop: 'network-https',
                comp: function() {
                    return <HTTPsNote />;
                },
            },
            {
                label: 'tcp',
                prop: 'network-tcp',
                comp: function() {
                    return <TcpNote />;
                },
            },
            
        ]
    },

];


export default function BrowserIndex () {
    return (
        <LeftSider SliderMenuList={SliderMenuList} />
    )
}

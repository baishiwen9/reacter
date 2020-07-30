import React from 'react';
import LeftSider from './../comp/LeftSider';



import BrowserLoad from './base/browserload';
import BrowserCache from './base/cache';



// 侧边栏
const SliderMenuList = [
    {
        label: '浏览器基础',
        prop: 'js-base',
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
              },
        ]
    },

];


export default function BrowserIndex () {
    return (
        <LeftSider SliderMenuList={SliderMenuList} />
    )
}

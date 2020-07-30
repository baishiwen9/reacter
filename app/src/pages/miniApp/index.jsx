import React from 'react';
import LeftSider from './../comp/LeftSider';
import WXNavbar from './wx/navbar';
import TaroBug from './taro/bug';

// 侧边栏
const SliderMenuList = [
    {
        label: '微信小程序',
        prop: 'wx-miniApp',
        children: [
            {
              label: '自定义导航栏',
              prop: 'wx-navbar',
              comp: function() {
                  return <WXNavbar />;
              },
            },
        ]
    },
    {
        label: 'taro小程序',
        prop: 'taro-miniApp',
        children: [
            {
              label: 'taro开发过程中的坑',
              prop: 'taro-bug',
              comp: function() {
                  return <TaroBug />;
              },
            },
        ]
    },
];


export default function JsIndex () {
    return (
        <LeftSider SliderMenuList={SliderMenuList} />
    )
}

import React from 'react';
import LeftSider from './../comp/LeftSider';


import HtmlWebpackPlugin from './plugin/html-webpack-plugin';


// 侧边栏
const SliderMenuList = [
    {
        label: '插件',
        prop: 'plugin',
        children: [
            {
              label: 'html-webpack-plugin',
              prop: 'html-webpack-plugin',
              comp: function() {
                return <HtmlWebpackPlugin />;
              },
            },
        ]
    },
];

export default function WebpackIndex () {
    return (
        <LeftSider SliderMenuList={SliderMenuList} />
    )
}

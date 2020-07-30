import React from 'react';
import LeftSider from './../comp/LeftSider';


import HtmlWebpackPlugin from './plugin/html-webpack-plugin';
import Concept from './base/concept';
import WebpackEntry from './base/entry';
import WebpackOutput from './base/output';
import WebpackMode from './base/mode';
import WebpackLoader from './base/loader';
import WebpackPlugins from './base/plugins';

// 侧边栏
const SliderMenuList = [
    {
        label: 'webpack基础',
        prop: 'webpack-base',
        children: [
            {
              label: '基本概念',
              prop: 'webpack-concept',
              comp: function() {
                return <Concept />;
              },
            },
            {
              label: '入口',
              prop: 'webpack-entry',
              comp: function() {
                return <WebpackEntry />;
              },
            },
            {
              label: '出口',
              prop: 'webpack-output',
              comp: function() {
                return <WebpackOutput />;
              },
            },
            {
              label: 'mode',
              prop: 'webpack-mode',
              comp: function() {
                return <WebpackMode />;
              },
            },
            {
              label: 'loader',
              prop: 'webpack-loader',
              comp: function() {
                return <WebpackLoader />;
              },
            },
            {
              label: 'plugins',
              prop: 'webpack-plugins',
              comp: function() {
                return <WebpackPlugins />;
              },
            },
        ]
    },
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

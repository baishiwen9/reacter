import React from 'react';
import LeftSider from '../comp/LeftSider';


import PrefCss from './h5/css';
// 侧边栏
const SliderMenuList = [
    {
        label: 'H5性能优化',
        prop: 'h5-perf',
        children: [
            {
              label: 'html',
              prop: 'h5-perf-html',
              comp: function() {
                  return null;
              },
            },
            {
                label: 'css',
                prop: 'h5-perf-css',
                comp: function() {
                    return <PrefCss />;
                },
            },
            {
                label: 'js',
                prop: 'h5-perf-js',
                comp: function() {
                    return null;
                },
            },
            {
                label: 'image',
                prop: 'h5-perf-image',
                comp: function() {
                    return null;
                },
            },
            {
                label: 'react',
                prop: 'h5-perf-react',
                comp: function() {
                    return null;
                },
            },{
                label: 'webpack',
                prop: 'h5-perf-webpack',
                comp: function() {
                    return null;
                },
            },
            {
                label: '白屏时间',
                prop: 'h5-perf-whiteScreen',
                comp: function() {
                    return null;
                },
            },
            {
                label: '首屏时间',
                prop: 'h5-perf-firstScreen',
                comp: function() {
                    return null;
                },
            },
        ]
    },
    {
        label: '小程序性能优化',
        prop: 'miniApp-perf',
        children: [
            {
              label: '白屏时间',
              prop: 'miniApp-perf-whiteScreen',
              comp: function() {
                  return null;
              },
            },
            {
                label: '首屏时间',
                prop: 'miniApp-perf-firstScreen',
                comp: function() {
                    return null;
                },
            },{
                label: 'js',
                prop: 'miniApp-perf-js',
                comp: function() {
                    return null;
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

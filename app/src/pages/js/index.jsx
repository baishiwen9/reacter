import React from 'react';
import LeftSider from './../comp/LeftSider';



import ThisNote from './base/this';
import BlockScope from './base/blockScope';
import CopyNote from './base/copy';
import EventEmitterFn from './HeightLevelFn/EventEmitter';
import LightImage from './HeightLevelFn/LightImage';
import Memoization from './HeightLevelFn/memoization';

// 侧边栏
const SliderMenuList = [
    {
        label: 'js基础',
        prop: 'js-base',
        children: [
            {
              label: 'this',
              prop: 'this',
              comp: function() {
                  return <ThisNote />;
              },
            },
            {
                label: '块作用域',
                prop: 'block-scope',
                comp: function() {
                    return <BlockScope />;
                },
            },
            {
                label: '浅拷贝 & 深拷贝',
                prop: 'copy-mode',
                comp: function() {
                    return <CopyNote />;
                },
            },
        ]
    },
    {
        label: '高级方法',
        prop: 'height-level-fn',
        children: [
            {
              label: '发布订阅模式',
              prop: 'event-emit-fn',
              comp: function() {
                  return <EventEmitterFn />;
              },
            },
            {
                label: '点亮图片',
                prop: 'light-image-fn',
                comp: function() {
                    return <LightImage />;
                },
            },
            {
                label: 'memoization技术',
                prop: 'memoization',
                comp: function() {
                    return <Memoization />;
                },
            },Memoization
        ]
    },

];


export default function JsIndex () {
    return (
        <LeftSider SliderMenuList={SliderMenuList} />
    )
}

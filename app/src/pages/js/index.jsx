import React from 'react';
import LeftSider from './../comp/LeftSider';



import ThisNote from './base/this';
import BlockScope from './base/blockScope';
import ObjShili from './base/obj';
import ObjExtend from './base/extend';
import EventLoop from './base/eventLoop';
import CopyNote from './base/copy';

import EventEmitterFn from './HeightLevelFn/EventEmitter';
import LightImage from './HeightLevelFn/LightImage';
import Memoization from './HeightLevelFn/memoization';

import MySymbol from './es6/symbol';


import MatchMedia from './lessCommon/matchMedia';

import AboutQueue from './mianshi/aboutQueue';
import AboutTree from './mianshi/aboutTree';
import Myfetch from './mianshi/myFetch';
import MyMap from './mianshi/myMap';
import MyForEach from './mianshi/myForEach';
import MyNew from './mianshi/myNew';
import MyApply from './mianshi/myApply';
import MyCall from './mianshi/myCall';
import MyBind from './mianshi/myBind';
import MyLet from './mianshi/myLet';
import MyConst from './mianshi/myConst';
import MyInstanceof from './mianshi/myInstanceof';
import MyPromise from './mianshi/myPromise';
import MyCache from './mianshi/myCache';


import MyNote from './note/index';



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
            {
                label: '对象实例化方法',
                prop: 'obj-shili',
                comp: function() {
                    return <ObjShili />;
                },
            },
            {
                label: '对象继承方法',
                prop: 'obj-extend',
                comp: function() {
                    return <ObjExtend />;
                },
            },
            {
                label: 'event loop',
                prop: 'event-loop',
                comp: function() {
                    return <EventLoop />;
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
            },
        ]
    },
    {
        label: 'es6',
        prop: 'es6',
        children: [
            {
              label: 'symbol',
              prop: 'es6-symbol',
              comp: function() {
                  return <MySymbol />;
              },
            },
        ]
    },
    {
        label: '不常用知识点',
        prop: 'less-common',
        children: [
            {
              label: 'window.matchMedia',
              prop: 'matchMedia',
              comp: function() {
                  return <MatchMedia />;
              },
            },
        ]
    },{
        label: '面试',
        prop: 'mianshi',
        children: [
            {
              label: '实现一个类：链式调用，事件执行，流程控制',
              prop: 'mianshi-1',
              comp: function() {
                  return <AboutQueue />;
              },
            },
            {
                label: '判断树是否对称',
                prop: 'mianshi-2',
                comp: function() {
                    return <AboutTree />;
                },
            },
            {
                label: 'fetch实现控制并发请求数',
                prop: 'mianshi-3',
                comp: function() {
                    return <Myfetch />;
                },
            },
            {
                label: '实现map',
                prop: 'mianshi-4',
                comp: function() {
                    return <MyMap />;
                },
            },
            {
                label: '实现forEach',
                prop: 'mianshi-5',
                comp: function() {
                    return <MyForEach />;
                },
            },{
                label: '实现new',
                prop: 'mianshi-6',
                comp: function() {
                    return <MyNew />;
                },
            },{
                label: '实现apply',
                prop: 'mianshi-7',
                comp: function() {
                    return <MyApply />;
                },
            },{
                label: '实现call',
                prop: 'mianshi-8',
                comp: function() {
                    return <MyCall />;
                },
            },{
                label: '实现bind',
                prop: 'mianshi-9',
                comp: function() {
                    return <MyBind />;
                },
            },{
                label: '实现let',
                prop: 'mianshi-10',
                comp: function() {
                    return <MyLet />;
                },
            },{
                label: '实现const',
                prop: 'mianshi-11',
                comp: function() {
                    return <MyConst />;
                },
            },{
                label: '实现instanceof',
                prop: 'mianshi-12',
                comp: function() {
                    return <MyInstanceof />;
                },
            },{
                label: '实现promise',
                prop: 'mianshi-13',
                comp: function() {
                    return <MyPromise />;
                },
            },{
                label: '实现缓存函数',
                prop: 'mianshi-14',
                comp: function() {
                    return <MyCache />;
                },
            },  
        ]
    },
    {
        label: '笔记',
        prop: 'note',
        children: [
            {
              label: '笔记',
              prop: 'my-note',
              comp: function() {
                  return <MyNote />;
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

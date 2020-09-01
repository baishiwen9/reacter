import React from 'react';
import LeftSider from './../comp/LeftSider';



import ThisNote from './base/this';
import BlockScope from './base/blockScope';
import ObjShili from './base/obj';
import ObjExtend from './base/extend';
import EventLoop from './base/eventLoop';
import CopyNote from './base/copy';
import DiffArrowFn from './base/diffArrowFn';

import EventEmitterFn from './HeightLevelFn/EventEmitter';
import LightImage from './HeightLevelFn/LightImage';
import Memoization from './HeightLevelFn/memoization';
import Currying from './HeightLevelFn/currying';
import ThrottleAndDebounce from './HeightLevelFn/throttle&debounce';



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
import MySetInterval from './mianshi/mySetInterval';
import MySelfNote from './mianshi/mySelf';
import Light from './mianshi/light';

import DataType from './base/dataType';
import ObjectNote from './base/object';
import MyObjectCreate from './mianshi/myObjectCreate';
import CompilerNote from './base/compiler';
import ScopeNote from './base/scope';
import MyAsyncAwait from './es6/await';
import MySet from './es6/set';
import MyClass from './es6/class';
import MyModule from './es6/module';
import MyProxy from './es6/proxy';
import MyInterator from './es6/interator';
import MyGenerator from './es6/generator';
import MyWeakSet from './es6/weakSet';
import MyMapType from './es6/map';
import MyQuote from './base/quote';
import MyWeakMap from './es6/weakMap';
import MySymbol from './es6/symbol';



// 侧边栏
const SliderMenuList = [
    {
        label: 'js基础',
        prop: 'js-base',
        children: [
            {
                label: '编译原理',
                prop: 'compiler-note',
                comp: function() {
                    return <CompilerNote />;
                },
            },
            {
                label: '词法作用域',
                prop: 'scope-note',
                comp: function() {
                    return <ScopeNote />;
                },
            },
            {
                label: '数据类型',
                prop: 'data-type',
                comp: function() {
                    return <DataType />;
                },
            },
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
            {
                label: 'Object',
                prop: 'js-Object',
                comp: () => <ObjectNote />
            },
            {
                label: '弱引用&强引用',
                prop: 'js-quote',
                comp: () => <MyQuote />
            },
            {
                label: '箭头函数&普通函数区别',
                prop: 'js-diffArrowFn',
                comp: () => <DiffArrowFn />
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
            },{
                label: '函数柯力化',
                prop: 'js-currying',
                comp: () => <Currying />
            },{
                label: '节流&防抖',
                prop: 'js-throttle&debounce',
                comp: () => <ThrottleAndDebounce />
            }
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
            {
                label: 'promise',
                prop: 'es6-promise',
                comp: function() {
                    return <MyPromise />;
                },
            },
            {
                label: 'await',
                prop: 'es6-await',
                comp: function() {
                    return <MyAsyncAwait />;
                },
            },
            {
                label: 'Set',
                prop: 'es6-set',
                comp: function() {
                    return <MySet />;
                },
            },
            {
                label: 'WeakSet',
                prop: 'es6-weakSet',
                comp: function() {
                    return <MyWeakSet />;
                },
            },
            {
                label: 'Map',
                prop: 'es6-map',
                comp: function() {
                    return <MyMapType />;
                },
            },
            {
                label: 'WeakMap',
                prop: 'es6-weakmap',
                comp: function() {
                    return <MyWeakMap />;
                },
            },
            {
                label: 'class',
                prop: 'es6-class',
                comp: function() {
                    return <MyClass />;
                },
            },
            {
                label: 'module',
                prop: 'es6-module',
                comp: function() {
                    return <MyModule />;
                },
            },
            {
                label: 'proxy',
                prop: 'es6-proxy',
                comp: function() {
                    return <MyProxy />;
                },
            },
            {
                label: 'interator',
                prop: 'es6-interator',
                comp: function() {
                    return <MyInterator />;
                },
            },
            {
                label: 'generator',
                prop: 'es6-generator',
                comp: function() {
                    return <MyGenerator />;
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
        label: '经典题目',
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
            },{
                label: '实现Object.create',
                prop: 'mianshi-15',
                comp: function() {
                    return <MyObjectCreate />;
                },
            }, 
            {
                label: '实现setInterval',
                prop: 'mianshi-16',
                comp: function() {
                    return <MySetInterval />;
                },
            }, 
            {
                label: '其他的方法的实现',
                prop: 'mianshi-17',
                comp: function() {
                    return <MySelfNote />;
                },
            },
            {
                label: '实现红绿灯',
                prop: 'light',
                comp: function() {
                    return <Light />;
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

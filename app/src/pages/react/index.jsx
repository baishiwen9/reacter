import React from 'react';
import LeftSider from './../comp/LeftSider';


import BaseNote from './base/index';
import LifeCycle from './lifeCycle/index';
import PerfState from './perf/index';
import SelfComp from './selfComp/index';


import PureFn from './special/pureFn';
import PureComp from './special/pureComp';
import HOC from './special/hoc';
import ControllComp from './special/controlled-comp';
import NoControllComp from './special/no-controlled-comp';

import Props from './communication/props';
import Context from './communication/context';
import ReduxComp from './communication/redux';
import PublishSubscribe from './communication/publishSubscribe';


import Note from './note/index';


// 侧边栏
const SliderMenuList = [
    {
        label: 'react语法',
        prop: 'react-base',
        children: [
            {
              label: 'base',
              prop: 'base',
              comp: function() {
                return <BaseNote />;
              },
            },
        ]
    },
    {
      label: 'react生命周期',
      prop: 'react-lifeCycle',
      children: [
          {
            label: '生命周期函数',
            prop: 'lifeCycle',
            comp: function() {
              return <LifeCycle />;
            },
          },
      ]
    },
    {
      label: 'react性能优化',
      prop: 'react-perf',
      children: [
          {
            label: '性能优化',
            prop: 'perf',
            comp: () => <PerfState />,
          },
      ]
    },
    {
      label: 'react通信方案',
      prop: 'react-communication',
      children: [
          {
            label: 'props',
            prop: 'communication-props',
            comp: () => <Props />,
          },
          {
            label: 'context',
            prop: 'communication-context',
            comp: () => <Context />,
          },
          {
            label: 'publish-subscribe',
            prop: 'communication-publish-subscribe',
            comp: () => <PublishSubscribe />,
          },
          {
            label: 'redux',
            prop: 'communication-redux',
            comp: () => <ReduxComp />,
          },
      ]
    },
    {
      label: 'react专业术语',
      prop: 'react-special',
      children: [
          {
            label: '纯函数',
            prop: 'pure-fn',
            comp: () => <PureFn />,
          },
          {
            label: '纯组件',
            prop: 'pure-comp',
            comp: () => <PureComp />,
          },
          {
            label: '高阶组件',
            prop: 'hoc',
            comp: () => <HOC />,
          },
          {
            label: '受控组件',
            prop: 'controll-comp',
            comp: () => <ControllComp />,
          },
          {
            label: '非受控组件',
            prop: 'no-controll-comp',
            comp: () => <NoControllComp />,
          },
      ]
    },
    {
      label: '自定义组件',
      prop: 'self-comp',
      children: [
          {
            label: '预览大图',
            prop: 'preview-imgs',
            comp: () => <SelfComp />,
          },
      ]
    },
    {
      label: '好用的react库',
      prop: 'good-react',
      children: [
          {
            label: '好用的react库',
            prop: 'react-good-comp',
            comp: () => <Note />,
          },
      ]
    }

];

export default function ReactIndex () {
    return (
        <LeftSider SliderMenuList={SliderMenuList} />
    )
}

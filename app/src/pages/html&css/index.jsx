import React from 'react';
import LeftSider from '../comp/LeftSider';


import H5Note from './html/h5/index';
import Canvas from './html/h5/canvas';
import H5APINote from './html/api/index';


import CSS3Note from './css/css3/index';
import Margin from './css/css3/margin';
import BFC from './css/css3/bfc';
import ClearFloat from './css/css3/clearFloat';
import Selector from './css/css3/selector';

import FlexNote from './css/layout/flex';
import Layout2Cols from './css/layout/2cols';
import Layout3Cols from './css/layout/3cols';
import LayoutGrid from './css/layout/grid';
import LayoutSanjiao from './css/layout/sanjiao';
import BoxModel from './css/css3/boxModel';
import UnitNote from './css/layout/unit';
import Layout16to9 from './css/layout/16to9';
import Progress from './css/layout/progress';

// 侧边栏
const SliderMenuList = [
    {
        label: 'HTML',
        prop: 'h5',
        children: [
            {
              label: 'h5',
              prop: 'h5-span',
              comp: function() {
                return <H5Note />;
              },
            },
            {
                label: 'h5---API',
                prop: 'h5-api',
                comp: function() {
                  return <H5APINote />;
                },
            },
            {
                label: 'canvas',
                prop: 'h5-canvas',
                comp: function() {
                  return <Canvas />;
                },
            },
        ]
    },
    {
      label: 'CSS',
      prop: 'css',
      children: [
        {
          label: 'css3新特性',
          prop: 'css3-new',
          comp: function() {
              return <CSS3Note />;
          },
        },
        {
            label: '盒模型',
            prop: 'css3-boxModel',
            comp: function() {
                return <BoxModel />;
            },
        },
        {
            label: 'margin',
            prop: 'css3-margin',
            comp: function() {
                return <Margin />;
            },
        },
        {
            label: 'BFC',
            prop: 'css3-bfc',
            comp: function() {
                return <BFC />;
            },
        },
        {
            label: '清浮动',
            prop: 'css3-clearFloat',
            comp: function() {
                return <ClearFloat />;
            },
        },
        {
          label: 'flex布局',
          prop: 'layout-flex',
          comp: function() {
              return <FlexNote />;
          },
      },
      {
        label: '两栏布局',
        prop: 'layout-2-col',
        comp: function() {
            return <Layout2Cols />;
        },
      },
      {
          label: '三栏布局',
          prop: 'layout-3-col',
          comp: function() {
              return <Layout3Cols />;
          },
        },
        {
            label: 'grid网格布局',
            prop: 'layout-grid',
            comp: function() {
                return <LayoutGrid />;
            },
        },
        {
            label: '三角形',
            prop: 'layout-sanjiao',
            comp: function() {
                return <LayoutSanjiao />;
            },
        },
        {
            label: '16 : 9',
            prop: 'layout-16to9',
            comp: function() {
                return <Layout16to9 />;
            },
        },
        {
            label: 'css单位',
            prop: 'layout-unit',
            comp: function() {
                return <UnitNote />;
            },
        },
        {
            label: '选择器及优先级',
            prop: 'css-selector',
            comp: function() {
                return <Selector />;
            },
        },
        {
            label: 'css实现进度条',
            prop: 'css-progress',
            comp: function() {
                return <Progress />;
            },
        },
      ]
  },
];

export default function H5Index () {
    return (
        <LeftSider SliderMenuList={SliderMenuList} />
    )
}

import React from 'react';
import LeftSider from './../comp/LeftSider';

import CSS3Note from './css3/index';
import FlexNote from './layout/flex';
import Layout2Cols from './layout/2cols';
import Layout3Cols from './layout/3cols';
import LayoutGrid from './layout/grid';
import LayoutSanjiao from './layout/sanjiao';
import BoxModel from './css3/boxModel';


// 侧边栏
const SliderMenuList = [
    {
        label: 'css3新特性',
        prop: 'css3',
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
        ]
    },
    {
        label: '布局',
        prop: 'layout',
        children: [
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
        ]
    },

];


export default function JsIndex () {
    return (
        <LeftSider SliderMenuList={SliderMenuList} />
    )
}

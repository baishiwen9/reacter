import React from 'react';
import LeftSider from './../comp/LeftSider';

import CSS3Note from './css3/index';
import FlexNote from './css3/flex';
import Layout2Cols from './layout/2cols';
import Layout3Cols from './layout/3cols';
import LayoutGrid from './layout/grid';
import LayoutSanjiao from './layout/sanjiao';


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
                label: 'flex属性',
                prop: 'flex',
                comp: function() {
                    return <FlexNote />;
                },
            },
        ]
    },
    {
        label: '特殊布局',
        prop: 'layout',
        children: [
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

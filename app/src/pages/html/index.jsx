import React from 'react';
import LeftSider from './../comp/LeftSider';


import H5Note from './h5/index';
import H5APINote from './api/index';


// 侧边栏
const SliderMenuList = [
    {
        label: 'h5',
        prop: 'h5',
        children: [
            {
              label: 'h5新增标签',
              prop: 'h5-span',
              comp: function() {
                return <H5Note />;
              },
            },
            {
                label: 'h5新增API',
                prop: 'h5-api',
                comp: function() {
                  return <H5APINote />;
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

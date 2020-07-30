import React from 'react';
import LeftSider from '../comp/LeftSider';

// 侧边栏
const SliderMenuList = [
    {
        label: 'node基础',
        prop: 'node-base',
        children: [
            {
              label: '基础概念',
              prop: 'node-base-note',
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

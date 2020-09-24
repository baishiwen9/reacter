import React from 'react';
import LeftSider from './../comp/LeftSider';


import BubbleSort from './bubbleSort';
import Mianshi from './mianshi';
import QuickSort from './quickSort';
import SelectionSort from './selectionSort';


import TreeSort from './tree';
// import H5APINote from './api/index';


// 侧边栏
const SliderMenuList = [
    {
        label: '算法',
        prop: 'algorithm',
        children: [
            {
              label: '冒泡排序',
              prop: 'algorithm-bubble-sort',
              comp: function() {
                return <BubbleSort />;
              },
            },
            {
                label: '快排',
                prop: 'algorithm-quick',
                comp: function() {
                  return <QuickSort />;
                },
            },
            {
              label: '选择排序',
              prop: 'algorithm-selection',
              comp: function() {
                return <SelectionSort />;
              },
            },
            {
                label: '二叉树',
                prop: 'algorithm-tree',
                comp: function() {
                  return <TreeSort />;
                },
            },
            {
              label: '常见算法题',
              prop: 'algorithm-note',
              comp: function() {
                return <Mianshi />;
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

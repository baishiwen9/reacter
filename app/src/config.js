import ReactNote from './pages/react';
import JSNote from './pages/js';
import HTMLNote from './pages/html&css';
// import CSSNote from './pages/css';
import BrowserNote from './pages/browser';
import AlgorithmNote from './pages/algorithm';
import MiniAppNote from './pages/miniApp';
import WebpackNote from './pages/webpack';
import PerfNote from './pages/perf';
import NodeNote from './pages/node';

const routeList = [
    {path: '/', component: ReactNote},
    {path: '/react', component: ReactNote},
    {path: '/js', component: JSNote},
    {path: '/html-css', component: HTMLNote},
    // {path: '/css', component: CSSNote},
    {path: '/browser-network', component: BrowserNote},
    {path: '/algorithm', component: AlgorithmNote},
    {path: '/miniApp', component: MiniAppNote},
    {path: '/webpack', component: WebpackNote},
    {path: '/perf', component: PerfNote},
    {path: '/node', component: NodeNote},
];


//头部菜单栏
const MenuLinkDatas = [
    {
        label: 'React',
        prop: 'react',
        path: 'react',
        id: 'react',
    },
    {
        label: 'JavaScript',
        prop: 'js',
        path: 'js',
        id: 'js',
    },
    {
        label: 'HTML&CSS',
        prop: 'html-css',
        path: 'html-css',
        id: 'html-css',
    },
    // {
    //     label: 'CSS',
    //     prop: 'css',
    //     path: 'css',
    //     id: 'css',
    // },
    {
        label: 'webpack',
        prop: 'webpack',
        path: 'webpack',
        id: 'webpack',
    },
    {
        label: 'node',
        prop: 'node',
        path: 'node',
        id: 'node',
    },
    {
        label: '性能优化',
        prop: 'perf',
        path: 'perf',
        id: 'perf',
    },
    // {
    //     label: '移动端',
    //     prop: 'mobile',
    //     path: 'mobile',
    //     id: 'mobile',
    // },
    {
        label: '小程序',
        prop: 'miniApp',
        path: 'miniApp',
        id: 'miniApp',
    },
    {
        label: '浏览器&网络',
        prop: 'browser-network',
        path: 'browser-network',
        id: 'browser-network',
    },
    {
        label: '算法',
        prop: 'algorithm',
        path: 'algorithm',
        id: 'algorithm',
    }
];



export {
    routeList,
    MenuLinkDatas,
}
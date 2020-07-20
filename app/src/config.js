import ReactNote from './pages/react';
import JSNote from './pages/js';
import HTMLNote from './pages/html';
import CSSNote from './pages/css';




import AlgorithmNote from './pages/algorithm';



const routeList = [
    {path: '/', component: ReactNote},
    {path: '/react', component: ReactNote},
    {path: '/js', component: JSNote},
    {path: '/html', component: HTMLNote},
    {path: '/css', component: CSSNote},



    {path: '/algorithm', component: AlgorithmNote},
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
        label: 'HTML',
        prop: 'html',
        path: 'html',
        id: 'html',
    },
    {
        label: 'CSS',
        prop: 'css',
        path: 'css',
        id: 'css',
    },
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
        label: '网络',
        prop: 'network',
        path: 'network',
        id: 'network',
    },
    {
        label: '浏览器',
        prop: 'browser',
        path: 'browser',
        id: 'browser',
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
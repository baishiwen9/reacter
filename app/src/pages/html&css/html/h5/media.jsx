import React, { Component } from 'react';
import Code from '../../../comp/Code';
import {Table} from 'antd';


export default class Media extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const columns_prop = [
            {
                title: '属性名',
                dataIndex: 'propName',
                key: 'propName',
            },
            {
                title: '数据类型',
                dataIndex: 'type',
                key: 'type',
            },
            {
                title: '说明',
                dataIndex: 'desc',
                key: 'desc',
            },
        ];

        const dataSource_prop = [
            {
                key: '1',
                propName: 'autoplay',
                type: 'boolean',
                desc: '是否自动播放（ios不可自动播放，在chrome中只有静音的时候可以正常自动播放）',
            },
            {
                key: '2',
                propName: 'buffered',
                type: 'obj',
                desc: '表示已经下载的缓冲的时间范围对象',
            },{
                key: '3',
                propName: 'bufferedBytes',
                type: '',
                desc: '表示已经下载的缓冲的字节范围的对象',
            },{
                key: '4',
                propName: 'bufferingRate',
                type: 'int',
                desc: '下载过程中每秒钟平均接收到的位数',
            },{
                key: '5',
                propName: 'bufferingThrottled',
                type: 'boolean',
                desc: '表示浏览器是否对缓冲进行了节流',
            },{
                key: '6',
                propName: 'controls',
                type: 'boolean',
                desc: '获取或设置controls属性，用于显示或隐藏浏览器内置控件',
            },{
                key: '7',
                propName: 'currentLoop',
                type: 'int',
                desc: '媒体文件已经循环的次数',
            },{
                key: '8',
                propName: 'currentSrc',
                type: 'string',
                desc: '当前播放的媒体文件的url',
            },{
                key: '9',
                propName: 'currentTime',
                type: 'float',
                desc: '已经播放的秒数',
            },{
                key: '10',
                propName: 'defaultPlaybackRate',
                type: 'float',
                desc: '取得或者设置默认播放速度，默认值为1.0s',
            },{
                key: '11',
                propName: 'duration',
                type: 'float',
                desc: '媒体的总播放时间s',
            },{
                key: '12',
                propName: 'ended',
                type: 'bool',
                desc: '表示媒体是否播放完成',
            },{
                key: '13',
                propName: 'loop',
                type: 'float',
                desc: '表示媒体播放到结尾时是否自动重新播放',
            },{
                key: '14',
                propName: 'muted',
                type: 'bool',
                desc: '设置或者获取是否为静音',
            },{
                key: '15',
                propName: 'networkState',
                type: 'int',
                desc: '表示当前媒体的网络连接状态，0为空，1为正在加载，2为正在加载元数据，3表示已经加载了第一帧，4表示加载完成',
            },{
                key: '16',
                propName: 'paused',
                type: 'bool',
                desc: '表示是否暂停',
            },{
                key: '17',
                propName: 'palybackRate',
                type: 'float',
                desc: '获取或者设置当前的播放速度',
            },{
                key: '18',
                propName: 'readyState',
                type: 'int',
                desc: '表示媒体是否已经就绪，0为不可用，1为可以显示当前帧，2为可播放，3为可以从头到尾播放',
            },{
                key: '19',
                propName: 'seekable',
                type: '时间范围',
                desc: '可以搜索的时间范围',
            },{
                key: '20',
                propName: 'seeking',
                type: 'bool',
                desc: '表示媒体是否正移动到媒体文件中的新位置',
            },{
                key: '21',
                propName: 'src',
                type: 'string',
                desc: '媒体文件的来源',
            },{
                key: '22',
                propName: 'start',
                type: 'float',
                desc: '获取或者设置媒体文件的开始播放的位置，s',
            },{
                key: '23',
                propName: 'totalBytes',
                type: 'int',
                desc: '当前资源所需的总字节数',
            },{
                key: '24',
                propName: 'videoHeight',
                type: 'int',
                desc: '返回视频的高度，只适合video',
            },{
                key: '25',
                propName: 'videoWidth',
                type: 'int',
                desc: '返回视频的宽度，只适合video',
            },
            {
                key: '26',
                propName: 'volume',
                type: 'float',
                desc: '获取或者设置当前音量，值为0.0到1.0',
            },
        ];

        const columns_event = [
            {
                title: '事件名',
                dataIndex: 'eventName',
                key: 'eventName',
            },
            {
                title: '触发时机',
                dataIndex: 'eventCall',
                key: 'eventCall',
            },
        ]

        const dataSource_event = [
            {
                eventName: 'abort',
                eventCall: '下载中断',
            },{
                eventName: 'canplay',
                eventCall: '可以播放时，readyState值为2',
            },{
                eventName: 'canplaythrough',
                eventCall: '播放可继续，而且应该不会中断，readyState为3',
            },{
                eventName: 'canshowcurrentframe',
                eventCall: '当前帧已经下载完成，readyState为1',
            },{
                eventName: 'dataunavailable',
                eventCall: '因为没有数据而不能播放，readyState值为0',
            },{
                eventName: 'durationchange',
                eventCall: 'duration属性的值改变',
            },{
                eventName: 'emptied',
                eventCall: '网络连接关闭',
            },{
                eventName: 'empty',
                eventCall: '发生错误阻止了媒体下载',
            },{
                eventName: 'ended',
                eventCall: '媒体已播放到末尾，播放停止',
            },{
                eventName: 'error',
                eventCall: '下载期间发生网络错误',
            },{
                eventName: 'load',
                eventCall: '所有媒体加载完成',
            },{
                eventName: 'loadeddata',
                eventCall: '媒体的第一帧已经加载完成',
            },{
                eventName: 'loadedmetadata',
                eventCall: '媒体的元数据已经加载完成',
            },{
                eventName: 'loadstart',
                eventCall: '下载已开始',
            },{
                eventName: 'pause',
                eventCall: '播放已暂停',
            },{
                eventName: 'play',
                eventCall: '播放',
            },{
                eventName: 'playing',
                eventCall: '媒体已经开始播放',
            },{
                eventName: 'progress',
                eventCall: '正在下载',
            },{
                eventName: 'ratechange',
                eventCall: '媒体的播放速度改变',
            },{
                eventName: 'seeked',
                eventCall: '搜索结束',
            },{
                eventName: 'seeking',
                eventCall: '正移动到新位置',
            },{
                eventName: 'stalled',
                eventCall: '浏览器尝试下载，但未接受到数据',
            },{
                eventName: 'timeupdate',
                eventCall: 'currentTime被以不合理或意外的方式更新',
            },{
                eventName: 'volumechange',
                eventCall: 'volume属性值或者muted属性值改变',
            },{
                eventName: 'waiting',
                eventCall: '播放暂停，等待下载更多数据',
            }
        ];
       
        return (
            <div>
                <p className="article-title"><span className="textShadow">video & audio</span></p>
                <div className="article-desc">
                    <h3>1. 属性</h3>
                    <Table dataSource={dataSource_prop} columns={columns_prop} pagination={false} />
                    <br />
                    <h3>2. 事件</h3>
                    <Table dataSource={dataSource_event} columns={columns_event} pagination={false} />
                    audio元素还有一个原生的js构造函数Audio，可以在任何时候播放音频。

                </div>
            </div>
        )
    }
}
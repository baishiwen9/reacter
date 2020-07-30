import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class WXNavbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">微信小程序---自定义导航栏</span></p>
                <div className="article-desc">
                    <Code code={`
// wxml
<view class="nav-bar {{modType=='normal'? 'normal': modType}} {{showBlank ? 'bg-color':''}}" style='height:{{navigationBarHeight}};{{headerStyle}}'>
    <view style="{{'height: ' + statusBarHeight}}"></view>

    <view class="nav-group flex flex-align-center flex-pack-around"  style="{{'top: ' + statusBarHeight}};{{btnHomeStyle}}">
        <view wx:if="{{showBack && !showHome}}" class="nav-btn">
            <view class="icon icon-arrow-l flex flex-align-center flex-pack-center"></view>
        </view>
        <view wx:if="{{showHome}}" class="nav-btn" >
            <image class="showHome" src="{{src}}" />
        </view>
    </view>

    <view class="nav-title flex flex-align-center flex-pack-center" style="{{'top: ' + statusBarHeight}};{{btnHomeStyle}}">
        {{pageName}}
    </view>
</view>
<view class="nav-bar-placeholder" style='height:{{navigationBarHeight}};'></view>

// js

import { getStatusBarHeight } from 'util/wx/sysinfo'
const statusBarHeight = getStatusBarHeight()
Component({
    options: {
        addGlobalClass: true,
    },
    /**
     * 组件的属性列表
     * pageName 指定页面标题
     * modType normal | '' normal为带头部的样式，传空字符串为没有头部的样式
     * goList true | false true表示跳转到列表页
     * customStyle:
     * backUrl: 返回的url
     */
    properties: {
        pageName: String,
        modType: String,
        goList: {
            type: Boolean,
            value: false
        },
        showHome: {
            type: Boolean,
            value: false
        },
        headerStyle: String,
        btnHomeStyle: String,
        backUrl: {
            type: String,
            value: ''
        }
    },
    /**
     * 组件的初始数据
     * showBack showBack
     * statusBarHeight  界面状态栏高度，用于适配不同设备状态栏
     * navigationBarHeight  navbar的设计高度，UI定义高度，可以手动修改
     */
    data: {
        showBlank: true,
        showBack: true,
        showHome: false,
        statusBarHeight: statusBarHeight + 'px',
        navigationBarHeight: (statusBarHeight + 50) + 'px'
    },
    pageLifetimes: {
        show() {
            this.setData({
                showBack: this.data.goList ? true : (getCurrentPages().length > 1)
            })
        },

    },
    lifetimes: {
        ready: function () {
            this._observer = wx.createIntersectionObserver(this)
            this._observer
                .relativeToViewport()
                .observe('.nav-bar-placeholder', (res) => {
                    if (res.intersectionRatio > 0) {
                        // 移出，背景出现
                        this.setData({
                            showBlank: false
                        })
                    } else {
                        // 进入，背景变透明
                        this.setData({
                            showBlank: true
                        })
                    }
                })
        },
        detached: function () {
            if (this._observer) this._observer.disconnect()
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        //回退
        historyBack: function () {
            if (this.data.goList) {
                wx.reLaunch({
                    url: '/pages/home/index'
                })
            } else {
                wx.navigateBack()
            }
        },
        goHome: function (e) {
            this.triggerEvent("homeEventHandler", e);
            if (this.data.backUrl && this.data.backUrl != '') {
                wx.reLaunch({
                    url: this.data.backUrl
                })
            } else {
                wx.switchTab({
                    url: '/pages/home/index'
                })
            }
        }
    }
})

`} />

                </div>
            </div>
        )
    }
}
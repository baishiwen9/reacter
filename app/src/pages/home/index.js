import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Carousel from 'antd-mobile/lib/carousel';
import 'antd-mobile/lib/carousel/style/css';
import Tabs from 'antd-mobile/es/tabs';
import 'antd-mobile/lib/tabs/style/css';
import Badge from 'antd-mobile/lib/badge';
import 'antd-mobile/lib/badge/style/css';
import MediaPlay from 'h5-media-player';
import 'h5-media-player/dist/mediaPlayer.min.css';
import { getTodayVideoDuanzi, getTodayVideo } from './../../services/home';
import LoginModel from '../../component/loginModel';
import { getLoginStatus } from '../../actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.tabs = [
            { title: <Badge>段子</Badge> },
            { title: <Badge dot>视频</Badge> },
            { title: <Badge>笑话</Badge> },
        ];
        this.state = {
            todayVideoList: [],
            videoDuanzi: [],
            showLogin: false,
            selectedIndex: 0,
        };
    }

    componentDidMount() {
        getTodayVideoDuanzi().then(res => {
            if (res) {
                this.setState({
                    videoDuanzi: res,
                });
            }
        });

        getTodayVideo().then(res => {
            console.log(res);
            if (res && res.length > 0) {
                const result = [];
                res.map(item => {
                    if (item && item.data && item.data.content && item.data.content.type === 'video') {
                        const { description, duration, playUrl, title, id } = item.data.content.data;
                        result.push({
                            description, duration, playUrl, title, id,
                        });
                    }
                });
                this.setState({
                    todayVideoList: result,
                });
            }
        });
    }

    componentDidUpdate() {
        const { todayVideoList } = this.state;
        // todayVideoList.map(item => {
        //     new MediaPlay().initVideo({
        //         id: 'videoItem_' + item.id,
        //         src: item.playUrl,
        //         playingCB: function() {
        //                 console.log('---开发播放---');
        //         },
        //         pauseCB: function() {
        //                 console.log('---暂停播放---');
        //         },
        //         playEndCB: function() {
        //                 console.log('---视频播放结束---')
        //         },
        //         beatTime: 3,
        //         playingBeatCB: function() {},
        //     });
        // })
    }


    tabClick(tab, index) {
        console.log(tab, index);
        const { app={} } = this.props.state;
        if (!app.loginStatus && (index == 1 || index == 2)) {
            this.setState({
                showLogin: true,
            })
        }
    }

    cardBeforeChange(from, to) {

    }

    cardAfterChange(index) {

    }


    render() {
        const { videoDuanzi, todayVideoList, selectedIndex } = this.state; 
        const { tabs } = this; 
        return (
            <div className="homeWrap">
                 <Tabs tabs={tabs}
                    initialPage={0}
                    swipeable={false}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) =>  this.tabClick(tab, index)}
                >
                    <div className="tab-list">
                        {
                            videoDuanzi && videoDuanzi.map(item => (
                                <div className="items" key={item.sid}>
                                    {
                                        item.type === 'video' && (
                                            <div className="videoWrap">
                                                <video src={item.video} controls width="100%" height="210px" />
                                                <div className="desc">{item.text}</div>
                                            </div>
                                        )
                                    }
                                    <div className="basicInfo">
                                        <img className="avatar" src={item.top_comments_header} alt="" />
                                        <span className="name">{item.top_comments_name}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="tab-list todayVideoList">
                        <Carousel
                            dots={false}
                            autoplay={false}
                            cellSpacing={16}
                            slideWidth={0.8}
                            selectedIndex={selectedIndex}
                            beforeChange={(from, to) => this.cardBeforeChange(from, to)}
                            afterChange={index => this.cardAfterChange(index)}
                        >
                            {
                                todayVideoList && todayVideoList.map((item, index) => (
                                    <div className="videoWrap" key={index}>
                                        <div className="videoItem" id={`videoItem_${item.id}`}>
                                            <video src={item.playUrl} controls width="100%" height="420px" />
                                        </div>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                    <div>
                        333
                    </div>
                </Tabs>
                <LoginModel {...this.props} show={this.state.showLogin} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getLoginStatus: (userinfo={}, status) => {
            dispatch(getLoginStatus(userinfo, status));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tabs from 'antd-mobile/es/tabs';
import 'antd-mobile/lib/tabs/style/css';
import Badge from 'antd-mobile/lib/badge';
import 'antd-mobile/lib/badge/style/css';
import { getTodayVideo } from './../../services/home';
import LoginModel from '../../component/loginModel';
import { getLoginStatus } from '../../actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                { title: <Badge>段子</Badge> },
                { title: <Badge text={'今日(20)'}>新闻</Badge> },
                { title: <Badge dot>笑话</Badge> },
            ],
            videoDuanzi: [],
            showLogin: false,
        };
    }

    componentDidMount() {
        getTodayVideo().then(res => {
            if (res) {
                this.setState({
                    videoDuanzi: res,
                });
            }
        });
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

    render() {
        const { tabs, videoDuanzi } = this.state; 
        return (
            <div className="homeWrap">
                 <Tabs tabs={tabs}
                    initialPage={0}
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
                    <div>
                        222
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

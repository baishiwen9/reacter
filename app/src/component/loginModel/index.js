import React from 'react';
import './index.scss';

export default class LoginModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phonenumber: '',
            isLogin: false,
        }
        this.inputChange = this.inputChange.bind(this);
        this.confirmLogin = this.confirmLogin.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps',  nextProps);
    }

    inputChange(e, type) {
        this.setState({
            [type]: e.target.value
        })
    }

    confirmLogin() {
        const { name, phonenumber } = this.state;
        const { getLoginStatus } = this.props;
        if (name && phonenumber) {
            getLoginStatus({
                name,
                phonenumber,
            }, true);
            this.setState({
                isLogin: true,
                name: '',
                phonenumber: ''
            })
        }
    }

    logOut() {
        const { getLoginStatus } = this.props;
        getLoginStatus(null, false);
        this.setState({
            isLogin: false,
        })
    }

    render() {
        const { name, phonenumber } = this.state;
        const { app={} } = this.props.state;
        const { show, showLogout } = this.props;
        if (!show) {
            return null;
        }
        return (
            <div>
                {
                    !app.loginStatus && (
                        <div className="loginWrap">
                            <div className="loginPanle">
                                <div className="title">登录</div>
                                <div className="row">
                                    <div className="label name">姓名</div>
                                    <input 
                                        className="input" 
                                        placeholder="请输入姓名" 
                                        onChange={(e) => this.inputChange(e, 'name')} 
                                        value={name} 
                                    />
                                </div>

                                <div className="row">
                                    <div className="label phonenumber">电话</div>
                                    <input 
                                        type="number" 
                                        maxLength="11" 
                                        className="input" 
                                        placeholder="请输入电话" 
                                        onChange={(e) => this.inputChange(e, 'phonenumber')} 
                                        value={phonenumber}
                                    />
                                </div>
                                <div className="confirmBtn" onClick={() => this.confirmLogin()}>确认</div>
                            </div>
                        </div>
                    )
                }
                {
                    app.loginStatus && showLogout && <div className="logoutBtn" onClick={() => this.logOut()}>退出登陆</div>
                }
            </div>
        )
    }
}
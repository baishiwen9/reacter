import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { getLoginStatus } from '../../actions';
import PropTypes from 'prop-types';
import LoginModel from '../../component/loginModel';

class My extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="my-wrap">
               <LoginModel {...this.props} showLogout show />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getLoginStatus: (userinfo={}, status) => {
            dispatch(getLoginStatus(userinfo, status));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(My);

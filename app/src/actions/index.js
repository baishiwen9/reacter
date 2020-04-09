

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_STATUS = 'LOGIN_STATUS';

export const getLoginStatus = (userinfo, status) => {
    return {
        type: LOGIN,
        data: {
            userinfo,
            loginStatus: status,
        }
    }
}
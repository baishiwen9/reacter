import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer/index';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Layout } from 'antd';

import { HashRouter } from 'react-router-dom';
import Route from './component/route/router';
import MenuLink from './component/route/link';

import { MenuLinkDatas, routeList } from './config';
import logo from './img/logo.jpg';
import './styles/root.css';
import './styles/iconfont.css';
import './pages/comp/common/style.css';

import Theme from './component/Theme/index';
import { ThemeContext, themesObj } from './context/theme';
import DrawerComp from './component/Drawer';

const { Header } = Layout;

const middleware = [thunk];
if(process.env.NODE_ENV !== 'production'){
    middleware.push(logger)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));


class APP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themesObj.dark,
            openDrawer: false,
        }
    }

    toggleTheme = () => {
        const { theme } = this.state;
        this.setState({
            theme: theme.key === 'dark' ? themesObj.light : themesObj.dark,
        });
    }

    render() {
        const { foreground, background, key:theme } = this.state.theme;
        const style = {
            color: foreground,
            background: background,
        }
        return (
            <ThemeContext.Provider value={theme}>
                <Layout>
                    <HashRouter>
                        <Header className="header" style={style}>
                            <div className="logo-wrap">
                                <img className="logo" src={logo} alt="" />
                            </div>
                            <MenuLink menuList={MenuLinkDatas} />
                            <Theme changeTheme={this.toggleTheme} style={style} theme={theme}/>
                        </Header>
                        <Route routeList={routeList} />
                    </HashRouter>
                    <div className="noteBook" onClick={() => {this.setState({ openDrawer: true })}}><span className="iconfont icon-edit" /></div>
                    <DrawerComp visible={this.state.openDrawer} onClose={() => {this.setState({ openDrawer: false })} }/>
                </Layout>
            </ThemeContext.Provider>
        )
    }
}



ReactDOM.render(
    <Provider store={store}>
        <APP />
    </Provider>,
    document.getElementById('root'),
    () => {
        window.UI && window.UI.loading && window.UI.loading.hide && window.UI.loading.hide();
    }
);

serviceWorker.unregister();

import React from 'react';
import './index.scss';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const settingMenu = [
    {
        label: '更换主题',
        prop: 'theme',
    },
];

export default class Theme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleMenuClick = (data) => {
        const { changeTheme } = this.props;
        if (data.key === 'theme') {
            changeTheme();
        }
    }

    render() {
        return (
            <div className={`theme-component ${this.props.theme}`}>
                <Dropdown overlay={
                    <Menu onClick={this.handleMenuClick}>
                        {
                            settingMenu.map(item => <Menu.Item key={item.prop}>{item.label}</Menu.Item>)
                        }
                  </Menu>
                }>
                    <span>
                        更多 <DownOutlined />
                    </span>
                </Dropdown>
            </div>
        )
    }
}
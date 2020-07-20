import React, { Component } from 'react';
import { Menu } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import './link.scss';
import { ThemeContext } from '../../context/theme';

class MenuLink extends Component{
	render(){
		const currentHash = window.location.hash;
		const { menuList } = this.props;
		let curSelectedKeyIndex = ['1'];
		
		menuList.forEach((item, index) => {
			if (currentHash.indexOf(item.path) > -1) {
				curSelectedKeyIndex = [(index + 1) + ''];
			}
		});
		return(
			<ThemeContext.Consumer>
				{
					(theme) => {
						return (
							<Menu theme={theme} mode="horizontal" defaultSelectedKeys={curSelectedKeyIndex}>
							{
								menuList.map((item, index) => <Menu.Item key={index + 1}><Link id={item.id} to={`/${item.path}`} replace>{item.label}</Link></Menu.Item>)
							}
							</Menu>
						)
					}
				}
			</ThemeContext.Consumer>
		)
	}
}

export default MenuLink;
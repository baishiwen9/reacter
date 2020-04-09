import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './link.scss';

class Link extends Component{
	render(){
		const { linkList } = this.props;
		return(
			<ul className="menuList">
				{
					linkList.map((item, index) => (
						<li className="list" key={index}>
                            <NavLink exact id={item.id} to={`/${item.path}`} activeStyle={{borderBottom: `4px solid ${item.activeColor}`,color: '#333333'}} replace>{item.text}</NavLink>
                        </li>
					))
				}
			</ul>
		)
	}
}

export default Link;
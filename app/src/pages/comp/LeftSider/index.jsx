import React, {Component} from 'react';
import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class LeftSider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentContentComp: this.props.SliderMenuList[0].children[0].comp,
        };
    }

    clickSliderItem(getCompFn) {
        this.setState({
          currentContentComp: getCompFn,
        })
    }

    render() {
        const { SliderMenuList } = this.props; 
        const { currentContentComp } = this.state; 
        const contentHeight = window.innerHeight - 64;
        return (
            <Layout>
              <Sider width={200} className="site-layout-background" collapsible>
                <Menu
                  mode="inline" style={{ height: '100%', borderRight: 0 }}
                  defaultSelectedKeys={[SliderMenuList[0].children[0].prop]}
                  defaultOpenKeys={[SliderMenuList[0].prop]}
                >
                  {
                    SliderMenuList.map((item) => {
                        return (
                          <SubMenu key={item.prop} title={item.label}>
                              {
                                  item.children.map((one) => <Menu.Item onClick={() => this.clickSliderItem(one.comp)} key={one.prop}>{one.label}</Menu.Item>)
                              }
                          </SubMenu>
                        )
                    })
                  }
                </Menu>
              </Sider>
              <Layout style={{ padding: '16px', height: contentHeight + "px", overflowY: 'auto'}}>
                <Content className="site-layout-background"
                  style={{
                    // padding: '24',
                    // margin: 0,
                    // height: contentHeight,
                    // overflowY: 'auto'
                  }}
                >
                  { currentContentComp && currentContentComp()}
                </Content>
              </Layout>
            </Layout>
        )
    }
}
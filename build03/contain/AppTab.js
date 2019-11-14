import React from 'react';

import { TabBar } from 'antd-mobile';
import AppHome from './AppHome';
import AppShop from './AppShop';
import AppInspire from './AppInspire';


export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
  }

  render() {
    return (
      <div style={{
        position: 'fixed',
        height: '100%',
        width: '100%',
        top: 0
      }}>
        <TabBar
          unselectedTintColor="#8a8a8a"   //没选中的颜色
          tintColor="#3fcccb"             //选中后的颜色
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url("./image/shouye.png") center center /  21px 21px no-repeat'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url("./image/clickone.png") center center /  21px 21px no-repeat'
            }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
            <AppHome />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url("./image/linggan.png") center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url("./image/clicktwo.png") center center /  21px 21px no-repeat'
              }}
              />
            }
            title="灵感"
            key="Koubei"
            // badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
            <AppInspire/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url("./image/shangcheng.png") center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url("./image/clickthree.png") center center /  21px 21px no-repeat'
              }}
              />
            }
            title="商城"
            key="friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <AppShop />
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: './image/my.png' }}
            selectedIcon={{ uri: './image/clickfour.png' }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            我的
            </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
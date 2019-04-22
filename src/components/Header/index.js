import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style';
import { Icon } from '../../statics/iconfont/iconfont.js';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem> 
          <SearchWrapper>
            <NavSearch></NavSearch>  
            <Icon className="iconfont iconfangdajing"></Icon> 
          </SearchWrapper>         
          <NavItem className="right">登录</NavItem>
          <NavItem className="right"><Icon className="iconfont iconAa"></Icon></NavItem>
          <Addition>
            <Button className="writting"><Icon className="iconfont iconicon-checkin"></Icon>写文章</Button>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav> 
      </HeaderWrapper>
    );
  }
}

export default Header;

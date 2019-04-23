import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style';
import { Icon } from '../../statics/iconfont/iconfont.js';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem> 
          <SearchWrapper>
            <CSSTransition
              in={this.state.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              ></NavSearch> 
            </CSSTransition> 
            <Icon className={this.state.focused ? 'focused iconfont iconfangdajing' : 'iconfont iconfangdajing'}></Icon> 
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

  handleInputFocus() {
    this.setState({
      focused: true
    })
  }

  handleInputBlur() {
    this.setState({
      focused: false
    })
  }
}

export default Header;

import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style';
import { Icon } from '../../statics/iconfont/iconfont.js';

const Header = (props) => {
  return(
    <HeaderWrapper>
    <Logo></Logo>
    <Nav>
      <NavItem className="left active">首页</NavItem>
      <NavItem className="left">下载App</NavItem> 
      <SearchWrapper>
        <CSSTransition
          in={props.focused}
          timeout={200}
          classNames="slide"
        >
          <NavSearch className={props.focused ? 'focused' : ''}
            onFocus={props.handleInputFocus}
            onBlur={props.handleInputBlur}
          ></NavSearch> 
        </CSSTransition> 
        <Icon className={props.focused ? 'focused iconfont iconfangdajing' : 'iconfont iconfangdajing'}></Icon> 
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

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

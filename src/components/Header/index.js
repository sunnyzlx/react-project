import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, 
  NavSearch, Addition, Button, SearchWrapper,
   SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style';
import { Icon } from '../../statics/iconfont/iconfont.js';
import { actionCreators } from './store'


class Header extends Component {
  getListArea() {
    if (this.props.focused) {
      return (
        <SearchInfo>
            <SearchInfoTitle>热门搜索
              <SearchInfoSwitch>换一批</SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
              { this.props.list.map((item) => {
                return (<SearchInfoItem key={item}>{item}</SearchInfoItem>)
              })}  
            </SearchInfoList>
          </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    return(
      <HeaderWrapper>
      <Logo></Logo>
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem> 
        <SearchWrapper>
          <CSSTransition
            in={this.props.focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch className={this.props.focused ? 'focused' : ''}
              onFocus={this.props.handleInputFocus}
              onBlur={this.props.handleInputBlur}
            ></NavSearch> 
          </CSSTransition> 
          <Icon className={this.props.focused ? 'focused iconfont iconfangdajing' : 'iconfont iconfangdajing'}></Icon> 
          {this.getListArea()}
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

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

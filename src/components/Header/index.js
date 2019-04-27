import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, 
  NavSearch, Addition, Button, SearchWrapper,
   SearchInfo, SearchInfoTitle, SearchInfoSwitch, 
   SearchInfoList, SearchInfoItem } from './style';
import { Icon } from '../../statics/iconfont/iconfont.js';
import { actionCreators } from './store';


class Header extends Component {
  getListArea() {

    // 使用解构赋值使代码更整洁
    const { focused, list, page, totalPage, mouseIn, handleChangeList } = this.props;
    const newList = list.toJS();
    const pageList = [];
    for (let i = (page - 1) * 10;  i< page * 10; i++ ) {
      pageList.push(
        <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
      )
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo>
            <SearchInfoTitle>热门搜索
              <SearchInfoSwitch onClick={() => handleChangeList(page, totalPage)}>换一批</SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
              {pageList}
            </SearchInfoList>
          </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, handleMouseEnter, handleMouseLeave } = this.props;
    return(
      <HeaderWrapper>
      <Logo></Logo>
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem> 
        <SearchWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <CSSTransition
            in={focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch className={focused ? 'focused' : ''}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></NavSearch> 
          </CSSTransition> 
          <Icon className={focused ? 'focused iconfont iconfangdajing' : 'iconfont iconfangdajing'}></Icon> 
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
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
      dispatch(actionCreators.mouseEnter())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      // dispatch(actionCreators.mouseEnter()) 
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangeList(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.changeList(page+1))
      } else {
        dispatch(actionCreators.changeList(1))
      }
      
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, 
  NavSearch, Addition, Button, SearchWrapper,
   SearchInfo, SearchInfoTitle, SearchInfoSwitch, 
   SearchInfoList, SearchInfoItem } from './style';
import { Icon } from '../../statics/iconfont/iconfont.js';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../Login/store';
import { Link } from 'react-router-dom';
 
class Header extends PureComponent {
  getListArea() {
    // 使用解构赋值使代码更整洁
    const { focused, list, page, totalPage, mouseIn, handleChangeList } = this.props;
    const newList = list.toJS();
    const pageList = [];
    for (let i = (page - 1) * 10;  i< page * 10; i++ ) {
      (newList[i]!==undefined) && pageList.push(
        <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
      )
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo>
            <SearchInfoTitle>热门搜索
              <SearchInfoSwitch onClick={() => handleChangeList(page, totalPage, this.spinIcon)}>
              <Icon ref={(icon) => this.spinIcon = icon} className="iconfont huan iconhuanyihuan"></Icon>
              换一批</SearchInfoSwitch>
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
    const { focused, handleInputFocus, handleInputBlur, handleMouseEnter, handleMouseLeave, list, login, handleLogout } = this.props;
    return(
      <HeaderWrapper>
      <Link to="/">
        <Logo></Logo>
      </Link>
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
              onFocus={ () => handleInputFocus(list) }
              onBlur={handleInputBlur}
            ></NavSearch> 
          </CSSTransition> 
          <Icon className={focused ? 'focused iconfont iconsousuo' : 'iconfont iconsousuo'}>&#xe60b;</Icon> 
          {this.getListArea()}
        </SearchWrapper>         
        { login ? <NavItem onClick={handleLogout} className="right">退出</NavItem> : <Link to="/login"><NavItem className="right">登录</NavItem></Link>}
        <NavItem className="right"><Icon className="iconfont iconAa"></Icon></NavItem>
        <Addition>
          <Button className="writting"><Icon className="iconfont iconqianbi"></Icon>写文章</Button>
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
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
    (list.size===0) && dispatch(actionCreators.getList())
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
    handleChangeList(page, totalPage, spinIcon) {
      let originAngle;
      if (spinIcon.style.transfrom!==undefined) {
        originAngle = spinIcon.style.transfrom.replace(/[^0-9]/ig, '');
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spinIcon.style.transfrom = 'rotate(' + (originAngle + 360)+ 'deg)';
      if (page < totalPage) {
        dispatch(actionCreators.changeList(page+1))
      } else {
        dispatch(actionCreators.changeList(1))
      } 
    },
    handleLogout() {
      console.log(789)
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

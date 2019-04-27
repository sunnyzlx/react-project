import styled from 'styled-components';
import LogoPic from './images/nav-logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/'
}) `
  float: left;
  height: 56px;
  width: 100px;
  background: url(${LogoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    top: 12px;
    font-size: 20px;
    width: 32px;
    line-height: 32px;
    border-radius: 50%;
    text-align: center;
    &.focused {
      background: #999;
    }
  }

`

export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  line-height: 38px;
  padding: 0 44px 0 20px;
  margin: 9px 0 9px 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  background: #eee;
  border-radius: 19px;
  font-size: 14px;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 260px;
  }
  &.slide-enter {
    width: 160px;
    transition: width .2s ease-out;
  } 

  &.slide-enter-active {
    width: 260px; 
  }

  &.slide-exit {
    width: 260px;
    transition: width .2s ease-out;    
  }

  &.slide-exit-active {
    width: 160px; 
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
`

export const SearchInfoTitle = styled.div`
  margin: 20px 0 15px 0;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
  .huan {
    display: block;
    margin-right: 50px;
    font-size: 16px;
    transition: all .2s ease-in;
    transfrom-origin: center center;
  }
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
`

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin: 0 10px 15px 0;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #787878;
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const Button = styled.div`
  float: right;
  box-sizing: border-box;
  margin: 11px 20px 0 0;
  padding: 6px 12px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  &.reg {
    color: #ea6f5a;
  }
  &.writting {
    color: #fff;
    background: #ea6f5a;
  }
`


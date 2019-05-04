import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeLoginStatus = () => ({
  type: actionTypes.LOGIN
})

const logout = () => ({
  type: actionTypes.LOGOUT
})

const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account='+ account + '&password=' + password).then(res => {
      const result = res.data.data;
      if (result) {
        dispatch(changeLoginStatus())
      } else {
        console.log('登录失败！')
      }
    })
  }
}

export { login, logout }

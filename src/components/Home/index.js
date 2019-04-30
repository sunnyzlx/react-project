import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight  } from './style';
import { List, Recommend, Topic, Writer } from './Component';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img"  alt="" src="//upload.jianshu.io/admin_banners/web_images/4653/d63edcaf954eced9ed5f9ad5ed6904f71c04edf4.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic></Topic>
          <List></List>        
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>        
          <Writer></Writer>        
        </HomeRight>
      </HomeWrapper>

    );
  }

  componentDidMount() {
    this.props.handleGetHomeData()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetHomeData() {
      dispatch(actionCreators.getHomeData())
    }
  }
}

export default connect(null, mapDispatchToProps)(Home);

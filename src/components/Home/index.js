import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight  } from './style';
import { List, Recommend, Topic, Writer } from './Component';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { BackTop } from './style';

class Home extends PureComponent {
  handdleScrollTop() {
    window.scrollTo(0, 0);
  }
  render() {
    const { showScroll } = this.props
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
        {
          showScroll ? <BackTop onClick={this.handdleScrollTop}>回到顶部</BackTop> : null
        }
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.handleGetHomeData()
    this.bindEvents()
  }

  componentWillMount() {
    this.props.handleGetHomeData()
    this.removeEvents()
  }

  bindEvents() {
    const { changeScrollTopShow } = this.props
    window.addEventListener('scroll', changeScrollTopShow)
  }

  removeEvents() {
    const { changeScrollTopShow } = this.props
    window.removeEventListener('scroll', changeScrollTopShow)
  }

}
const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetHomeData() {
      dispatch(actionCreators.getHomeData())
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreators.toggleScrollTopShow(true))
      } else {
        dispatch(actionCreators.toggleScrollTopShow(false))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

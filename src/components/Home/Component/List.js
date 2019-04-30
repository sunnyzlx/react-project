import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';

class List extends Component {
  render() {
    const { articleList, articlePage, handleGetMoreList } = this.props;
    return (
      <div>
      {
        articleList.map((item, index) => {
          return (
            <ListItem key={index}>
              <img 
                className='list-pic'
                alt='' 
                src={item.get('imgUrl')}/>
              <ListInfo>
                <h3 className='title'>{item.get('title')}</h3>
                <p className='desc'>{item.get('desc')}</p>
              </ListInfo>
          </ListItem>
          );
        })
      }
      <LoadMore onClick={() => handleGetMoreList(articlePage)}>更多文字</LoadMore>
      </div> 
    );
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  articlePage: state.getIn(['home', 'articlePage'])
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetMoreList(page) {
      dispatch(actionCreators.getMoreList(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

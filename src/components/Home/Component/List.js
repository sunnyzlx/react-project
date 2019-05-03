import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';

class List extends PureComponent {
  render() {
    const { articleList, articlePage, handleGetMoreList } = this.props;
    return (
      <div>
      {
        articleList.map((item, index) => {
          return (
            <Link key={index} to={"/detail/"+item.get('id')}>
              <ListItem >
                <img 
                  className='list-pic'
                  alt='' 
                  src={item.get('imgUrl')}/>
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
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

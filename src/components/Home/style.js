import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  float: right;
  width: 240px;
`

// Topic
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  // border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  margin: 0 0 18px 18px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #f7f7f7;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`
//  list

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-pic {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
  &:first-child {
    border-top: 1px solid #dcdcdc;
  }
`

export const ListInfo = styled.div`
  width: 480px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`

// recommend
export const RecommendWrapper = styled.div`
  width: 240px;
  margin: 30px 0;
`

export const RecommendItem = styled.div`
  width: 240px;
  height: 46px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`

// writer
export const WriterWrapper = styled.div`
  width: 238px;
  height: 300px;
  line-height: 300px;
  text-align: center;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
`

// 加载更多
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 30px 0;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`
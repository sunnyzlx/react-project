import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
		id: 1,
		title: '社会热点',
		imgUrl: '//upload.jianshu.io/admin_banners/web_images/4653/d63edcaf954eced9ed5f9ad5ed6904f71c04edf4.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
	},{
		id: 2,
		title: '社会热点',
		imgUrl: '//upload.jianshu.io/admin_banners/web_images/4653/d63edcaf954eced9ed5f9ad5ed6904f71c04edf4.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  }]
})

export default (state = defaultState, action) => {
  switch(action.type)  {
    default:
      return state;
  }
}

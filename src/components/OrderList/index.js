import React, { Component, Fragment }  from 'react';
import OrderItem from '../OrderItem';

class OrderList extends Component {
  render() {
    return (
      <Fragment>
        <div>OrderList</div>
        <OrderItem></OrderItem>
      </Fragment>
    );
  }
}

export default OrderList;


import React, { Component } from 'react';

class Balance extends Component {
  render() {
    const { balance } = this.props;
    console.log(this.props.balance);
    return (
      <div className="mb-4">
        <h2>Current Balance: <span className='badge-success'>{balance.toFixed(2)}</span></h2>
      </div>
    );
  }
}

export default Balance;



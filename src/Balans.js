
import React, { Component } from 'react';

//Component Balance only displays the current balance that it receives from the prop from App
class Balance extends Component {
  render() {
    const { balance } = this.props;
    return (
      <div className="mb-4">
        <h2>Current Balance: <span className='badge-success'>{balance.toFixed(2)}</span></h2>
      </div>
    );
  }
}

export default Balance;



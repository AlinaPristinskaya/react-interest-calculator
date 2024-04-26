import React, { Component } from 'react';
import Balance from './Balans';
import TransactionForm from './TransitionForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 6000,
      isNegative: false
    };
  }

  updateBalance = (newBalance) => {
    this.setState({ 
      balance: newBalance,
      isNegative: newBalance < 0 
    });
  }

  handleDeposit = (amount) => {
    this.updateBalance(this.state.balance + parseFloat(amount));
  }

  handleWithdraw = (amount) => {
    this.updateBalance(this.state.balance - parseFloat(amount));
  }

  handleAddInterest = (rate) => {
    const interest = this.state.balance * parseFloat(rate) / 100;
    this.updateBalance(this.state.balance + interest);
  }

  handleChargeFees = () => {
    console.log(this.state.balance);
    const fees= this.state.balance * 3 /100
    this.updateBalance(this.state.balance - fees);
    console.log(this.state.balance);
  }

  render() {
    const { balance, isNegative } = this.state;
    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">Banking Application</h1>
        {isNegative && (
          <div className="alert alert-danger" role="alert">
            Attention: Your balance is negative!
          </div>
        )}
        <Balance balance={balance} />
        <TransactionForm
          onDeposit={this.handleDeposit}
          onWithdraw={this.handleWithdraw}
          onAddInterest={this.handleAddInterest}
          onChargeFees={this.handleChargeFees}
        />
      </div>
    );
  }
}

export default App;



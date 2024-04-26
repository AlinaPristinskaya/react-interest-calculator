import React, { Component } from 'react';
import Balance from './Balans';
import TransactionForm from './TransitionForm';

// component App is class component stores a state with a balance and 
//a variable with a Boolean value to display a notification about a negative balance,
// and functions for processing data that it transmits as props to components Balance and TransactionForm
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
  // the function adds the deposit amount to the currently displayed bank balance
  handleDeposit = (amount) => {
    this.updateBalance(this.state.balance + parseFloat(amount));
  }
 // function removes the entered amount from the currently displayed balance
  handleWithdraw = (amount) => {
    this.updateBalance(this.state.balance - parseFloat(amount));
  }
  // The function receives a percentage of the current balance
  // calculates how much it is in £ and adds to the current balance
  handleAddInterest = (rate) => {
    const interest = this.state.balance * parseFloat(rate) / 100;
    this.updateBalance(this.state.balance + interest);
  }
  //The function subtracts 3% from the current balance
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



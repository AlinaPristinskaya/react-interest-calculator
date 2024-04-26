import React, { Component } from "react";
import Stack from "react-bootstrap/Stack";

// Conponent TransactionForm has its own state amount interestRate and button click functions
// that simply pass data if it is needed to trigger methods in App and displays inputs and buttons

class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      interestRate: "",
    };
  }

  handleDeposit = () => {
    if (this.state.amount) {
      this.props.onDeposit(this.state.amount);
      this.setState({ amount: "" });
    }
  };

  handleWithdraw = () => {
    if (this.state.amount) {
      this.props.onWithdraw(this.state.amount);
      this.setState({ amount: "" });
    }
  };

  handleAddInterest = () => {
    if (this.state.interestRate) {
      this.props.onAddInterest(this.state.interestRate);
      this.setState({ interestRate: "" });
    }
  };

  handleChargeFees = () => {
    this.props.onChargeFees();
   
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { amount, interestRate } = this.state;
    return (
      <Stack gap={3}>
        <div className="form-group">
          <input
            type="number"
            className="form-control mb-2"
            placeholder="Enter amount"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary me-2" onClick={this.handleDeposit}>
            Deposit
          </button>
          <button className="btn btn-primary" onClick={this.handleWithdraw}>
            Withdraw
          </button>
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control mb-2"
            placeholder="Enter interest rate"
            name="interestRate"
            value={interestRate}
            onChange={this.handleChange}
          />
          <button
            className="btn btn-success me-2"
            onClick={this.handleAddInterest}
          >
            Add Interest
          </button>
        </div>
        <div className="form-group">
          <button className="btn btn-success" onClick={this.handleChargeFees}>
          Charge bank fees 3%
          </button>
        </div>
      </Stack>
    );
  }
}

export default TransactionForm;

import React, { Component } from "react";

export const StockContext = React.createContext();

class MyContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickerValue: "aapl",
    };
  }

  updateTickerValue = (newValue) => {
    this.setState({ tickerValue: newValue });
  };
  render() {
    const contextTickerValue = {
      tickerValue: this.state.tickerValue,
      updateTickerValue: this.updateTickerValue,
    };
    return (
      <StockContext.Provider value={contextTickerValue}>
        {this.props.children}
      </StockContext.Provider>
    );
  }
}

export default MyContext;

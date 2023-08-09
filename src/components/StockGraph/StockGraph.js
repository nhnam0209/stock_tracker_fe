import React, { Component } from "react";
import { dataIex } from "../../config/iex";
import Plot from "react-plotly.js";
import { StockContext } from "../../context/stockContext";

export default class StockGraph extends Component {
  static contextType = StockContext;
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
    };
  }

  componentDidMount() {
    this.fetchStock();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.context.tickerValue !== prevProps.tickerValue) {
      this.fetchStock();
    }
  }

  fetchStock() {
    const url = `${dataIex.base_url}historical_prices/${this.context.tickerValue}?range=2m&token=${dataIex.api_token}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.map((item) => stockChartXValuesFunction.push(item.priceDate));
        data.map((item) => stockChartYValuesFunction.push(item.open));
        this.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartYValuesFunction,
        });
      });
  }

  render() {
    return (
      <StockContext.Consumer>
        {(context) => (
          <div>
            <h1>Stock Graph of {context.tickerValue} by Time</h1>
            <Plot
              data={[
                {
                  x: this.state.stockChartXValues,
                  y: this.state.stockChartYValues,
                  type: "scatter",
                  mode: "lines+markers",
                  marker: { color: "red" },
                },
              ]}
              layout={{ width: 720, height: 440, title: "2 Months Graph" }}
            />
          </div>
        )}
      </StockContext.Consumer>
    );
  }
}

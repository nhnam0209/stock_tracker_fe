import React, { Component } from "react";
import { stock } from "../../resources/stock";
import { dataIex } from "../../config/iex";

export default class StockGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHistory: [],
      stockChartXValues: [],
      stockChartYValues: [],
    };
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const url = `${dataIex.base_url}historical_prices/${this.props.ticker}?range=2m&token=${dataIex.api_token}`;
    let stockChartData = [];
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        stockChartData.push(data);
      });

    this.setState({ dataHistory: stockChartData });
    console.log(this.state.dataHistory);
    // let stockChartXValuesFunction = [];
    // let stockChartYValuesFunction = [];
  }

  render() {
    return;
  }
}

import React, { Component } from "react";
import StockTable from "../components/StockTable/StockTable";
import StockGraph from "../components/StockGraph/StockGraph";

export default class HomePage extends Component {
  render() {
    const tickerData = [
      { id: 1, name: "aapl" },
      { id: 2, name: "goog" },
      { id: 3, name: "msft" },
      { id: 4, name: "tsla" },
      { id: 5, name: "pltr" },
      { id: 6, name: "amzn" },
      { id: 7, name: "amd" },
      { id: 8, name: "nvda" },
      { id: 9, name: "pfe" },
      { id: 10, name: "wbd" },
    ];
    return (
      <div className="grid grid-cols-1 lg:grid-cols-6">
        <div className="lg:col-span-4">
          <StockGraph ticker="aapl" />
        </div>
        <div className="lg:col-span-2">
          <StockTable tickerData={tickerData} />
        </div>
      </div>
    );
  }
}

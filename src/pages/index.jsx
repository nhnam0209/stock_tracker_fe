import React, { Component } from "react";
import StockTable from "../components/StockTable/StockTable";
import StockGraph from "../components/StockGraph/StockGraph";

export default class HomePage extends Component {
  render() {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-6">
        <div className="lg:col-span-4">
          <StockGraph ticker="msft" />
        </div>
        <div className="lg:col-span-2">
          <StockTable />
        </div>
      </div>
    );
  }
}

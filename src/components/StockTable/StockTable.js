import React, { Component } from "react";
import StockRow from "../StockRow/StockRow.js";

export default class StockTable extends Component {
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
    const RowStock = tickerData.map((item) => {
      return <StockRow ticker={item.name} key={item.id} />;
    });

    return (
      <div className="">
        <div className="col-md-5 mt-5">
          <table>
            <thead>
              <tr className="w-full">
                <th className="p-2">Symbol</th>
                <th className="p-2">Last Price</th>
                <th className="p-2">Change</th>
                <th className="p-2">Change%</th>
              </tr>
            </thead>
            {RowStock}
          </table>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import StockRow from "../StockRow/StockRow.js";

export default class StockTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickerData: [],
    };
  }
  render() {
    const RowStock = this.props.tickerData.map((item) => {
      return <StockRow ticker={item.name} key={item.id} />;
    });

    return (
      <div className="w-full mx-2 flex justify-center lg:flex lg:justify-start">
        <div className="col-md-5 mt-5">
          <table>
            <thead className="w-full">
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

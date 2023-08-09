import React, { Component } from "react";
import { stock } from "../../resources/stock";

const changeStyle = {
  fontSize: "0.8rem",
  marginLeft: "5px",
};
export default class StockRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: null,
      date: null,
      time: null,
      dollar_change: null,
      percent_change: null,
    };
  }

  applyData(data) {
    this.setState({
      price: data.price,
      date: data.date,
      time: data.time,
    });
    stock.getYesterdaysClose(this.props.ticker, data.date, (yesterday) => {
      const dollar_change = (data.price - yesterday.price).toFixed(2);
      const percent_change = ((100 * dollar_change) / yesterday.price).toFixed(
        1
      );
      this.setState({
        dollar_change: `${dollar_change}`,
        percent_change: `(${percent_change}%)`,
      });
    });
  }

  componentDidMount() {
    stock.latestPrice(this.props.ticker, this.applyData.bind(this));
  }
  render() {
    const checkLoss = `${
      this.state.dollar_change < 0 ? "text-red-500" : "text-[#4caf50]"
    }`;

    return (
      <tbody>
        <tr className="w-full border-b-2">
          <td className="p-2 w-24">
            <span className="w-full flex justify-start text-left">
              {" "}
              <b>{this.props.ticker}</b>
            </span>
          </td>
          <td className="p-2 w-24 text-right">
            <span className="w-full">${this.state.price}</span>
          </td>
          <td className="p-2 w-24 text-right">
            <span className={checkLoss}> {this.state.dollar_change}</span>
          </td>
          <td className="p-2 w-24 text-right">
            <span className={checkLoss}>{this.state.percent_change}</span>
          </td>
        </tr>
      </tbody>
    );
  }
}

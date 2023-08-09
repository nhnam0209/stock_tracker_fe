import { dataIex, iex } from "../config/iex";

export const stock = {
  latestPrice: (ticker, callback) => {
    const url = stock.latestPriceURL(ticker);
    fetch(url)
      .then((response) => response.json())
      .then((data) => callback(stock.formatPriceData(data)));
  },

  historyData: (ticker) => {
    const url = stock.historyDataURL(ticker);
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  },

  latestPriceURL: (ticker) => {
    return `${iex.base_url}/stock/${ticker}/chart/5y?chartLast=1&token=${iex.api_token}`;
  },

  historyDataURL: (ticker) => {
    return `${dataIex.base_url}/historical_prices/${ticker}?range=2m&token=${dataIex.api_token}`;
  },

  formatPriceData: (data) => {
    const stockData = data[data.length - 1];
    const formattedData = {};
    formattedData.price =
      stockData.close == null ? stockData.marketClose : stockData.close;
    formattedData.date = stockData.date;
    formattedData.time =
      stockData.label !== "04:00 PM" ? "04:00 PM" : stockData.label;
    return formattedData;
  },

  getYesterdaysClose: (ticker, date, callback) => {
    stock.getLastTradingDate(date).then((data) => {
      fetch(stock.yesterdaysCloseURL(ticker, date))
        .then((response) => response.json())
        .then((data) => callback(stock.formatPriceData(data)));
    });
  },

  getLastTradingDate: async (date) => {
    var today = new Date(date).toISOString().split("T")[0].replace(/-/g, "");
    const url = `${iex.base_url}/ref-data/us/dates/trade/last/1/${today}?token=${iex.api_token}`;
    const res = await fetch(url);
    const message = await res.json();
    return message;
  },

  yesterdaysCloseURL: (ticker, lastTradingDate) => {
    return `${iex.base_url}/stock/${ticker}/chart/date/20230801?chartLast=1&token=${iex.api_token}`;
    // return `${iex.base_url}/stock/${ticker}/quote/`;
  },
};

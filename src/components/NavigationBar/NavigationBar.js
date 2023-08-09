import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="w-full p-4">
        <div className="flex justify-start">
          <Link to="/" className="text-3xl font-bold">
            Stock Market
          </Link>
        </div>
      </div>
    );
  }
}

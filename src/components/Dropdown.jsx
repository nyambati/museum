import React from "react";
import { connect } from "react-redux";
import { deleteChart } from "../store/charts";

const Dropdown = props => (
  <div className="dropdown-menu" aria-labelledby="chart_dropdown">
    <a className="dropdown-item">Some Action</a>
    <a className="dropdown-item" onClick={() => props.deleteChart(props.chart)}>
      Remove
    </a>
    <a className="dropdown-item">versions</a>
  </div>
);

export default connect(
  null,
  { deleteChart }
)(Dropdown);

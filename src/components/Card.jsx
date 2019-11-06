import React from "react";
import { withRouter } from "react-router-dom";
import icon from "../assets/default-icon.jpeg";
import DropDown from "./Dropdown";

export default withRouter(({ footer, chart, history }) => {
  return (
    <div className="card border-light mb-3">
      <img
        src={chart.icon || icon}
        alt=""
        srcSet=""
        className="card-img-top"
        onClick={() =>
          history.push(`/view/${chart.name}?version=${chart.version}`)
        }
      />
      {footer && (
        <div className="card-footer d-flex justify-content-between">
          {chart.name} {chart.version}
          {/* <i className="material-icons" onClick={() => console.log("Delete")}>
            more_vert
          </i> */}
          <div className="dropdown show">
            <i
              className="material-icons"
              // role="button"
              id="chart_dropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              more_vert
            </i>
            <DropDown chart={chart} />
          </div>
        </div>
      )}
    </div>
  );
});

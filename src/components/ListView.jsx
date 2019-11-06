import React from "react";
import moment from "moment";
import Dropdown from "./Dropdown";

export default props => (
  <div className="mb-3">
    <table className="table table-hover">
      <tbody>
        {props.data.slice(props.start, props.end).map(chart => (
          <tr key={chart.name} className="list_view_item">
            <th scope="row">
              <i className="material-icons">insert_drive_file</i>
            </th>
            <td>{chart.name}</td>
            <td>version {chart.version}</td>
            <td>{moment(chart.created).fromNow()}</td>
            <td className="list_view_action">
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

              <Dropdown chart={chart} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

import React from 'react'
import moment from 'moment';

export default (ListView = (props) => (
  <div className="mb-3">
    <table className="table table-hover">
      <tbody>
        {props.data.slice(props.start, props.end).map((chart) => (
          <tr key={chart.version} className="list_view_item">
            <th scope="row">
              <i className="material-icons">insert_drive_file</i>
            </th>
            <td>{chart.name}</td>
            <td>version {chart.version}</td>
            <td>{moment(chart.created).fromNow()}</td>
            <td className="list_view_action">
              <i className="material-icons">more_vert</i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
))

import React from 'react'
import Card from './Card';

export default (CardView = (props) => (
  <div className="row">
    {props.data.slice(props.start, props.end).map((chart) => (
      <div className="col-sm-3" key={chart.name}>
        <Card footer={true} chart={chart} />
      </div>
    ))}
  </div>
))

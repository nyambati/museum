import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchChartByVersion } from "../store/charts";
import moment from "moment";

class VewChart extends React.Component {
  state = {
    versions: []
  };

  componentDidMount() {
    const { location, match } = this.props;
    const search = new URLSearchParams(location.search);
    this.props.fetchChartByVersion(match.params.name, search.get("version"));
  }

  render() {
    const { chart, error } = this.props;
    return (
      <div id="chart_view">
        <div className="container">
          <div className="card  mb-3">
            <div className="card-body">
              <h4 className="card-title">{chart.name}</h4>
              <p className="card-text">{chart.description}</p>
            </div>
          </div>

          {error && (
            <div className="alert alert-dismissible alert-danger container mb-3 mt-3">
              <button type="button" className="close" data-dismiss="alert">
                &times;
              </button>
              <strong>Oh snap!</strong> {error}
            </div>
          )}

          <div className="row">
            <div className="col-sm-8">
              <div className="card  mb-3">
                <div className="card-header">
                  {chart.name} version {chart.versions}, created{" "}
                  {moment(chart.created).fromNow()}
                </div>
                <div className="card-body">
                  <h4 className="card-title">Application Version</h4>
                  <p className="card-text">{chart.appVersion}</p>
                  <h4>Home Website</h4>
                  <p className="card-text">
                    <a href={chart.home}>{chart.home}</a>
                  </p>
                  <h4>Sources</h4>
                  <ul>
                    {chart.sources.map(source => (
                      <li key={source}>
                        <a href={source} target="_blank">
                          {source}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card  mb-3">
                <div className="card-body">
                  <h4 className="card-title"> Chart Versions</h4>
                  <ul>
                    {chart.versions.map(version => (
                      <li key={version}>
                        <Link to={`/view/${chart.name}?version=${version}`}>
                          {version}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <h4>Home Website</h4>
                  <p className="card-text">
                    <a href={chart.home} target="_blank">
                      {chart.home}
                    </a>
                  </p>
                  <h4>Key Words</h4>
                  <ul>
                    {chart.keywords.map(word => (
                      <li key={word}>{word}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

VewChart.defaultProps = {
  chart: {
    keywords: [],
    sources: [],
    maintainers: [],
    versions: []
  }
};

const mapStateToProps = state => ({
  chart: state.chart,
  error: state.errors.chart
});

export default connect(
  mapStateToProps,
  { fetchChartByVersion }
)(VewChart);

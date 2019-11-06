import React, { useState } from "react";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import CardView from "./CardView";
import ListView from "./ListView";
const ChartList = props => {
  const [activePage, setActivePage] = useState(1);
  const [itemsCountPerPage] = useState(8);
  const start = (activePage - 1) * itemsCountPerPage;
  const end = start + itemsCountPerPage;
  const _charts = props.charts.slice(5, props.charts.length);
  return (
    <div>
      {props.listView ? (
        <ListView data={_charts} start={start} end={end} />
      ) : (
        <CardView data={_charts} start={start} end={end} />
      )}
      {props.charts.length > 13 && (
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={props.charts.length}
          pageRangeDisplayed={5}
          onChange={page => setActivePage(page)}
          itemClass={"page-item bg-light"}
          linkClass={"page-link"}
        />
      )}
    </div>
  );
};

ChartList.defaultProps = {
  charts: [],
  listView: false
};

const mapStateToProps = state => ({ charts: state.charts });

export default connect(
  mapStateToProps,
  {}
)(ChartList);

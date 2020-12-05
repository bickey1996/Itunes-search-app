import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SearchBar from "../../components/search-bar/index";
import Filter from "../../components/filter/filter";
import NoResults from "../../components/no-results/No-results";

class Home extends Component {
  render() {
    return (
      <div className="mainBody">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <SearchBar onSearchSubmit={this.props.search} />
              {this.props.data <= 0 ? <NoResults /> : null}
              <Filter data={this.props.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state,
});
const mapDispatchToProps = (dispatch) => ({
  search: (searchText) =>
    dispatch({ type: "FETCH_DATAS", searchText: searchText }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

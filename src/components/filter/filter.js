import React, { Component } from "react";
import "./filter.css";
import ArtistsCard from "../cards/artists/ArtistsCard";
import PropTypes from "prop-types";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
    };
  }

  render() {
    console.log(this.props);
    return (
      <div className="filter">
        <div className="Artists-holder">
          {this.props.data
            ? this.props.data.data.map((item, index) => {
                return <ArtistsCard key={index} data={item} />;
              })
            : null}
        </div>
      </div>
    );
  }
}
Filter.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.array,
  }),
};
export default Filter;

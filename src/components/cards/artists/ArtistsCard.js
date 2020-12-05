import React, { Component } from "react";
import "./ArtistsCard.css";
import moment from "moment";
import PropTypes from "prop-types";

class ArtistsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreviewVisible: false,
      isPlaying: false,
    };
  }

  playVideo() {
    this.setState({
      isPreviewVisible: !this.state.isPreviewVisible,
      isPlaying: !this.state.isPlaying,
    });

    let audios = document.getElementsByTagName("audio");
    for (let i = 0, len = audios.length; i < len; i++) {
      // if(audios[i] != e.target){
      audios[i].pause();
      //}
    }
  }

  render() {
    const imageUrl = this.props.data.artworkUrl100;
    const formattedDate = moment(this.props.data.releaseDate).format(
      "DD MMM YY"
    );

    return (
      <div className="artists-card" data-test="ArtistCard">
        <div className="artists-holder">
          <div className="poster-holder">
            <div
              className={
                "image-poster " +
                (this.state.isPreviewVisible ? "artists-preview-show" : "")
              }
              style={{ backgroundImage: `url(${imageUrl})` }}
            >
              <div
                className="artists-preview"
                onClick={this.playVideo.bind(this)}
              >
                {this.state.isPlaying ? "Stop" : "Preview"}
              </div>
            </div>
          </div>
          <div className="artists-data">
            <h2>{this.props.data.artistName}</h2>
            <div className="artists-scrollable">
              <p>
                <b>Release Date </b>: {formattedDate}
              </p>
              <p>
                <b>Collection </b>: {this.props.data.collectionName}
              </p>
              {this.props.data.shortDescription ? (
                <p>
                  <b>Description </b>: {this.props.data.longDescription}{" "}
                </p>
              ) : null}
            </div>
          </div>

          {this.state.isPreviewVisible ? (
            <audio controls autoPlay>
              <source
                src={this.props.data.previewUrl}
                type="audio/ogg"
              ></source>
              <source
                src={this.props.data.previewUrl}
                type="audio/mpeg"
              ></source>
            </audio>
          ) : null}
        </div>
      </div>
    );
  }
}

ArtistsCard.propTypes = {
  data: PropTypes.shape({
    artworkUrl100: PropTypes.string,
    previewUrl: PropTypes.string,
    collectionName: PropTypes.string,
    shortDescription: PropTypes.string,
    longDescription: PropTypes.string,
    artistName: PropTypes.string,
  }),
};

export default ArtistsCard;

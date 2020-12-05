import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../../Utils";
import ArtistsCard from "./ArtistsCard";

const setUp = (props = {}) => {
  const component = shallow(<ArtistsCard {...props} />);
  return component;
};

describe("ArtistCard Component", () => {
  let component;
  beforeEach(() => {
    const props = {
      data: {
        artworkUrl100:
          "https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/71/4f/ae/714fae6c-4b65-be48-dd40-b0727ce28b4e/source/100x100bb.jpg",

        collectionName: "Nmnm - Single",

        collectionViewUrl:
          "https://music.apple.com/us/album/nmnm/1495725851?i=1495725856&uo=4",

        kind: "song",
        previewUrl:
          "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/69/3b/12/693b1247-6717-9efc-cd3c-8d48278cd43b/mzaf_1054938534801549824.plus.aac.p.m4a",

        releaseDate: "2020-05-15T12:00:00Z",
        trackCensoredName: "Nmnm",

        trackName: "Nmnm",

        trackViewUrl:
          "https://music.apple.com/us/album/nmnm/1495725851?i=1495725856&uo=4",
      },
    };
    component = setUp(props);
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "ArtistCard");
    expect(wrapper.length).toBe(1);
  });
});

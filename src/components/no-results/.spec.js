import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../Utils";
import NoResults from "./No-results";

const setUp = (props = {}) => {
  const component = shallow(<NoResults {...props} />);
  return component;
};

describe("NoResults Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "No-Results");
    expect(wrapper.length).toBe(1);
  });
});

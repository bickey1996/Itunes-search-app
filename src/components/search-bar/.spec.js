import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../Utils";
import SearchBar from "./index";

const setUp = (props = {}) => {
  const component = shallow(<SearchBar {...props} />);
  return component;
};

describe("SearchBar Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "searchInput");
    expect(wrapper.length).toBe(1);
  });
});

describe("FilterTabs Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "tabButton");
    expect(wrapper.length).toBe(7);
  });
});

import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";

import Logos from "./logos";

const setupTest = () => render(<Logos />);

describe("Logos", () => {
  afterEach(cleanup);
  it("sould render the logos", () => {
    const { getAllByRole } = setupTest();
    expect(getAllByRole("img")).toHaveLength(4);
  });
  it("sould render the yarn logo", () => {
    const { getByAltText } = setupTest();
    expect(getByAltText("yarn logo")).toHaveClass("yarnLogo");
  });
  it("sould render the webpack logo", () => {
    const { getByAltText } = setupTest();
    expect(getByAltText("webpack logo")).toHaveClass("webpackLogo");
  });
  it("sould render the testing library logo", () => {
    const { getByAltText } = setupTest();
    expect(getByAltText("testing library logo")).toHaveClass("testingLibraryLogo");
  });
  it("sould render the jest logo", () => {
    const { getByAltText } = setupTest();
    expect(getByAltText("jest logo")).toHaveClass("jestLogo");
  });
});

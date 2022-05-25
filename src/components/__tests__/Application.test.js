import React from "react";

/*
  We import the component that we are testing
*/

import { render, cleanup } from "@testing-library/react";

import Application from "components/Application";

afterEach(cleanup);

/*
  A test that renders a React Component
*/

it("renders without crashing", () => {
  render(<Application />);
});

import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";

beforeEach(() => {
  render(<App />);
});

test("Should Mount", async () => {
  const headingElement = screen.getByText("NY Times Most Popular");
  expect(headingElement).toBeInTheDocument();
});

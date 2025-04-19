import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    level: 1,
    name: /hi, i'm/i, 
  });
  expect(heading).toBeInTheDocument();
});

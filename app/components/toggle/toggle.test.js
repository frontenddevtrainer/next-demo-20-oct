import { render, screen, fireEvent } from "@testing-library/react";
import Toggle from "./toggle.component";

test("Loading Toggle component", () => {
  render(<Toggle />);

  expect(screen.getByText("Status: No")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button"), { name: /no/i });

  expect(screen.getByText("Status: Yes")).toBeInTheDocument();

});

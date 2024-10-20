import { render, screen, waitFor } from "@testing-library/react";
import PeopleComponent from "./people.component";

const mockPeopleList = [{ name: "Amit" }];

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockPeopleList),
  });
});

test("Fetch and render component", async () => {
  render(<PeopleComponent />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await waitFor(() => {
    return expect(screen.getByText("Amit")).toBeInTheDocument();
  });

  expect(global.fetch).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/users"
  );
});

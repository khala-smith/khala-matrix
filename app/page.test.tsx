import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
  it("renders the primary hero headline", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /ship secure connections/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/kha-5 builds a hardened tunnel/i),
    ).toBeInTheDocument();
  });
});

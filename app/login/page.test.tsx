import { render, screen } from "@testing-library/react";
import LoginPage from "./page";

describe("Login page", () => {
  it("renders login form fields and actions", () => {
    render(<LoginPage />);

    expect(
      screen.getByRole("heading", { name: /welcome back/i }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign in to dashboard/i }),
    ).toBeInTheDocument();
  });
});

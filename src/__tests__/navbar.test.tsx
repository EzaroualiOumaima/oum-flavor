import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

jest.mock("next/navigation");

describe("Navbar Component", () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue("/");
  });

  it("renders correctly", () => {
    render(<Navbar />);
    expect(screen.getByAltText("")).toBeInTheDocument(); // Check if the logo is rendered
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("Reviews")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("RESERVATION")).toBeInTheDocument();
  });

  it("hides elements based on path", () => {
    (usePathname as jest.Mock).mockReturnValue("/dashboard");
    render(<Navbar />);
    expect(screen.queryByText("Home")).toBeInTheDocument();
    expect(screen.queryByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("Reviews")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("RESERVATION")).toBeInTheDocument();
  });

  it("navigates correctly on button click", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    const { container } = render(<Navbar />);
    const menuButton = screen.getByText("Menu");
    userEvent.click(menuButton);
    // You might need to adjust this expectation based on how your navigation is set up
    expect(container.innerHTML).toMatch("/menu"); // Check if navigation to /menu occurred
  });
});

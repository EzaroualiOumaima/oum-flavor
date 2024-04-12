import React from "react";
import { render } from "@testing-library/react";
import AboutPage from "@/components/AboutPage";
describe("AboutPage component", () => {
  test("renders AboutPage component", () => {
    const { getByText, getByAltText } = render(<AboutPage />);

    // Check if the title "About Us" is rendered
    const titleElement = getByText("About Us");
    expect(titleElement).toBeInTheDocument();

    // Check if the paragraph content is rendered
    const paragraphElement = getByText(/Welcome to Oum Flavor/);
    expect(paragraphElement).toBeInTheDocument();

    // Check if the images are rendered
    const topImage = getByAltText("img1");
    expect(topImage).toBeInTheDocument();

    const underImage = getByAltText("img2");
    expect(underImage).toBeInTheDocument();
  });
});

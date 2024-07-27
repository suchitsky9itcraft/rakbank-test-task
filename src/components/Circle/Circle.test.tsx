import { render, screen } from "@testing-library/react";
import Circle from "./";

describe("Circle Component", () => {
  it("should render with default props", () => {
    render(<Circle />);

    const circle = screen.getByTestId("circle");
    expect(circle).toHaveStyle("width: 12px");
    expect(circle).toHaveStyle("height: 12px");
    expect(circle).toHaveClass("bg-white");
    expect(circle).toHaveClass("flex");
    expect(circle).toHaveClass("items-center");
    expect(circle).toHaveClass("justify-center");
    expect(circle).toHaveClass("rounded-full");
  });

  it("should render with custom size and color", () => {
    render(<Circle size={24} color="blue" filled={false} />);

    const circle = screen.getByTestId("circle");
    expect(circle).toHaveStyle("width: 24px");
    expect(circle).toHaveStyle("height: 24px");
    expect(circle).toHaveClass("border-2");
    expect(circle).toHaveClass("border-blue");
    expect(circle).not.toHaveClass("bg-blue");
  });
});

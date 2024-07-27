import { render, screen, fireEvent } from "@testing-library/react";
import Reactions from "./";

describe("Reactions Component", () => {
  const mockItems = [
    { reaction: "Like", icon: "👍", tooltip: "Like this post" },
    { reaction: "Love", icon: "❤️", tooltip: "Love this post" },
    { reaction: "Haha", icon: "😂", tooltip: "Haha this post" },
  ];

  it("should render all reaction items correctly", () => {
    const handleClick = jest.fn();

    render(<Reactions items={mockItems} onClick={handleClick} />);

    mockItems.forEach((item) => {
      expect(screen.getByText(item.icon)).toBeInTheDocument();
      expect(screen.getByText(item.tooltip)).toBeInTheDocument();
    });
  });

  it("should call onClick with the correct icon when a reaction is clicked", () => {
    const handleClick = jest.fn();

    render(<Reactions items={mockItems} onClick={handleClick} />);

    fireEvent.click(screen.getByText("👍"));

    expect(handleClick).toHaveBeenCalledWith("👍");
  });

  it("should handle hover state correctly", () => {
    render(<Reactions items={mockItems} onClick={() => {}} />);

    mockItems.forEach((item) => {
      expect(screen.getByText(item.tooltip)).toHaveClass("opacity-0");
    });

    fireEvent.mouseOver(screen.getByText("👍"));

    expect(screen.getByText("Like this post")).toHaveClass("group-hover:opacity-100");
  });
});

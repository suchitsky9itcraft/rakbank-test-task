import React from "react";
import { render, screen } from "@testing-library/react";
import Answers from "./";

const mockAnswers = [
  {
    text: "Answer 1",
    id: 1,
    answer: "Yes",
    reactions: [
      { reaction: "Like", icon: "👍", tooltip: "Like this answer" },
      { reaction: "Love", icon: "❤️", tooltip: "Love this answer" },
    ],
  },
  {
    text: "Answer 2",
    id: 2,
    answer: "No",
    reactions: [
      { reaction: "Dislike", icon: "👎", tooltip: "Dislike this answer" },
    ],
  },
  {
    text: "Answer 3",
    id: 3,
    answer: "Maybe",
    reactions: [],
  },
];

describe("Answers Component", () => {
  it("should render the answers and reactions correctly", () => {
    render(<Answers answers={mockAnswers} />);
    expect(screen.getByText("Answers")).toBeInTheDocument();
    mockAnswers.forEach((item) => {
      expect(screen.getByText(item.text)).toBeInTheDocument();
      expect(screen.getByText(item.answer)).toBeInTheDocument();
    });
  });

  it("should render nothing if answers prop is empty", () => {
    render(<Answers answers={[]} />);
    expect(screen.queryByText(/Answer/)).not.toBeInTheDocument();
  });
});

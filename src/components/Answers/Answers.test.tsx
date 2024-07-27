import React from "react";
import { render, screen } from "@testing-library/react";
import Answers from "./";

const mockAnswers = [
  {
    title: "Answer 1",
    id: 1,
    answer: "Yes",
    options: [
      { reaction: "Like", icon: "👍", tooltip: "Like this answer" },
      { reaction: "Love", icon: "❤️", tooltip: "Love this answer" },
    ],
  },
  {
    title: "Answer 2",
    id: 2,
    answer: "No",
    options: [
      { reaction: "Dislike", icon: "👎", tooltip: "Dislike this answer" },
    ],
  },
  {
    title: "Answer 3",
    id: 3,
    answer: "Maybe",
    options: [],
  },
];

describe("Answers Component", () => {
  it("should render the answers and reactions correctly", () => {
    render(<Answers answers={mockAnswers} />);
    expect(screen.getByText("Answers")).toBeInTheDocument();
    mockAnswers.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.answer)).toBeInTheDocument();
    });
  });

  it("should render nothing if answers prop is empty", () => {
    render(<Answers answers={[]} />);
    expect(screen.queryByText(/Answer/)).not.toBeInTheDocument();
  });
});

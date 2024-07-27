import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PollForm from "./";
import { getPollData, submitPollData } from "../../api";
import { pollSteps } from "./data";

// Mock API functions
jest.mock("../../api", () => ({
  getPollData: jest.fn(),
  submitPollData: jest.fn(),
}));

describe("PollForm Component", () => {
  const mockSubmitPollData = submitPollData as jest.Mock;
  const mockGetPollData = getPollData as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the initial poll question and reactions", () => {
    render(<PollForm />);

    expect(screen.getByText("How was your week overall?")).toBeInTheDocument();

    expect(screen.getByText("👍")).toBeInTheDocument();
    expect(screen.getByText("🤔")).toBeInTheDocument();
    expect(screen.getByText("👎")).toBeInTheDocument();
  });

  it("should progress to the next question when a reaction is clicked", async () => {
    render(<PollForm />);

    fireEvent.click(screen.getByText("👍"));

    await waitFor(() => {
      expect(
        screen.getByText("What was the highlight of your week?")
      ).toBeInTheDocument();
    });
  });

  it("should display the Answers component when all questions are answered", async () => {
    mockSubmitPollData.mockResolvedValueOnce({ data: { id: 1 } });
    mockGetPollData.mockResolvedValueOnce(pollSteps);

    render(<PollForm />);

    for (let i = 0; i < pollSteps.length; i++) {
      fireEvent.click(screen.getByText("👍"));
      if (i + 1 < pollSteps.length) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(
          screen.getByText(pollSteps[i + 1]?.title || "")
        ).toBeInTheDocument();
      }
    }

    await waitFor(() => {
      expect(screen.getByText("Answers")).toBeInTheDocument();
    });
  });

  it("should call API functions when form is completed", async () => {
    mockSubmitPollData.mockResolvedValueOnce({ data: { id: 1 } });
    mockGetPollData.mockResolvedValueOnce(pollSteps);

    render(<PollForm />);

    for (let i = 0; i < pollSteps.length; i++) {
      fireEvent.click(screen.getByText("👍"));
      if (i + 1 < pollSteps.length) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(
          screen.getByText(pollSteps[i + 1]?.title || "")
        ).toBeInTheDocument();
      }
    }

    await waitFor(async () => {
      expect(mockSubmitPollData).toHaveBeenCalledWith(
        pollSteps.map((p) => ({ ...p, answer: "👍" }))
      );
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(mockGetPollData).toHaveBeenCalledWith(1);
    });
  });
});

import { PollItem } from "./types";

export const pollSteps: PollItem[] = [
  {
    title: "How was your week overall?",
    id: 1,
    answer: "",
    options: [
      { icon: "👍", reaction: "like", tooltip: "Like" },
      { icon: "🤔", reaction: "think", tooltip: "Think" },
      { icon: "👎", reaction: "dislike", tooltip: "Dislike" },
    ],
  },
  {
    title: "What was the highlight of your week?",
    id: 2,
    answer: "",
    options: [
      { icon: "👍", reaction: "like", tooltip: "Like" },
      { icon: "🤔", reaction: "think", tooltip: "Think" },
      { icon: "👎", reaction: "dislike", tooltip: "Dislike" },
    ],
  },
  {
    title: "Did you face any challenges this week?",
    id: 3,
    answer: "",
    options: [
      { icon: "👍", reaction: "like", tooltip: "Like" },
      { icon: "🤔", reaction: "think", tooltip: "Think" },
      { icon: "👎", reaction: "dislike", tooltip: "Dislike" },
    ],
  },
  {
    title: "What are you looking forward to next week?",
    id: 4,
    answer: "",
    options: [
      { icon: "👍", reaction: "like", tooltip: "Like" },
      { icon: "🤔", reaction: "think", tooltip: "Think" },
      { icon: "👎", reaction: "dislike", tooltip: "Dislike" },
    ],
  },
  {
    title: "Is there anything you would like to improve for next week?",
    id: 5,
    answer: "",
    options: [
      { icon: "👍", reaction: "like", tooltip: "Like" },
      { icon: "🤔", reaction: "think", tooltip: "Think" },
      { icon: "👎", reaction: "dislike", tooltip: "Dislike" },
    ],
  },
];

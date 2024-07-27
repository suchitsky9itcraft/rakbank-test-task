import { PollItem } from "./types";

export const pollSteps: PollItem[] = [
  {
    text: "How was your week overall?",
    id: 1,
    answer: "",
    reactions: [
      { icon: "👍", reaction: "like", tooltip: "Like" },
      { icon: "🤔", reaction: "think", tooltip: "Think" },
      { icon: "👎", reaction: "dislike", tooltip: "Dislike" },
    ],
  },
  {
    text: "What was the highlight of your week?",
    id: 2,
    answer: "",
    reactions: [
      { icon: "👍", reaction: "like", tooltip: "Like" },
      { icon: "🤔", reaction: "think", tooltip: "Think" },
      { icon: "👎", reaction: "dislike", tooltip: "Dislike" },
    ],
  },
  {
    text: "Did you face any challenges this week?",
    id: 3,
    answer: "",
    reactions: [
      { icon: "👍", reaction: "like", tooltip: "Like" },
      { icon: "🤔", reaction: "think", tooltip: "Think" },
      { icon: "👎", reaction: "dislike", tooltip: "Dislike" },
    ],
  },
  {
    text: "What are you looking forward to next week?",
    id: 4,
    answer: "",
    reactions: [
      { icon: "👍", reaction: "like", tooltip: "Like" },
      { icon: "🤔", reaction: "think", tooltip: "Think" },
      { icon: "👎", reaction: "dislike", tooltip: "Dislike" },
    ],
  },
  {
    text: "Is there anything you would like to improve for next week?",
    id: 5,
    answer: "",
    reactions: [
      { icon: "👍", reaction: "like", tooltip: "Like" },
      { icon: "🤔", reaction: "think", tooltip: "Think" },
      { icon: "👎", reaction: "dislike", tooltip: "Dislike" },
    ],
  },
];

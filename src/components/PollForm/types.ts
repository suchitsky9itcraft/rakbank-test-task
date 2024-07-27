import { ReactionItem } from "../Reaction";

export type PollItem = {
  title: string;
  id: number;
  answer: string;
  options: ReactionItem[];
};
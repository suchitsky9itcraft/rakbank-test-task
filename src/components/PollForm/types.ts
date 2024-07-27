import { ReactionItem } from "../Reaction";

export type PollItem = {
  text: string;
  id: number;
  answer: string;
  reactions: ReactionItem[];
};
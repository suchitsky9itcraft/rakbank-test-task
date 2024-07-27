import React from "react";
import { PollItem } from "../PollForm/types";

type AnswersProps = {
  answers: PollItem[];
};

const Answers: React.FC<AnswersProps> = ({ answers }) => {
  if (answers.length === 0) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">No answers yet</div>
    );
  }
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="p-2 mb-4 text-2xl font-bold text-white rounded-md bg-main">
        Answers
      </div>
      {answers.map((item, index) => (
        <div key={index} className="mb-2 text-left">
          <b className="text-lg font-semibold text-gray-700">{item.title}</b>:{" "}
          <b className="text-lg font-semibold text-blue-600">{item.answer}</b>
        </div>
      ))}
    </div>
  );
};

export default Answers;

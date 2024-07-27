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
      <div className="text-2xl font-bold mb-4 bg-main text-white p-2 rounded-md">
        Answers
      </div>
      {answers.map((item, index) => (
        <div key={index} className="mb-2 text-left">
          <b className="font-semibold text-gray-700 text-lg">{item.text}</b>:{" "}
          <b className="font-semibold text-blue-600 text-lg">{item.answer}</b>
        </div>
      ))}
    </div>
  );
};

export default Answers;

import React, { useState } from "react";
import Circle from "../Circle";
import Reactions from "../Reaction";
import { PollItem } from "./types";
import { pollSteps } from "./data";
import { getPollData, submitPollData } from "../../api";
import Answers from "../Answers";

const PollForm: React.FC = () => {
  const [steps, setSteps] = useState<PollItem[]>(pollSteps);

  const [activeStep, setActiveStep] = useState<PollItem>(pollSteps[0]);

  const [formCompleted, setFormCompleted] = useState(false);

  const handlePollReaction = (reaction: string): void => {
    setSteps((prev) => {
      let nextItemIndex = 0;
      const updatedSteps = prev.map((item, index) => {
        if (item.id === activeStep.id) {
          nextItemIndex = index + 1;
          return {
            ...item,
            answer: reaction,
          };
        }
        return item;
      });
      if (nextItemIndex === updatedSteps.length) {
        setFormCompleted(true);
        submitPollData(updatedSteps).then((data) => {
          getPollData(data.data.id).then((data) => {
            setSteps(data);
          });
        });
        return updatedSteps;
      }
      setActiveStep(updatedSteps[nextItemIndex]);
      return updatedSteps;
    });
  };

  return (
    <div className="flex justify-between w-full h-screen">
      <div
        className={` bg-main flex items-center gap-16 pl-8 text-white transition-all duration-500 ease-in-out
            ${!formCompleted ? "w-1/2" : "w-0 pl-0"}`}
      >
        <div className="flex flex-col gap-2">
          {/* ? change filled circle behavior update value of `filled` props of <Circle /> component  */}
          {steps.map((item, index) => (
            <Circle
              filled={Boolean(item.answer)}
              key={`circle-item-${index}`}
            />
          ))}
        </div>
        <div
          className={`relative w-1/2 h-full ${formCompleted ? "hidden" : ""}`}
        >
          {steps.map((item, index) => {
            const activeIndex = steps.findIndex(
              (step) => step.id === activeStep.id
            );
            return (
              <div
                className={`text-6xl font-bold text-left absolute w-full transition-all duration-500 ease-in-out left-1/2 transform -translate-x-1/2 -translate-y-1/2
                ${
                  activeStep.id === item.id
                    ? "top-1/2"
                    : `${activeIndex > index ? "top-[-150%]" : "top-[150%]"}`
                }
            `}
                key={`question-item-${index}`}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`${
          !formCompleted ? "w-1/2" : "w-full"
        } flex justify-center items-center transition-all duration-500 ease-in-out`}
      >
        {formCompleted ? (
          <Answers answers={steps} />
        ) : (
          <Reactions items={activeStep.options} onClick={handlePollReaction} />
        )}
      </div>
    </div>
  );
};

export default PollForm;

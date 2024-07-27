import axios from "axios";
import { PollItem } from "./components/PollForm/types";

export const submitPollData = async (postData: PollItem[]) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      postData
    );
    if (response.status === 201 && response?.data) {
      localStorage.setItem("pollSteps", JSON.stringify(response.data));
      return response;
    } else {
      throw new Error(`Failed to post data. Status code: ${response.status}`);
    }
  } catch (error: any) {
    throw new Error(`Failed to post data. Error: ${error?.message}`);
  }
};

export const getPollData = async (id: number) => {
  try {
    const data = JSON.parse(localStorage.getItem("pollSteps") || "");
    if (data.id === id) {
      return Object.keys(data).reduce((acc: PollItem[], key) => {
        if (
          typeof data[key] === "object" &&
          data[key] !== null &&
          !Array.isArray(data[key])
        ) {
          acc.push(data[key]);
        }
        return acc;
      }, []);
    } else {
      throw new Error(`Failed to get data.`);
    }
  } catch (error: any) {
    throw new Error(`Failed to get data. Error: ${error?.message}`);
  }
};

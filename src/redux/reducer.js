import { GET_DATA } from "./actionType";

export const getDataReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};

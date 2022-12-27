import axios from "axios";

import { GET_DATA } from "./actionType";

export const getData = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products"
    );
    dispatch({ type: GET_DATA, payload: res.data });
  } catch (e) {
    console.log(e.message);
  }
};

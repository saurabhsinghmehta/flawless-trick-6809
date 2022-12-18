import * as types from "./actiontype";
import axios from "axios";
const getRequest = () => {
  return {
    type: types.GET_REQUEST,
  };
};

const getSuccess = (payload) => {
  return {
    type: types.GET_SUCCESS,
    payload,
  };
};

const getError = () => {
  return {
    type: types.GET_ERROR,
  };
};

const GetData = (params) => (dispatch) => {
  // console.log(params)
  dispatch(getRequest());
  return axios
    .get(`http://localhost:8080/cart`)
    .then((res) => dispatch(getSuccess(res.data)))

    .catch((e) => dispatch(getError()));
};

const PostData = (param) => (dispatch) => {
    // console.log(params)
    dispatch(getRequest());
    return axios
      .post(`http://localhost:8080/cart`,param)
      .then((res) => dispatch(getSuccess(res.data)))
  
      .catch((e) => dispatch(getError()));
  };

export { GetData,PostData };

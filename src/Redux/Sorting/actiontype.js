import * as types from "./action";
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

const getData = (params) => (dispatch) => {
  // console.log(params)
  dispatch(getRequest());
  return axios
    .get(`http://localhost:8080/bfc`, params)
    .then((res) => dispatch(getSuccess(res.data)))

    .catch((e) => dispatch(getError()));
};

export { getData };

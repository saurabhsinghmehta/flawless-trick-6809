import axios from "axios";
import * as types from "./actionTypes";

export const getRequest = () => {
  return {
    type: types.GET_Data_REQUEST,
  };
};

export const getSuccess = (payload) => {
  return {
    type: types.GET_Data_SUCCESS,
    payload,
  };
};

export const getFailure = () => {
  return {
    type: types.GET_Data_FAILURE,
  };
};
const edit = (id, payload) => (dispatch) => {
  return axios
    .patch(`https://bfc-i90o.onrender.com/bfc/${id}`, payload)
    .then((res) => {})
    .catch((err) => {});
};
const deleteDataFromCart = (queryParams) => (dispatch) => {
  return axios.delete(`https://bfc-i90o.onrender.com/bfc/${queryParams}`).then(() => {
    alert("delete data successfully");
  });
};

const update = (queryParams) => (dispatch) => {
  return axios.patch(`https://bfc-i90o.onrender.com/bfc/${queryParams}`).then((r) => {
    console.log(r.data);
  });
};

const getdata = (params) => (dispatch) => {
  dispatch(getRequest());
  return axios
    .get(`https://bfc-i90o.onrender.com/bfc`)
    .then((res) => dispatch(getSuccess(res.data[params])))

    .catch((e) => dispatch(getFailure()));
};

const addNewData = (productData) => (dispatch) => {
  return axios
    .post(`https://bfc-i90o.onrender.com/bfc`, productData)
    .then((res) => {
      alert("Add data successfully");
    })
    .catch((e) => {
      console.log(e);
    });
};

export { addNewData, getdata, deleteDataFromCart, update, edit };

import * as types from "./actionTypes";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

const Productreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_Data_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.GET_Data_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }

    case types.GET_Data_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
      };
    }
    default:
      return state;
  }
};

export default Productreducer;

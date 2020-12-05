const defaultState = {
  status: "NOT_FETCHED",
  data: [],
};

const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_DATAS":
      return { ...state, status: "FETCHING_DATAS" };
    case "FETCH_DATAS_SUCCESS":
      return {
        ...state,
        status: "FETCHED_DATAS",
        data: action.data,
      };
    case "FETCH_DATAS_FAILED":
      return {
        ...state,
        status: "FETCHING_DATAS_FAILED",
        error: action.error,
      };
    default:
      return state;
  }
};

export default dataReducer;

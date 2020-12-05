import dataReducer from "./dataReducer";

const rootReducer = (state, action) => {
  return dataReducer(state, action);
};

export default rootReducer;

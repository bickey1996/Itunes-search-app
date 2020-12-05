import { combineReducers } from "redux";

import dataReducer from "./dataReducer";

const appReducer = combineReducers({
  data: dataReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;

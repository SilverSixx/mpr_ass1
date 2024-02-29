import { createStore, combineReducers } from "redux";
import reducers from "./Reducers";

const rootReducer = combineReducers({
  data: reducers,
});

export const store = createStore(rootReducer);

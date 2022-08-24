import { createStore } from "redux";
import { combineReducers } from "redux";
import reducer from "./moduls/todolist";

const rootReducer = combineReducers({
  reducer, // 모듈을 스토어와 연결
});
const store = createStore(rootReducer);

export default store;

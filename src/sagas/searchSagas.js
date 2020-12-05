import { call } from "ramda";
import Search from "../api/Search";
import { put } from "redux-saga/effects";

export function* search(action) {
  console.log(action);
  try {
    const res = yield call(Search, action.searchText);
    console.log(res);
    yield put({
      type: "FETCH_DATAS_SUCCESS",
      data: res.data.results,
    });
  } catch (e) {
    yield put({
      type: "FETCH_DATAS_FAILED",
      error: "error",
    });
  }
}

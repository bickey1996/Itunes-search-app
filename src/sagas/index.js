import { takeLatest } from "redux-saga/effects";
import { search } from "./searchSagas";

export default function* rootSaga() {
  yield takeLatest("FETCH_DATAS", search);
}

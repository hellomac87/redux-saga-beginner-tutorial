import { delay } from "redux-saga";
import { put, call, takeEvery, all } from "redux-saga/effects";

// worker Saga: 비동기 증가 테스크를 수행
export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: "INCREMENT" });
}

// watcher Saga: 각각의 INCREMENT_ASYNC 에 incrementAsync 테스크를 생성
export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* helloSaga() {
  console.log("Hello Sagas!");
}

// 모든 Saga들을 한번에 시작하기 위한 단일 entry point
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}

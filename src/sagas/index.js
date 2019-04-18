import axios from "axios";
import store from "../store";
import actionCreators from "../actions";
import {all,takeEvery} from "redux-saga/effects";

export function* refreshArticlesSaga() {
    yield axios.get("http://localhost:8000/api/articles/")
        .then(res => {
            store.dispatch(actionCreators.refreshArticles(res.data.articles));
        })
}

export function* deleteArticleSaga(action) {

    yield axios.delete(`http://localhost:8000/api/articles/${action.payload.id}`);
    yield refreshArticlesSaga();
}

export function* submitArticlesSaga(action) {
    yield axios.post("http://localhost:8000/api/articles/", action.payload)
    yield refreshArticlesSaga();
}

export default function* rootSaga() {
    yield takeEvery("DELETE_ARTICLE",deleteArticleSaga);
    yield takeEvery("SUBMIT_ARTICLE",submitArticlesSaga);
    yield all([refreshArticlesSaga()])
}
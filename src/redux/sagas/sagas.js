import axios from 'axios';

import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_CHATGPT_ANSWER_FAIL, FETCH_CHATGPT_ANSWER_REQUEST, FETCH_CHATGPT_ANSWER_SUCCESS } from '../actions/actions';

function* fetchChatGPTResponseSaga(action) {
    try {
        const response = yield call(
            axios.post,
            'https://api.openai.com/v1/completions',
            {
                model: "text-davinci-003",
                prompt: action.prompt,
                max_tokens: 1000,
                temperature: 0.5
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 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',
                },
            },
        );
        yield put({ type: FETCH_CHATGPT_ANSWER_SUCCESS, response });
    } catch (e) {
        yield put({ type: FETCH_CHATGPT_ANSWER_FAIL, e });
    }
}

function* chatGPTResponseSaga() {
    yield takeLatest(FETCH_CHATGPT_ANSWER_REQUEST, fetchChatGPTResponseSaga);
}

export default chatGPTResponseSaga;

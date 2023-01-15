import { FETCH_CHATGPT_ANSWER_FAIL, FETCH_CHATGPT_ANSWER_REQUEST, FETCH_CHATGPT_ANSWER_SUCCESS } from '../actions/actions';

const initialState = {
    response: null,
    error: null,
    isLoading: false,
};

export default function chatGPTReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CHATGPT_ANSWER_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_CHATGPT_ANSWER_SUCCESS:
            const { response } = action;
            return {
                ...state,
                response,
                isLoading: false,
            };
        case FETCH_CHATGPT_ANSWER_FAIL:
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };
        default:
            return state;
    }
}

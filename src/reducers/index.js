import {handleActions} from "redux-actions";

let reducers = handleActions({
        REFRESH_ARTICLES: (state, action) => (
            {
                ...state,
                articles: action.payload.articles
            }
        )
    },
    {articles: []}
);

export default reducers;
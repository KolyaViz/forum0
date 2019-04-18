import {createActions} from "redux-actions";

const actionCreators = createActions({
    DELETE_ARTICLE: (id)=>({id}),
    SUBMIT_ARTICLE: (title,body,author)=>({title,body,author}),
    REFRESH_ARTICLES: (articles) => ({articles}),
});

export default actionCreators;


import React, {Component} from "react";
import actionCreators from "../../../actions";
import {connect} from "react-redux";

class Article extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(id) {
        this.props.onDelete(id);
        // axios.delete(`http://localhost:8000/api/articles/${id}`)
        //     .then(()=>{
        //         axios.get("http://localhost:8000/api/articles/")
        //             .then(res => {
        //                 store.dispatch(actionCreators.refreshArticles(res.data.articles));
        //             })
        //     });
    }

    render() {
        let {title, body, author, _id} = this.props;
        return (
            <article>
                <div>{title}</div>
                <div>{body}</div>
                <div>{author}</div>
                <button onClick={() => this.handleDelete(_id)}>Delete</button>
            </article>
        )
    }
}

const matDispatchToProps = dispatch => ({
    onDelete: id => {
        dispatch(actionCreators.deleteArticle(id))
    }
});

export default connect(() => ({}),matDispatchToProps)(Article);
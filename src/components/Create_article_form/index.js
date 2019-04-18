import React, {Component} from "react";
import actionCreators from "../../actions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Create_article_form extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.title = '';
        this.setTitleRef = elem => {
            this.title = elem;
        };
        this.body = '';
        this.setBodyRef = elem => {
            this.body = elem;
        };
        this.author = '';
        this.setAuthorRef = elem => {
            this.author = elem;
        };

        this.articleIsSubmit = false
    }

    handleSubmit() {
        let title = this.title.value;
        let body = this.body.value;
        let author = this.author.value;
        this.props.onSubmit(title,body,author);
        this.articleIsSubmit = true
    }

    render() {
        let {handleSubmit} = this;

        if(this.articleIsSubmit){
            this.articleIsSubmit = false;
            return (<Redirect to="/"/>)
        }else{
            return (
                <div>
                    <input type="text" placeholder="title" ref={this.setTitleRef}/>
                    <textarea cols="50" rows="10" placeholder="text" ref={this.setBodyRef}></textarea>
                    <input type="text" placeholder="author" ref={this.setAuthorRef}/>
                    <button onClick={() => {
                        handleSubmit()
                    }}>Submit
                    </button>
                </div>
            )
        }
    }
}

const matDispatchToProps = dispatch => ({
    onSubmit: (title,body,author) => {
        dispatch(actionCreators.submitArticle(title,body,author))
    }
});

export default connect(() => ({}),matDispatchToProps)(Create_article_form);
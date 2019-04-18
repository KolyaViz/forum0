import React, {Component} from "react";
import {connect} from "react-redux";
import Article from "./Article";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.props.reloadPage();
    }

    render() {
        return (
            <div>
                {this.props.articles.map((article, key) => {
                    return (<Article {...article} key={key}/>)
                })}
            </div>
        )
    }

};

const mapStateToProps = state => ({
    articles: state.articles
});
const mapDispatchToProps = dispatch => ({
    reloadPage: ()=>dispatch({
        type: 'reload'
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
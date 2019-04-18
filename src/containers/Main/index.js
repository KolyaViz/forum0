import React from "react";
import {connect} from "react-redux";
import HomePage from "../../components/HomePage";
import Form from "../../components/Create_article_form";
import UserPage from '../../components/UserPage';
import {Route,Switch} from "react-router-dom";
import LoginForm from "../../components/LoginForm";

let Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path="/user" component={UserPage}/>
                <Route path="/form" component={Form}/>
                <Route path="/login" component={LoginForm}/>
            </Switch>


        </main>
    )
};

let mapStateToProps = state => {
    return {
        articles: state.articles
    }
};
let mapDispatchToProps = () => ({});


export default connect(mapStateToProps, mapDispatchToProps)(Main);
import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        let {login} = this.props;
        login();

    }

    render() {
        return (this.props.isLogin) ? (<Redirect to="/"/>) : (
            <form>
                <input type="checkbox"/>
                <input type="radio"/>
                <input type="text"/>
                <input type="password"/>
                <button onClick={this.handleLogin}>login</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    isLogin: true
});
const mapDispatchToProps = dispatch => ({
    login: () => {
        dispatch({type: "reload"});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

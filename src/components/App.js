import React from "react";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import Main from "../containers/Main";
import {BrowserRouter as Router} from "react-router-dom"

const AppContainer = () => {
    return (
        <Router>
            <Header/>
            <hr/>
            <Main/>
            <hr/>
            <Footer/>
        </Router>
    )
};

export default AppContainer
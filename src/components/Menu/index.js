import React from "react";
import {Link} from "react-router-dom";

const Menu = ()=>{
    return(
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/user'>User page</Link></li>
            <li><Link to="/form">Write article</Link></li>
            <li><Link to="/login">login</Link></li>
        </ul>
    )
};
export default Menu;
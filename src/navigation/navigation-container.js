import React, { Component } from "react";
import { NavLink } from "react-router";

import "../style/navigation.css";

export default class NavigationContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return ( 
            <div className="nav-wrapper">
                <div className="nav-links">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">
                            Home
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink to="/about" activeClassName="nav-link-active">
                            About
                        </NavLink>
                    </div>
                </div>

                <div className="title">
                    {/* <h1 className="title">Lexi Lou Where Are You</h1> */}
                    <div>Lexi Lou</div>
                    <div>Where Are You</div>
                </div>
                    
                <div className="nav-links">
                    <div className="nav-link-wrapper">
                        <NavLink to="/blog" activeClassName="nav-link-active">
                            Blog
                        </NavLink>
                    </div>

                     <div className="nav-link-wrapper">
                        <NavLink to="/login" activeClassName="nav-link-active">
                            Login
                        </NavLink>
                    </div>
                </div>               
            </div>
        )
    }
}
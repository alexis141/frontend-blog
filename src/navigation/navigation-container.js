import React, { Component } from "react";
import { NavLink } from "react-router";

export default class NavigationContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <NavLink exact to="/">
                    Home
                </NavLink>

                <NavLink to="/about">
                    About
                </NavLink>

                <NavLink to="/blog">
                    Blog
                </NavLink>
                
                <NavLink to="/destinations">
                    Destinations
                </NavLink>

                <NavLink to="/login">
                    Login
                </NavLink>

                {false ? <button>Add Blog</button> : null}
            </div>
        )
    }
}
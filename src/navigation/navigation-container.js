import React from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router";

import "../style/navigation.css";

const NavigationContainer = (props) => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        //clear loggedIn (local storage, or state wherever it's stored)
        //redirect
        axios
        .delete("https://capstone-blog-2ee27fe14835.herokuapp.com/", 
            { withCredentials: true })
        .then(response => {
            if (response.status === 200) {
                props.history.push("/");
                props.handleSuccessfulLogout();
            }
            return response.data;
        })
        .catch(error => {
            console.log("Error signing out", error)
        });
    };
 
        return ( 
            <div className="nav-wrapper">
                <div className="left-side">
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

                    <div className="nav-link-wrapper">
                        <NavLink to="/blog" activeClassName="nav-link-active">
                            Blog
                        </NavLink>
                    </div>
                </div>

                
                <div className="right-side">
                    <div className="nav-link-wrapper">
                    
                        {props.loggedInStatus === "NOT_LOGGED_IN" && (
                <NavLink to="/login" activeClassName="nav-link-active">
                    Login
                </NavLink>
                )}

                        {props.loggedInStatus === "LOGGED_IN" && (
                        <a onClick={props.handleSignOut} style={{ cursor: "pointer" }}>
                            Sign Out
                        </a>
                    )}
                    </div>
                </div>
            </div>
        );
    }

    export default NavigationContainer;
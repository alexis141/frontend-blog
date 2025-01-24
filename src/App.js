import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import axios from "axios";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Login from "./pages/login";
import "./style/navigation.css";
import BlogPage from "./pages/blog";

const root = document.getElementById("root");

export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      info: { name: "" }, 
      loggedInStatus: localStorage.getItem("isLoggedIn") ? "LOGGED_IN" : "NOT_LOGGED_IN"
    };
    
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
    localStorage.setItem("isLoggedIn", true)
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
    localStorage.setItem("isLoggedIn", false)
  }

  //CHANGE TO localstorage.clear("LOGGED_IN") / set to false
  // handleSuccessfulLogout() {
  //   this.setState({
  //     loggedInStatus: "NOT_LOGGED_IN"
  //   });
  //   localStorage.setItem("isLoggedIn", false)
  // hanlde redirect
  // }

  handleSuccessfulLogout() {
    this.setState({ 
      loggedInStatus: "NOT_LOGGED_IN" 
    });
    localStorage.removeItem("isLoggedIn"); 
  }
  

  checkLoginStatus() {
    return axios
      .get("https://capstone-blog-2ee27fe14835.herokuapp.com/", { 
      withCredentials: true
    })
      .then(response => {
      const loggedIn = response.data.logged_in;
      const loggedInStatus = this.state.loggedInStatus;


      if(loggedIn && loggedInStatus === "LOGGED_IN") {
        return loggedIn;
      } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN"
        });
       } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        });
      }
    })
    .catch(error => {
      console.log("Error", error);
    })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <div>
              <NavigationContainer 
                loggedInStatus={this.state.loggedInStatus}
                handleSignOut={this.handleSuccessfulLogout} 
              />

              <Routes>

                <Route exact path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route
                path="/blog"
                element={<Blog loggedInStatus={this.state.loggedInStatus} />}
                />
                 {/* if (this.state.loggedInStatus == "Logged in ") {
                 <Route createblog />
                */}

                <Route 
                  path="/login" 
                  element={
                    <Login
                      handleSuccessfulLogin={this.handleSuccessfulLogin}
                      handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                    />
                  }
                />
              </Routes>
            </div>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}


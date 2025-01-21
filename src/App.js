
import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Login from "./pages/login";
import Auth from "./pages/auth";
import Post from "./blog/create-post";
import "./style/navigation.css";

const root = document.getElementById("root");

export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      info: { name: "" }, // Initialize info state
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  componentDidMount() {
    // Fetch data from API when the component mounts
    fetch("/test")
      .then((res) =>
        res.json().then((data) => {
          // Update the state with the fetched data
          this.setState({
            info: {
              name: data.name,
            },
          });
        })
      )
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <div>
              <NavigationContainer />

              <h2>{this.state.loggedInStatus}</h2>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route 
                  path="/login" 
                  element={
                    <Login
                      handleSuccessfulLogin={this.handleSuccessfulLogin}
                      handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
                    />
                  }
                />
              </Routes>
            </div>
          </BrowserRouter>
        </header>

        <div>
          {/* Check if info is available before rendering */}
          {this.state.info.name ? (
            <h3>{this.state.info.name}</h3>
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      </div>
    );
  }
}


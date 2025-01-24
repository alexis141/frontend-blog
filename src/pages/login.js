import React, { Component } from "react";
import axios from "axios";

import "../style/login.css";
import loginImg from "../images/login/FullSizeRender.jpg";
import { Navigate } from "react-router";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorText: "",
      redirectTo: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };


  handleSuccessNavigation() {
    this.setState({
      ["redirectTo"]: "/"
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://capstone-blog-2ee27fe14835.herokuapp.com/",
        {
          email: this.state.email,
          password: this.state.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "*",
          },
          // withCredentials: true, 
        }
      );

      // console.log("Response received:", response.data);

      if (response.data.message === "success") {
        alert("Login successful!");
        // Optionally redirect to the homepage or dashboard
        //const navigate = useNavigate()
        //navigate("/");
        this.props.handleSuccessfulLogin()
        this.handleSuccessNavigation()
      } else {
        alert(response.data.error || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Unable to connect to the server. Please try again later.");
    }
  }
  
  // handleLogout = () => {
  //   this.setState({ loggedIn: false, redirectTo: "/" });
  // };
  
  render() {
    if (this.state.redirectTo) {
      return <Navigate to={this.state.redirectTo} />;
    }

    return (
      <div className="login-page-wrapper">
        <div
          className="left-column"
          style={{
            backgroundImage: `url(${loginImg})`,
          }}
        />
        <div className="right-column">
          <h1 className="login-dash">LOGIN</h1>
          <div>{this.state.errorText}</div>
          <div>
            <form className="form" onSubmit={this.handleSubmit}>
              <input
                className="email"
                type="email"
                name="email"
                placeholder="Your email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <input
                className="password"
                type="password"
                name="password"
                placeholder="Your password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <div>
                <button className="submit" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
  
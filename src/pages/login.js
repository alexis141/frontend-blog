import React, { Component } from "react";
import axios from "axios";

import "../style/login.css";
import { Navigate } from "react-router";
//import { Navigate } from "react-router-dom";


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
        "http://127.0.0.1:8001/login",
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

      //     console.log("Response received:", response.data);

      //     if (response.data.message === "success") {
      //       alert("Login successful!");
      //     } else {
      //       alert("Invalid credentials. Please try again.");
      //     }
      //   } catch (error) {
      //     console.error("Error during login:", error);
      //     alert("Unable to connect to the server. Please try again later.");
      //   }
      // }

      console.log("Response received:", response.data);

      // Check the response message
      if (response.data.message === "success") {
        alert("Login successful!");
        // Optionally redirect to the homepage or dashboard
        //const navigate = useNavigate()
        //this.props.navigate("/");
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


  //   if (response.data.status === "created") {
  //     this.props.handleSuccessfulAuth();
  //   } else {
  //     this.setState({
  //       errorText: "Wrong email or password"
  //     });
  //     this.props.handleUnsuccessfulAuth();
  //   }
  // } catch (error) {
  //   // Handle errors inside the catch block
  //   this.setState({
  //     errorText: "An error occurred"
  //   });
  //   this.props.handleUnsuccessfulAuth();
  // }
  // }

  render() {
    if (this.state.redirectTo) {
      return <Navigate to={this.state.redirectTo} />
    }
    return (
      <div>
        <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

        <div>{this.state.errorText}</div>

        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}



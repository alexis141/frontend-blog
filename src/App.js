import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import BlogContainer from "./blog/blog-container";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";

import Login from "./pages/login";
import { useState, useEffect } from "react";

// import logo from './logo.svg';
import "./style/navigation.css";

const root = document.getElementById("root");

function App() {

  const [info, setInfo] = useState(
    { name: "" }
  );

  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("/test").then((res) =>
        res.json().then((data) => {
            // Setting a data from api
            setInfo({
                name: data.name,
            });
        })
    );
}, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* ReactDOM.createRoot(root).render(); */}
          <BrowserRouter>
            <div>
              
              <NavigationContainer />
            
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </BrowserRouter>
        
      </header>

      <div>
        {/* render fetched data */}
        <h3> { info.name } </h3>
      </div>
    </div>
  );
}

export default App;

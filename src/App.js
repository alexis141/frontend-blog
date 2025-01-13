import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import BlogContainer from "./blog/blog-container";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Destinations from "./pages/destinations";
import Resources from "./pages/resources";
import Login from "./pages/login";
// import logo from './logo.svg';
// import './style/App.css';

const root = document.getElementById("root");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* ReactDOM.createRoot(root).render(); */}
          <BrowserRouter>
            <div>
              <h1>Lexi Lou Where Are You</h1>
              <NavigationContainer />
            
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
